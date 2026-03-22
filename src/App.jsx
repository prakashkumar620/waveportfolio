import { useState } from 'react'
import Navigation from './components/ui/Navigation'
import LoadingScreen from './components/ui/LoadingScreen'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Certificates from './components/sections/Certificates'
import Resume from './components/sections/Resume'
import Contact from './components/sections/Contact'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="App">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
