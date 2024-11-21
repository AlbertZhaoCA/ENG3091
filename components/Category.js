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
  const isScrolling = useRef(false);

  const positions = useRef([]);
  const colors = useRef([]);
  const canvasWidth = useRef(0);
  const canvasHeight = useRef(0);

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
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      };
    });

    colors.current = categories.map(() => getRandomColor()); // Assign random colors to each category

    canvasWidth.current = canvas.width;
    canvasHeight.current = canvas.height;
  };

  const resetToInitialPositions = () => {
    const canvas = canvasRef.current;
    setupInitialPositions(canvas);
  };

  const startAnimation = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (!positions.current.length) {
      setupInitialPositions(canvas);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      positions.current.forEach((p, index) => {
        ctx.font = "32px monospace";
        ctx.fillStyle = colors.current[index]; 
        ctx.fillText(categories[index], p.x, p.y);

        if (isScrolling.current) {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 50 || p.x > canvasWidth.current - 50) p.speedX *= -1;
          if (p.y < 50 || p.y > canvasHeight.current - 50) p.speedY *= -1;
        }
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
          resetToInitialPositions();
        }
      },
      { threshold: 0.1 },
    );

    const canvasElement = canvasRef.current;
    observer.observe(canvasElement);

    const handleScroll = () => {
      isScrolling.current = true;
      clearTimeout(isScrolling.current);

      setTimeout(() => {
        isScrolling.current = false;
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      pauseAnimation();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className="mt-24 text-4xl text-center tracking-wide">
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
      <canvas
        ref={canvasRef}
      />
    </div>
  );
};

export default CategoryAnimation;
