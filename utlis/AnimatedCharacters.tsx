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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { root: null, threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [controls]);

  const item = {
    hidden: { y: '100%', opacity: 0, translateX: -50 },
    visible: {
      y: 0,
      opacity: 1,
      translateX: 0,
      transition: { delay: 0.03, duration: 0.8, ease: 'backOut' },
    },
  };

  const words = text.split(' ').map((word) => [...word.split(''), '\u00A0']); // Include space after each word

  const Tag = tagMap[type];

  // Use React.createElement to dynamically create the HTML tag
  return React.createElement(
    Tag,
    { className, ref },
    words.map((word, wordIndex) => (
      <span key={wordIndex} style={{ display: 'inline-block', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        {word.map((char, charIndex) => (
          <motion.span
            key={charIndex}
            variants={item}
            initial="hidden"
            animate={controls}
            custom={wordIndex + charIndex / 100} // Custom delay for staggering effect
            style={{ display: 'inline-block' }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    ))
  );
};

export default AnimatedCharacters;
