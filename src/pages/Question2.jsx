import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaHeart, FaGift } from 'react-icons/fa'
import FloatingHearts from '../components/FloatingHearts'
import Button from '../components/Button'

const Question2 = ({ updateAnswer }) => {
  const navigate = useNavigate()
  const [noClickCount, setNoClickCount] = useState(0)

  const handleYes = () => {
    updateAnswer('q2', 'yes')
    navigate('/celebration')
  }

  const handleNo = () => {
    const newCount = noClickCount + 1
    setNoClickCount(newCount)
    if (newCount >= 3) {
      navigate('/question3')
    }
  }

  const yesButtonSize = noClickCount === 0 ? 'lg' : noClickCount === 1 ? 'xl' : 'xl'

  const cuteMessages = [
    "I'll bring you your favorite snacks every day! 🍫",
    "I'll watch all your favorite shows with you! 📺",
    "Please? I'll even let you have the last slice of pizza! 🍕"
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <FloatingHearts />

      <motion.div 
        className="relative z-10 text-center max-w-3xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-8 flex justify-center gap-4"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaGift className="text-valentine-dark-purple" size={60} />
          <FaHeart className="text-valentine-dark-pink animate-heart-beat" size={80} />
          <FaGift className="text-valentine-dark-purple" size={60} />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-cursive text-gradient mb-8">
          Let Me Show You How Much I Care... 💝
        </h1>

        <motion.div
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-2xl md:text-3xl text-valentine-dark-purple mb-4 font-cute font-bold">
            Will you be my Valentine?
          </p>
          <p className="text-xl md:text-2xl text-valentine-dark-pink font-cute">
            And let me make you the happiest person alive? 🌹
          </p>
        </motion.div>

        {noClickCount > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6"
          >
            <p className="text-xl md:text-2xl text-valentine-dark-pink font-cute bg-white/50 rounded-3xl p-6 inline-block font-semibold shadow-lg">
              {cuteMessages[noClickCount - 1]}
            </p>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-12">
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <Button 
              onClick={handleYes}
              size={yesButtonSize}
              className="min-w-[180px] shadow-2xl"
            >
              Yes, YES! 💕
            </Button>
          </motion.div>

          <Button 
            onClick={handleNo}
            variant="outline"
            size="sm"
            className="opacity-70"
          >
            Still thinking...
          </Button>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-2 gap-4 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 hover:scale-105 transition-transform">
            <p className="text-3xl mb-2">🎵</p>
            <p className="text-base text-valentine-dark-purple font-cute font-semibold">I'll sing your favorite songs</p>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 hover:scale-105 transition-transform">
            <p className="text-3xl mb-2">🌟</p>
            <p className="text-base text-valentine-dark-purple font-cute font-semibold">You're my shining star</p>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 hover:scale-105 transition-transform">
            <p className="text-3xl mb-2">☕</p>
            <p className="text-base text-valentine-dark-purple font-cute font-semibold">Morning coffee together</p>
          </div>
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-5 hover:scale-105 transition-transform">
            <p className="text-3xl mb-2">🌙</p>
            <p className="text-base text-valentine-dark-purple font-cute font-semibold">Sweet goodnight texts</p>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-6 bg-white/40 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-lg text-valentine-dark-purple font-script italic font-semibold">
            "With you, every moment is a beautiful memory in the making" 💖
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Question2