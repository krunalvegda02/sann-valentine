import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Landing from './pages/Landing'
import Question1 from './pages/Question1'
import Question2 from './pages/Question2'
import Question3 from './pages/Question3'
import FinalProposal from './pages/FinalProposal'
import Celebration from './pages/Celebration'
import Gallery from './pages/Gallery'

function App() {
  const [answers, setAnswers] = useState({
    q1: null,
    q2: null,
    q3: null,
    final: null
  })

  const updateAnswer = (question, answer) => {
    setAnswers(prev => ({ ...prev, [question]: answer }))
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-valentine-light-pink via-valentine-light-purple to-valentine-light-pink">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route 
            path="/question1" 
            element={<Question1 answers={answers} updateAnswer={updateAnswer} />} 
          />
          <Route 
            path="/question2" 
            element={<Question2 answers={answers} updateAnswer={updateAnswer} />} 
          />
          <Route 
            path="/question3" 
            element={<Question3 answers={answers} updateAnswer={updateAnswer} />} 
          />
          <Route 
            path="/final" 
            element={<FinalProposal answers={answers} updateAnswer={updateAnswer} />} 
          />
          <Route 
            path="/celebration" 
            element={<Celebration />} 
          />
          <Route 
            path="/gallery" 
            element={<Gallery />} 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App