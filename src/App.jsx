import { Navbar, Logos, Hero, Service, Destinations, Bookings, Testimonials, Subscribe, Footer } from "./components"
import { Decore } from "./assets"

function App() {

  return (
    <>
    <div className="relative overflow-x-hidden"> 
      <img src={Decore} className="absolute z-[-1] overflow-x-hidden ml-[55%] scale-125"/>
        <Navbar />
        <Hero />
        <Service />
        <Destinations />
        <Bookings />
        <Testimonials />
        <Logos />
        <Subscribe />
        <Footer />
        </div>
    </>
  )
}

export default App
