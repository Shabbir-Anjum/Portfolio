import './App.css'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Navbar from './Components/Header/Navbar'
import Hero from './Components/Main/Hero'
import FeaturedProject from './Components/Projects/FeaturedProject'

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <FeaturedProject/>
    </>
  )
}

export default App
