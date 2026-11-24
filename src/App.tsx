import { useCallback, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

/**
 * Root portfolio application orchestrating theme state, Lenis smooth scroll, and GSAP ScrollTrigger.
 */
export function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });
  const [activeSection, setActiveSection] = useState<string>('beranda');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const handleNavigate = useCallback((id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -64 });
    } else {
      target.scrollIntoView({ behavior: 'auto' });
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !rootRef.current) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Hero initial load sequence
      gsap.from('.hero-stagger', {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
      });

      // Top scroll progress bar
      gsap.to('.scroll-progress-fill', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      // Subtle parallax on hero portrait
      gsap.to('.hero-portrait-img', {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: '#beranda',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Section block reveals
      gsap.utils.toArray<HTMLElement>('.reveal-block').forEach((el) => {
        gsap.from(el, {
          y: 22,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        });
      });

      // Active navigation section tracking
      ['beranda', 'tentang', 'proyek', 'keahlian', 'pengalaman', 'kontak'].forEach((id) => {
        const sectionEl = document.getElementById(id);
        if (!sectionEl) return;
        ScrollTrigger.create({
          trigger: sectionEl,
          start: 'top 45%',
          end: 'bottom 45%',
          onEnter: () => setActiveSection(id),
          onEnterBack: () => setActiveSection(id),
        });
      });

      // Horizontal pinned project track on desktop viewports
      const mm = gsap.matchMedia();
      mm.add('(min-width: 961px)', () => {
        const track = document.querySelector<HTMLElement>('.projects-track');
        const wrapper = document.querySelector<HTMLElement>('.projects-pin-wrapper');
        if (!track || !wrapper) return;

        const getScrollAmount = () => Math.max(0, track.scrollWidth - wrapper.clientWidth);
        if (getScrollAmount() <= 0) return;

        gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: 'none',
          scrollTrigger: {
            trigger: '#proyek',
            pin: true,
            scrub: 0.8,
            start: 'top 64px',
            end: () => `+=${getScrollAmount()}`,
            invalidateOnRefresh: true,
          },
        });
      });
    }, rootRef);

    return () => {
      ctx.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <div ref={rootRef}>
      <a href="#konten-utama" className="skip-link">
        Langsung ke konten utama
      </a>

      <Header
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <div className="scroll-progress-track" aria-hidden="true">
        <div className="scroll-progress-fill" />
      </div>

      <main id="konten-utama">
        <Hero onNavigate={handleNavigate} />
        <About />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
