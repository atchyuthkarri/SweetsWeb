import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  const variants = {
    initial: { opacity: 0, scale: 0.95, y: 50 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.05, y: -50 }
  };

  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      style={{ width: "100%", minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;