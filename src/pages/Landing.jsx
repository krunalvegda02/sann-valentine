import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaHeart, FaArrowRight } from 'react-icons/fa'
import FloatingHearts from '../components/FloatingHearts'
import FloatingPolaroids from '../components/FloatingPolaroids'
import CountdownTimer from '../components/CountdownTimer'
import Button from '../components/Button'

const Landing = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden ">
      <FloatingHearts />
      <FloatingPolaroids />

      <motion.div 
        className="relative z-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <FaHeart className="text-valentine-dark-pink mx-auto" size={80} />
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl font-cursive text-gradient mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hey My Love! 💕
        </motion.h1>

        <motion.div
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-2xl md:text-3xl text-valentine-dark-purple mb-4 font-cute font-semibold">
            I created this special place just for you...
          </p>
          <p className="text-xl md:text-2xl text-valentine-dark-pink font-cute">
            Because every day with you feels like Valentine's Day 💖
          </p>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-valentine-dark-purple mb-10 font-script italic font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          "You are my today and all of my tomorrows" ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-10"
        >
          <CountdownTimer />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Button 
            onClick={() => navigate('/question1')}
            size="lg"
            className="group"
          >
            Let's Begin 
            <FaArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 inline-block">
            <p className="text-lg text-valentine-dark-purple font-cute font-semibold">
              💌 Crafted with endless love, just for you 💌
            </p>
          </div>
          <p className="text-base text-valentine-dark-pink font-cute">
            Valentine's Day 2025 - A celebration of us 💑
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce-slow">💕</div>
      <div className="absolute bottom-10 right-10 text-6xl animate-float">💖</div>
      <div className="absolute top-1/4 right-20 text-5xl animate-pulse-slow">✨</div>
      <div className="absolute bottom-1/4 left-20 text-5xl animate-pulse-slow">🌸</div>
    </div>
  )
}

export default Landing