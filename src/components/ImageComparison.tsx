import React, { useState, useRef, useCallback, useEffect } from "react";

type Props = {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
};

export const ImageComparison: React.FC<Props> = ({
  beforeImage,
  afterImage,
  altBefore = "Antes",
  altAfter = "Depois",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let newPosition = ((clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
    },
    [isDragging],
  );

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden rounded-3xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] aspect-square"
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseLeave={handleMouseUp}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={() => setIsDragging(false)}
    >
      <img
        src={beforeImage}
        alt={altBefore}
        className="block h-full w-full object-cover"
        draggable={false}
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt={altAfter}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </div>

      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white">
        Antes
      </div>
      <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-black">
        Depois
      </div>

      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize flex items-center justify-center"
        style={{ left: `calc(${sliderPosition}% - 1px)` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-200 ${
            isDragging ? "scale-110" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
          >
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" style={{ display: "none" }} />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="-ml-2 text-foreground"
          >
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
      </div>
    </div>
  );
};
