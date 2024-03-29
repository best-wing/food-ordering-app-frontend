'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedLettersProps {
  text: string;
}

const AnimatedLetters: React.FC<AnimatedLettersProps> = ({ text }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const letters = Array.from(text);

  return (
    <div ref={ref} className="font-bold text-[#2F4F4F] dark:text-white xs:text-[15px] sm:text-[20px] lg:text-[40px] md:text-[26px] xl:w-[80%] flex items-center justify-center">
      {letters.map((letter, index) => (
        letter === ' ' ? (
          <span key={index} style={{ width: '0.25em', display: 'inline-block' }}>&nbsp;</span>
        ) : (
          <motion.div
            key={index}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 10, opacity: isVisible ? 1 : 0 }}
            transition={{ delay: index * 0.05, type: 'spring', stiffness: 500 }}
            style={{ display: 'inline-block' }}
          >
            {letter}
          </motion.div>
        )
      ))}
    </div>
  );
};

export default AnimatedLetters;