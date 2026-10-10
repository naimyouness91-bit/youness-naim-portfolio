import LanguageProvider from './context/LanguageProvider'
import ThemeProvider from './context/ThemeProvider'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Navbar />
        <main className="pt-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </main>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
