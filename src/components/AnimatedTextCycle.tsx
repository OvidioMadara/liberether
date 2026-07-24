import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

function parseMarkedText(text: string) {
  const segments: React.ReactNode[] = [];
  const regex = /\[\[(.*?)\]\]/g;
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    const before = text.slice(lastIndex, match.index);
    if (before) {
      segments.push(<span key={key++}>{before}</span>);
    }
    segments.push(
      <span key={key++} className="text-ember">
        {match[1]}
      </span>
    );
    lastIndex = regex.lastIndex;
  }

  const after = text.slice(lastIndex);
  if (after) {
    segments.push(<span key={key++}>{after}</span>);
  }

  return segments;
}

export default function AnimatedTextCycle({
  words,
  interval = 3000,
  className = "",
}: AnimatedTextCycleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval, words.length]);

  const variants = {
    hidden: { y: -16, opacity: 0, filter: "blur(6px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
    exit: {
      y: 16,
      opacity: 0,
      filter: "blur(6px)",
      transition: { duration: 0.3, ease: "easeIn" as const },
    },
  };

  return (
    <span className="relative inline">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentIndex}
          className={`inline ${className}`}
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {parseMarkedText(words[currentIndex])}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
