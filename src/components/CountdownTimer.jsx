import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CountdownTimer = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date('2024-01-29T00:00:00')
      const now = new Date()
      const diff = now - startDate

      const seconds = Math.floor(diff / 1000)
      const minutes = Math.floor(seconds / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      const years = Math.floor(days / 365)
      const months = Math.floor((days % 365) / 30)

      setTimeElapsed({
        years,
        months: months,
        days: days % 30,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      })
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
    >
      <h3 className="text-2xl md:text-3xl font-script text-valentine-dark-pink mb-6 text-center">
        Time We've Been Together 💕
      </h3>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        <div className="text-center">
          <motion.div
            className="text-3xl md:text-4xl font-bold text-valentine-dark-purple"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {timeElapsed.years}
          </motion.div>
          <div className="text-sm text-valentine-dark-pink font-cute">Years</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-valentine-dark-purple">
            {timeElapsed.months}
          </div>
          <div className="text-sm text-valentine-dark-pink font-cute">Months</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-valentine-dark-purple">
            {timeElapsed.days}
          </div>
          <div className="text-sm text-valentine-dark-pink font-cute">Days</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-valentine-dark-purple">
            {timeElapsed.hours}
          </div>
          <div className="text-sm text-valentine-dark-pink font-cute">Hours</div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-valentine-dark-purple">
            {timeElapsed.minutes}
          </div>
          <div className="text-sm text-valentine-dark-pink font-cute">Minutes</div>
        </div>
        
        <div className="text-center">
          <motion.div
            className="text-3xl md:text-4xl font-bold text-valentine-dark-purple"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {timeElapsed.seconds}
          </motion.div>
          <div className="text-sm text-valentine-dark-pink font-cute">Seconds</div>
        </div>
      </div>

      <p className="text-center text-valentine-dark-purple font-cute mt-6 text-lg">
        Since January 29, 2023 ✨
      </p>
    </motion.div>
  )
}

export default CountdownTimer
