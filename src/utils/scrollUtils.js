import { animate } from "framer-motion";

// Animated scroll using Framer Motion for smooth easing
export const smoothScroll = (targetY) => {
  const startY = window.scrollY;

  animate(startY, targetY, {
    duration: 0.8,
    ease: "easeInOut",
    onUpdate: (latest) => window.scrollTo(0, latest),
  });
};

// Scroll to section by ID with offset for fixed navbar
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (!element) return;

  const offset = 80; // navbar height
  const targetPosition = element.offsetTop - offset;

  smoothScroll(targetPosition);
};
