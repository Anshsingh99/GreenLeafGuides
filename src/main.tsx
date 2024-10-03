import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import GardeningHomepage from './components/home.tsx'
import Footer from './components/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < GardeningHomepage/>
    <Footer/>
  </StrictMode>,
)
