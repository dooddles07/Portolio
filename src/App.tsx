import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-base">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Projects />
          <Experience />
          <Credentials />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
