import { LanguageProvider } from './i18n/LanguageContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Industries from './components/Industries.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import TechStack from './components/TechStack.jsx'
import AICapabilities from './components/AICapabilities.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink text-paper">
        <Navbar />
        <main id="top">
          <Hero />
          <About />
          <Services />
          <Industries />
          <CaseStudies />
          <TechStack />
          <AICapabilities />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
