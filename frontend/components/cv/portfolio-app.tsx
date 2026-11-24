"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PortfolioData } from "@/lib/types";
import { ContactSection } from "./contact-section";
import { HomeSection } from "./home-section";
import { MobileHeader } from "./mobile-header";
import { NavButtons, NavDots } from "./nav-controls";
import { PortfolioSection } from "./portfolio-section";
import { ProjectModal } from "./project-modal";
import { Sidebar } from "./sidebar";
import { SkillsSection } from "./skills-section";
import { ThemeToggle } from "./theme-toggle";

const SECTION_COUNT = 4;

interface PortfolioAppProps {
  data: PortfolioData;
}

export function PortfolioApp({ data }: PortfolioAppProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const busyRef = useRef(false);
  const indexRef = useRef(0);

  const updateLayout = useCallback(() => {
    const header = headerRef.current;
    const height =
      header && window.getComputedStyle(header).display !== "none" ? header.offsetHeight : 0;

    setHeaderHeight(height);
    setSectionHeight(window.innerHeight - height);
  }, []);

  useEffect(() => {
    updateLayout();

    const observer = new ResizeObserver(updateLayout);

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    window.addEventListener("resize", updateLayout);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
    };
  }, [updateLayout]);

  useEffect(() => {
    indexRef.current = activeIndex;
  }, [activeIndex]);

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= SECTION_COUNT || busyRef.current) {
      return;
    }

    busyRef.current = true;
    indexRef.current = index;
    setActiveIndex(index);

    window.setTimeout(() => {
      busyRef.current = false;
    }, 1050);
  }, []);

  const step = useCallback(
    (delta: number) => {
      goTo(indexRef.current + delta);
    },
    [goTo],
  );

  useEffect(() => {
    if (modalOpen) {
      return;
    }

    let wheelLock = false;
    let touchStartY = 0;

    const onWheel = (event: WheelEvent) => {
      if (wheelLock) {
        return;
      }

      wheelLock = true;
      step(event.deltaY > 0 ? 1 : -1);

      window.setTimeout(() => {
        wheelLock = false;
      }, 1100);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };

    const onTouchEnd = (event: TouchEvent) => {
      const endY = event.changedTouches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - endY;

      if (Math.abs(delta) > 55) {
        step(delta > 0 ? 1 : -1);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        step(1);
      }

      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        step(-1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [modalOpen, step]);

  const openProject = useCallback(() => setModalOpen(true), []);
  const closeProject = useCallback(() => setModalOpen(false), []);

  const modalProject = data.projects.find((project) => project.has_modal) ?? null;

  return (
    <>
      <ThemeToggle />
      <MobileHeader data={data} activeIndex={activeIndex} headerRef={headerRef} />

      <div id="root">
        <Sidebar data={data} />

        <main
          id="main"
          style={headerHeight > 0 ? { paddingTop: headerHeight } : undefined}
        >
          <NavDots count={SECTION_COUNT} activeIndex={activeIndex} onSelect={goTo} />

          <div
            id="slider"
            style={
              sectionHeight > 0
                ? { transform: `translateY(-${activeIndex * sectionHeight}px)` }
                : undefined
            }
          >
            <HomeSection data={data} active={activeIndex === 0} height={sectionHeight} />
            <SkillsSection data={data} active={activeIndex === 1} height={sectionHeight} />
            <PortfolioSection
              data={data}
              active={activeIndex === 2}
              height={sectionHeight}
              onOpenProject={openProject}
            />
            <ContactSection data={data} active={activeIndex === 3} height={sectionHeight} />
          </div>

          <NavButtons
            activeIndex={activeIndex}
            total={SECTION_COUNT}
            onPrev={() => step(-1)}
            onNext={() => step(1)}
          />
        </main>
      </div>

      <ProjectModal open={modalOpen} onClose={closeProject} project={modalProject} />
    </>
  );
}
