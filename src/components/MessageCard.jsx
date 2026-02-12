import { motion } from 'framer-motion'

const MessageCard = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={`bg-white/50 backdrop-blur-sm rounded-3xl p-6 shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(255, 182, 217, 0.3)' }}
    >
      {children}
    </motion.div>
  )
}

export default MessageCard
