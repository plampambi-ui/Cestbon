import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import RecentWork from './components/RecentWork'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import BookingWidget from './components/BookingWidget'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <RecentWork />
      <Pricing />
      <FAQ />
      <BookingWidget />
      <Footer />
    </div>
  )
}

export default App
