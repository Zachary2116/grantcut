import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Services from './servicesApp.jsx'
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Services />
    <Footer />
  </StrictMode>
)

export default Services;