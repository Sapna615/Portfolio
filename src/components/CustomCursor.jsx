import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Use MotionValues for smoother performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring configuration for the main cursor and trailing particles
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const trailConfig = { damping: 20, stiffness: 100, mass: 0.8 };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Particles for the trail
  const trailX1 = useSpring(mouseX, trailConfig);
  const trailY1 = useSpring(mouseY, trailConfig);
  const trailX2 = useSpring(mouseX, { ...trailConfig, stiffness: 70 });
  const trailY2 = useSpring(mouseY, { ...trailConfig, stiffness: 70 });

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const mouseDown = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200); // Quick reset for the "blink"
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
      {/* Trailing Particles - "Leave some" effect */}
      <motion.div
        style={{ x: trailX2, y: trailY2, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-4 h-4 bg-indigo-200/20 rounded-full blur-[2px]"
      />
      <motion.div
        style={{ x: trailX1, y: trailY1, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-3 h-3 bg-indigo-300/30 rounded-full blur-[1px]"
      />

      {/* Main Cursor Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2 : isClicked ? 0.8 : 1,
          borderColor: isHovering ? "rgba(79, 70, 229, 0.4)" : "rgba(79, 70, 229, 0.8)",
          borderWidth: isHovering ? 1 : 2,
        }}
        className="absolute w-8 h-8 rounded-full border-2 border-indigo-600 flex items-center justify-center"
      >
        {/* Blinking/Pulsing Pulse Inside */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full rounded-full bg-indigo-500/10"
        />
      </motion.div>

      {/* Main Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          backgroundColor: isClicked ? "#4338ca" : "#4f46e5", // Indigo 700 to 600
        }}
        className="absolute w-2 h-2 rounded-full"
      />

      {/* Click "Blink/Burst" Effect */}
      {isClicked && (
        <motion.div
          style={{
            x: mouseX.get(),
            y: mouseY.get(),
            translateX: "-50%",
            translateY: "-50%",
          }}
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute w-4 h-4 rounded-full border border-indigo-500"
        />
      )}
    </div>
  );
};

export default CustomCursor;
