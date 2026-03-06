import HeroSearch from '../components/HeroSearch'
import FlightDeals from '../components/FlightDeals'
import WhyChooseUs from '../components/WhyChooseUs'
import Newsletter from '../components/Newsletter'

// Home page — sección principal con buscador, ofertas destacadas y propuesta de valor
export default function Home() {
  return (
    <main>
      <HeroSearch />
      <FlightDeals />
      <WhyChooseUs />
      <Newsletter />
    </main>
  )
}
