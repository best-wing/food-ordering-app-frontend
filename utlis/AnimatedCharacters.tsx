import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AnimatedCharactersProps {
  text: string;
  type: 'paragraph' | 'heading1' | 'heading2';
  className?: string;
}

const tagMap = {
  paragraph: 'p',
  heading1: 'h1',
  heading2: 'h2',
};

const AnimatedCharacters: React.FC<AnimatedCharactersProps> = ({ text, type, className }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLParagraphElement | HTMLHeadingElement | null>(null);

  useEffect(() => {
    // A boolean flag to know if the component is still mounted.
    let isMounted = true;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isMounted) {
          controls.start('visible');
        }
      },
      { root: null, threshold: 0.1 }
    );
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  
    return () => {
      isMounted = false;
      observer.disconnect();
    };
  }, [controls]);

  const item = {
    hidden: { y: '100%', opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.03, duration: 0.8, ease: 'backOut' },
    }),
  };

  const Tag = tagMap[type];

  // Calculate a delay offset based on character index across the whole text
  let delayOffset = 0;

  return React.createElement(
    Tag,
    { className, ref, style: { overflow: 'hidden' } }, // Apply overflow hidden to prevent word breaking due to container constraints
    text.split(' ').map((word, wordIndex) => {
      return (
        <React.Fragment key={wordIndex}>
          <span style={{ display: 'inline-block' }}>
            {word.split('').map((char, charIndex) => {
              const totalIndex = delayOffset + charIndex;
              return (
                <motion.span
                  key={charIndex}
                  variants={item}
                  initial="hidden"
                  animate={controls}
                  custom={totalIndex} // Stagger based on the total index across the full text
                  style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
          {/* Add a non-breaking space after each word */}
          {wordIndex < text.length - 1 && <span style={{ whiteSpace: '' }}>&nbsp;</span>}
        </React.Fragment>
      );
    })
  );
};

export default AnimatedCharacters;
