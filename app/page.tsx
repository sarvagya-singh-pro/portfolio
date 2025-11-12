import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Achievements />
      <Contact />
    </main>
  )
}
