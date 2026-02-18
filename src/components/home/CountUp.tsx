"use client";

import { useEffect, useState } from "react";

type Props = {
  end: number;
  duration?: number;
  inView: boolean;
  suffix?: string;
};

export default function CountUp({ end, duration = 1.5, inView, suffix = "" }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  return (
    <span>
      {count}
      <span className="text-[#5BCEE0]">{suffix}</span>
    </span>
  );
}
