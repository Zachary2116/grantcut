import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './missionApp.jsx'
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>
)

export default Mission;