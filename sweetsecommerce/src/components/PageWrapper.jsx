import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  const variants = {
    initial: { opacity: 0, scale: 0.95, y: 30 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 1.05, y: -30 }
  };

  const transition = { duration: 0.4, ease: "easeInOut" };

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