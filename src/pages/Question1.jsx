import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import FloatingHearts from '../components/FloatingHearts'
import Button from '../components/Button'

const Question1 = ({ updateAnswer }) => {
  const navigate = useNavigate()
  const [noClickCount, setNoClickCount] = useState(0)

  const handleYes = () => {
    updateAnswer('q1', 'yes')
    navigate('/celebration')
  }

  const handleNo = () => {
    const newCount = noClickCount + 1
    setNoClickCount(newCount)
    if (newCount >= 3) {
      navigate('/question2')
    }
  }

  const yesButtonSize = noClickCount === 0 ? 'md' : noClickCount === 1 ? 'lg' : 'xl'
  const noButtonSize = noClickCount === 0 ? 'md' : noClickCount === 1 ? 'sm' : 'sm'

  const cuteMessages = [
    "Really? Are you sure? 🥺",
    "The Yes button looks more attractive, doesn't it? 💕",
    "Come on, you know you want to click Yes! 😊"
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <FloatingHearts />

      <motion.div 
        className="relative z-10 text-center max-w-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
          className="mb-8"
        >
          <FaHeart className="text-valentine-dark-pink mx-auto animate-heart-beat" size={100} />
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-cursive text-gradient mb-8">
          Will You Be My Valentine? 💖
        </h1>

        <motion.div
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-2xl md:text-3xl text-valentine-dark-purple mb-4 font-cute font-semibold">
            I promise to:
          </p>
          <div className="space-y-3 text-left">
            <p className="text-xl md:text-2xl text-valentine-dark-pink font-cute">✨ Make you smile every single day</p>
            <p className="text-xl md:text-2xl text-valentine-dark-pink font-cute">💕 Hold your hand through everything</p>
            <p className="text-xl md:text-2xl text-valentine-dark-pink font-cute">🌹 Bring you flowers just because</p>
            <p className="text-xl md:text-2xl text-valentine-dark-pink font-cute">🌟 Be your biggest cheerleader</p>
          </div>
        </motion.div>

        {noClickCount > 0 && (
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl text-valentine-dark-pink mb-6 font-cute font-semibold"
          >
            {cuteMessages[noClickCount - 1]}
          </motion.p>
        )}

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-12">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          >
            <Button 
              onClick={handleYes}
              size={yesButtonSize}
              className="min-w-[120px]"
            >
              Yes! 💕
            </Button>
          </motion.div>

          <Button 
            onClick={handleNo}
            variant="outline"
            size={noButtonSize}
            className="min-w-[100px]"
          >
            Maybe...
          </Button>
        </div>

        <motion.div
          className="mt-12 bg-white/40 backdrop-blur-sm rounded-2xl p-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl text-valentine-dark-purple font-script italic mb-3">
            "Every love story is beautiful, but ours is my favorite" 💫
          </p>
          <p className="text-lg text-valentine-dark-pink font-cute">
            You make my heart skip a beat 💓
          </p>
        </motion.div>
      </motion.div>

      <div className="absolute top-20 right-10 text-5xl animate-float">🌹</div>
      <div className="absolute bottom-20 left-10 text-5xl animate-bounce-slow">💝</div>
    </div>
  )
}

export default Question1