"use client";

interface NavDotsProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function NavDots({ count, activeIndex, onSelect }: NavDotsProps) {
  return (
    <div className="nav-dots" id="navDots">
      {Array.from({ length: count }, (_, index) => (
        <div
          key={index}
          className={`nd${index === activeIndex ? " active" : ""}`}
          onClick={() => onSelect(index)}
          role="button"
          tabIndex={0}
          aria-label={`Section ${index + 1}`}
        />
      ))}
    </div>
  );
}

interface NavButtonsProps {
  activeIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export function NavButtons({ activeIndex, total, onPrev, onNext }: NavButtonsProps) {
  return (
    <div className="nav-btns">
      <button
        className="nb"
        id="btnUp"
        aria-label="Ke atas"
        disabled={activeIndex === 0}
        onClick={onPrev}
      >
        <i className="fa-solid fa-chevron-up" />
      </button>
      <button
        className="nb"
        id="btnDn"
        aria-label="Ke bawah"
        disabled={activeIndex === total - 1}
        onClick={onNext}
      >
        <i className="fa-solid fa-chevron-down" />
      </button>
    </div>
  );
}
