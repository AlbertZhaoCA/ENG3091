'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const categories = [
  "Service",
  "Interest",
  "Professional",
  "Cultural",
  "Performing Arts",
  "Sports",
  "Leadership",
];

const rainbowColors = [
  '#1E3A8A', // 深蓝
  '#2563EB', // 蓝
  '#3B82F6', // 浅蓝
  '#60A5FA', // 更浅的蓝
  '#93C5FD', // 非常浅的蓝

];

export default function Page() {
  const [containerRef, setContainerRef] = useState(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const updateContainerSize = () => {
      if (containerRef) {
        setContainerSize({
          width: containerRef.offsetWidth,
          height: containerRef.offsetHeight,
        });
      }
    };

    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);

    return () => window.removeEventListener('resize', updateContainerSize);
  }, [containerRef]);

  useEffect(() => {
    if (containerSize.width > 0 && containerSize.height > 0) {
      const newPositions = [];
      const padding = 50; // 设置边距

      categories.forEach((category, index) => {
        let randomX, randomY;
        let isOverlapping;

        do {
          isOverlapping = false;
          randomX = Math.random() * (containerSize.width - padding * 2) - (containerSize.width / 2 - padding);
          randomY = Math.random() * (containerSize.height - padding * 2) - (containerSize.height / 2 - padding);

          for (let pos of newPositions) {
            const distance = Math.sqrt((randomX - pos.x) ** 2 + (randomY - pos.y) ** 2);
            if (distance < 100) { // 调整这个值以控制最小间距
              isOverlapping = true;
              break;
            }
          }
        } while (isOverlapping);

        newPositions.push({ x: randomX, y: randomY });
      });

      setPositions(newPositions);
    }
  }, [containerSize]);

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <h1 className="text-7xl text-black pt-4 font-bold text-center">
        Explore The Clubs By Your Interest
      </h1>
      <div
        ref={setContainerRef}
        className="relative w-full h-[calc(100vh-160px)] flex justify-center items-center"
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {categories.map((category, index) => {
          const fontSize = (Math.random() * 2 + 1.5).toFixed(2); // 随机字体大小
          const color = rainbowColors[index % rainbowColors.length];
          const position = positions[index] || { x: 0, y: 0 };

          return (
            <motion.div
              key={category}
              initial={{
                x: 0,
                y: 0,
                scale: 0,
              }}
              animate={{
                x: position.x,
                y: position.y,
                scale: 1,
              }}
              transition={{
                duration: 2 + Math.random() * 2, // 随机动画时长
                delay: index * 0.2, // 依次绽放
                ease: 'easeOut',
              }}
              style={{
                fontSize: `${fontSize}rem`,
                color,
                position: 'absolute',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              }}
              title={category}
            >
              <Link href={`/categories/${category.toLowerCase()}`}>
                {category}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}