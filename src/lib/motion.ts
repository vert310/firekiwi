import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleOnPress = {
  scale: 0.98,
  transition: {
    duration: 0.1,
  },
};

export const cardHover = {
  y: -4,
  borderColor: "#1C1C1C",
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const buttonHover = {
  brightness: 1.1,
  boxShadow: "0 0 30px rgba(230, 255, 8, 0.5)",
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

