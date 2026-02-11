import './App.css'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const location = useLocation()

  // Page transition variants
  const pageVariants = {
  initial: { opacity: 0, scale: 0.95 },
  in: { opacity: 1, scale: 1 },
  out: { opacity: 0, scale: 1.05 }
}

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5
  }

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/products"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <ProductPage />
            </motion.div>
          }
        />
        <Route
          path="/products/:slug"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              transition={pageTransition}
            >
              <ProductDetailPage />
            </motion.div>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App