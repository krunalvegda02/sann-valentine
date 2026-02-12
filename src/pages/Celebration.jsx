import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaHeart, FaArrowRight } from 'react-icons/fa'
import Confetti from 'react-confetti'
import FloatingHearts from '../components/FloatingHearts'
import Button from '../components/Button'

const Celebration = () => {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={true}
        numberOfPieces={200}
        colors={['#FFB6D9', '#E5D4FF', '#FF69B4', '#DDA0DD']}
      />
      <FloatingHearts />

      <motion.div 
        className="relative z-10 text-center max-w-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-6"
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaHeart 
            className="text-valentine-dark-pink mx-auto" 
            size={80}
          />
        </motion.div>

        <motion.h1 
          className="text-4xl md:text-6xl font-cursive text-gradient mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          She Said YES! 🎉💕
        </motion.h1>

        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-3xl md:text-4xl text-valentine-dark-purple mb-4 font-cute font-bold">
            You just made me the happiest! 💖
          </p>
          <p className="text-2xl md:text-3xl text-valentine-dark-pink font-cute">
            I can't wait to create a lifetime of beautiful memories with you ✨
          </p>
        </motion.div>

        <motion.div
          className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 mb-8 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-3xl font-script text-valentine-dark-pink mb-6">
            My Promise to You 💍
          </p>
          <p className="text-xl md:text-2xl text-valentine-dark-purple font-cute leading-relaxed mb-6">
            Every moment with you is a treasure. You make my heart smile in ways I never knew possible.
          </p>
          <div className="space-y-3 text-left max-w-lg mx-auto">
            <p className="text-lg text-valentine-dark-pink font-cute">✨ I'll cherish every moment with you</p>
            <p className="text-lg text-valentine-dark-pink font-cute">😊 I'll make you laugh every single day</p>
            <p className="text-lg text-valentine-dark-pink font-cute">💕 I'll love you more with each passing day</p>
            <p className="text-lg text-valentine-dark-pink font-cute">🌟 I'll be your safe place, always</p>
          </div>
          <p className="text-xl text-valentine-dark-purple font-script mt-6 italic">
            Here's to our beautiful journey together! 💫
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Button 
            onClick={() => navigate('/gallery')}
            size="lg"
            className="group"
          >
            See Our Beautiful Memories 
            <FaArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          className="mt-8 text-6xl"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          💑
        </motion.div>
      </motion.div>

      {/* Animated emoji decorations */}
      <div className="absolute top-10 left-10 text-6xl animate-bounce-slow">🎊</div>
      <div className="absolute top-10 right-10 text-6xl animate-bounce-slow">🎊</div>
      <div className="absolute bottom-10 left-10 text-6xl animate-float">💝</div>
      <div className="absolute bottom-10 right-10 text-6xl animate-float">💝</div>
    </div>
  )
}

export default Celebration