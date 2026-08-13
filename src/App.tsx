import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import WorkWithUs from './pages/WorkWithUs'
import TheAfricanStory from './pages/TheAfricanStory'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="page-enter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/the-african-story" element={<TheAfricanStory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
