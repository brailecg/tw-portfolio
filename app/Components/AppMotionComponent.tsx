"use client";
import { motion } from "framer-motion";

const animateVariants = {
  opacity: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1 },
  },
  opacityY: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  },
  opacityX: {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  },
  opacityInX: {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  },
};

const AppMotionComponent = ({
  children,
  className,
  variant = "opacityY",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof animateVariants;
}) => {
  return (
    <motion.div
      initial={animateVariants[variant].initial}
      whileInView={animateVariants[variant].whileInView}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={className}>
      {children}
    </motion.div>
  );
};

export default AppMotionComponent;
