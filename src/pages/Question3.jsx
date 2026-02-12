import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import FloatingHearts from '../components/FloatingHearts'
import Button from '../components/Button'

const Question3 = ({ updateAnswer }) => {
  const navigate = useNavigate()
  const [noClickCount, setNoClickCount] = useState(0)

  const handleYes = () => {
    updateAnswer('q3', 'yes')
    navigate('/celebration')
  }

  const handleNo = () => {
    const newCount = noClickCount + 1
    setNoClickCount(newCount)
    if (newCount >= 2) {
      navigate('/final')
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      <FloatingHearts />

      <motion.div 
        className="relative z-10 text-center max-w-4xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <FaHeart className="text-valentine-dark-pink mx-auto" size={70} />
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-cursive text-gradient mb-8">
          My Heart Belongs to You 💖
        </h1>

        <motion.div
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-3xl md:text-4xl text-valentine-dark-purple mb-4 font-cute font-bold">
            Will You Be My Valentine?
          </p>
          <p className="text-xl md:text-2xl text-valentine-dark-pink font-cute">
            I promise to love you more each day 🌹
          </p>
        </motion.div>

        <motion.p 
          className="text-2xl md:text-3xl text-valentine-dark-pink mb-10 font-cute font-semibold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          You know you want to say yes! 😊💕
        </motion.p>

        {noClickCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl text-valentine-dark-pink font-cute bg-white/60 rounded-3xl p-8 inline-block shadow-lg font-semibold">
              {noClickCount === 1 
                ? "Come on! Look how big this YES button is! 😄" 
                : "Okay okay, I see you need more convincing... 😅"}
            </p>
          </motion.div>
        )}

        <div className="flex flex-col gap-8 items-center justify-center mt-12">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="w-full max-w-md"
          >
            <Button 
              onClick={handleYes}
              size="xl"
              className="w-full h-32 text-4xl md:text-5xl shadow-2xl"
            >
              YES! 💕
            </Button>
          </motion.div>

          <Button 
            onClick={handleNo}
            variant="outline"
            size="sm"
            className="opacity-50 text-xs"
          >
            Not yet...
          </Button>
        </div>

        <motion.div
          className="mt-12 bg-white/40 backdrop-blur-sm rounded-2xl p-8 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl text-valentine-dark-purple font-script italic mb-4">
            "In a sea of people, my eyes will always search for you" 🌊💫
          </p>
          <p className="text-lg text-valentine-dark-pink font-cute">
            You are my forever and always 💕
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Question3