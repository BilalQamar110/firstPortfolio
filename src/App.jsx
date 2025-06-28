
import Header from './components/Header'

import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'
import Skill from './components/Skill';



export default function App() {
  return (
    
    <div className="font-sans bg-gray-50 text-gray-900">

      <Header/>
      
      <About />
      
      <Projects />
      <Education />
      <Skill/>
      <Contact />
      <Footer />
    </div>
  )
}
