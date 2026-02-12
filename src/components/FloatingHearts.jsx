import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 30,
    size: 15 + Math.random() * 25
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{ left: heart.left, bottom: '-50px' }}
          animate={{
            y: [0, -1200],
            x: [0, Math.sin(heart.id) * 100],
            opacity: [0, 0.6, 0.8, 0.6, 0],
            rotate: [0, 360],
            scale: [0.5, 1, 0.8, 1, 0.5]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHeart 
            className="text-valentine-dark-pink drop-shadow-lg" 
            size={heart.size}
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255, 105, 180, 0.5))'
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts