import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Research from './components/Research'
import Publications from './components/Publications'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Media from './components/Media'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Research />
      <Publications />
      <Experience />
      <Achievements />
      <Testimonials />
      <Media />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
