import { motion } from 'framer-motion'

const FloatingPolaroids = () => {
  const polaroids = [
    {
      id: 1,
      url: '/src/assets/1.jpeg',
      caption: 'Us 💕',
      rotation: -8,
      left: '5%',
      top: '15%',
      delay: 0
    },
    {
      id: 2,
      url: '/src/assets/2.jpeg',
      caption: 'Forever ✨',
      rotation: 12,
      left: '75%',
      top: '20%',
      delay: 0.5
    },
    {
      id: 3,
      url: '/src/assets/3.jpeg',
      caption: 'Together 💖',
      rotation: -5,
      left: '10%',
      top: '65%',
      delay: 1
    },
    {
      id: 4,
      url: '/src/assets/4.jpeg',
      caption: 'Always 🌸',
      rotation: 10,
      left: '80%',
      top: '70%',
      delay: 1.5
    }
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {polaroids.map((polaroid) => (
        <motion.div
          key={polaroid.id}
          className="absolute hidden md:block"
          style={{
            left: polaroid.left,
            top: polaroid.top,
            rotate: polaroid.rotation
          }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0.7],
            scale: [0, 1, 1, 1],
            rotate: [0, polaroid.rotation, polaroid.rotation, polaroid.rotation],
            y: [0, -20, 0, -20]
          }}
          transition={{
            duration: 4,
            delay: polaroid.delay,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut"
          }}
        >
          <div className="bg-white p-3 shadow-2xl rounded-lg w-48">
            <img
              src={polaroid.url}
              alt={polaroid.caption}
              className="w-full h-40 object-cover rounded"
            />
            <p className="text-center text-valentine-dark-purple font-cute text-sm mt-2">
              {polaroid.caption}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingPolaroids
