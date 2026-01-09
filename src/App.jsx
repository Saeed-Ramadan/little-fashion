import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Story from "./components/Story"
import Products from "./components/Products"
import AboutTabs from "./components/AboutTabs"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutTabs />
      <Story />
      <Products />
      <Footer />
    </div>
  )
}

export default App