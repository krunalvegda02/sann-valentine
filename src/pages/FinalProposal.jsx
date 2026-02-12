import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import FloatingHearts from '../components/FloatingHearts'
import Button from '../components/Button'

const FinalProposal = ({ updateAnswer }) => {
  const navigate = useNavigate()

  const handleYes = () => {
    updateAnswer('final', 'yes')
    navigate('/celebration')
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <FloatingHearts />

      <motion.div 
        className="relative z-10 text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mb-6"
        >
          <FaHeart className="text-valentine-dark-pink mx-auto" size={100} />
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-cursive text-gradient mb-6">
          This Is It... My Final Heart 😄
        </h1>

        <motion.div
          className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 mb-8 shadow-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-2xl md:text-3xl text-valentine-dark-purple mb-3 font-cute font-semibold">
            I've been waiting for this moment...
          </p>
          <p className="text-xl md:text-2xl text-valentine-dark-pink font-cute">
            To tell you that you're my everything 💕
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full max-w-3xl relative z-10 px-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.03, 1],
            y: [0, -10, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 rounded-3xl blur-2xl opacity-60"
            animate={{
              background: [
                'linear-gradient(135deg, #FFB6D9 0%, #E5D4FF 100%)',
                'linear-gradient(135deg, #FF69B4 0%, #DDA0DD 100%)',
                'linear-gradient(135deg, #FFB6D9 0%, #E5D4FF 100%)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <motion.button
            onClick={handleYes}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full py-16 px-8 rounded-3xl font-cursive text-white overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #FF69B4 0%, #DDA0DD 50%, #FFB6D9 100%)'
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.8) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.8) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative flex flex-col items-center gap-6">
              <motion.span 
                className="text-6xl md:text-8xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💕
              </motion.span>
              
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className="text-4xl md:text-6xl font-bold drop-shadow-lg">YES!</span>
              </motion.div>
              
              <span className="text-3xl md:text-5xl font-bold drop-shadow-lg leading-tight">
                Be My Valentine!
              </span>
              
              <motion.span 
                className="text-6xl md:text-8xl"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                💕
              </motion.span>
            </div>
            
            <motion.div
              className="absolute inset-0 rounded-3xl"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(255, 105, 180, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.1)',
                  '0 0 60px rgba(221, 160, 221, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.2)',
                  '0 0 30px rgba(255, 105, 180, 0.5), inset 0 0 30px rgba(255, 255, 255, 0.1)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-8 text-xl md:text-2xl text-valentine-dark-pink font-cute text-center relative z-10 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        No more buttons to click... just this one big YES! 😊💖
      </motion.p>

      <motion.div
        className="mt-6 text-center relative z-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8">
          <p className="text-xl text-valentine-dark-purple font-script italic mb-3">
            "I choose you. And I'll choose you over and over and over." 💫
          </p>
          <p className="text-lg text-valentine-dark-pink font-cute">
            Forever and always, it's you 💑
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default FinalProposal