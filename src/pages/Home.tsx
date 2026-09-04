import About from '../components/About'
import DocBridge from '../components/DocBridge'
// import Guides from '../components/Guides'
import Hero from '../components/Hero'
import LabOverview from '../components/LabOverview'
import Metrics from '../components/Metrics'
import Network from '../components/Network'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Working from '../components/Working'

/** The dashboard: what the lab is and what it is doing right now. */
const Home = () => (
  <main id="home">
    <Hero />
    <Metrics />
    <About />
    <DocBridge />
    <LabOverview />
    <Network />
    <Services />
    <Projects />
    <Working />
  </main>
)

export default Home
