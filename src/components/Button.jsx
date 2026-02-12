import { motion } from 'framer-motion'

const Button = ({ children, onClick, variant = 'primary', size = 'md', className = '' }) => {
  const variants = {
    primary: 'btn-gradient text-white shadow-xl hover:shadow-2xl border-2 border-white/30',
    secondary: 'bg-white text-valentine-dark-pink border-2 border-valentine-pink hover:bg-valentine-light-pink shadow-lg',
    outline: 'bg-white/30 backdrop-blur-sm border-2 border-valentine-dark-pink text-valentine-dark-pink hover:bg-valentine-light-pink hover:border-valentine-dark-pink shadow-lg'
  }

  const sizes = {
    sm: 'px-8 py-3 text-base',
    md: 'px-10 py-4 text-xl',
    lg: 'px-14 py-5 text-2xl font-bold',
    xl: 'px-20 py-7 text-3xl font-bold',
    full: 'w-full h-full text-4xl md:text-6xl font-bold'
  }

  return (
    <motion.button
      onClick={onClick}
      className={`rounded-full font-semibold transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: size !== 'full' ? 1.05 : 1.02, y: -2 }}
      whileTap={{ scale: size !== 'full' ? 0.95 : 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export default Button