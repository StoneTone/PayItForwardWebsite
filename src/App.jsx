import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import OurStoryPage from './components/OurStoryPage'
import VolunteerPage from './components/VolunteerPage'
import DonatePage from './components/DonatePage'
import ContactPage from './components/ContactPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App