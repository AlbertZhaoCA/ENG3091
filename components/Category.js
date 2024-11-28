"use client";

import React, { useEffect, useRef } from "react";

const categories = [
  "Service",
  "Interest",
  "Professional",
  "Cultural",
  "Performing Arts",
  "Recreational",
  "Sports",
  "Leadership",
];

const CategoryAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const isAnimating = useRef(false);
  const angleOffsets = useRef([]);

  const positions = useRef([]);
  const colors = useRef([]);
  const canvasWidth = useRef(0);
  const canvasHeight = useRef(0);
  const baseSpeed = 1.25;

  const getRandomColor = () => {
    const randomInt = () => Math.floor(Math.random() * 256);
    return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
  };

  const setupInitialPositions = (canvas) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 3;

    positions.current = categories.map((_, i) => {
      const angle = (2 * Math.PI * i) / categories.length;
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        baseX: centerX + radius * Math.cos(angle),
        baseY: centerY + radius * Math.sin(angle),
        radiusX: 50 + Math.random() * 50,
        radiusY: 50 + Math.random() * 50,
      };
    });

    angleOffsets.current = categories.map(() => Math.random() * Math.PI * 2);
    colors.current = categories.map(() => getRandomColor());

    canvasWidth.current = canvas.width;
    canvasHeight.current = canvas.height;
  };

  const startAnimation = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (!positions.current.length) {
      setupInitialPositions(canvas);
    }

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const speedMultiplier = 1.25 + Math.sin(time / 2) * 0.5;
      time += baseSpeed * speedMultiplier;

      positions.current.forEach((p, index) => {
        const angle = time / 50 + angleOffsets.current[index];
        p.x = p.baseX + p.radiusX * Math.sin(angle);
        p.y = p.baseY + p.radiusY * Math.cos(angle);

        ctx.font = "32px monospace";
        ctx.fillStyle = colors.current[index];
        ctx.fillText(categories[index], p.x, p.y);
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    if (!isAnimating.current) {
      isAnimating.current = true;
      draw();
    }
  };

  const pauseAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      isAnimating.current = false;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          pauseAnimation();
        }
      },
      { threshold: 0.1 },
    );

    const canvasElement = canvasRef.current;
    observer.observe(canvasElement);

    return () => {
      observer.disconnect();
      pauseAnimation();
    };
  }, []);

  return (
    <div>
      <h1 className="mt-24 text-5xl text-center tracking-wide">
        Your Life Here Can be
        <span className="text-[#FF0000] text-7xl"> c</span>
        <span className="text-[#FF7F00] mx-[2px] text-7xl">o</span>
        <span className="text-[#FFFF00] text-6xl">l</span>
        <span className="text-[#00FF00] mx-[2px] text-7xl">o</span>
        <span className="text-[#0000FF] text-7xl">r</span>
        <span className="text-[#4B0082] mx-[2px] text-8xl">F</span>
        <span className="text-[#8B00FF] text-8xl">U</span>
        <span className="text-[#FF00FF] mx-[2px] text-8xl">L</span>
        <span className="text-black text-8xl">L</span>
      </h1>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CategoryAnimation;
