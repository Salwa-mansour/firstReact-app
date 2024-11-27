import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import WinterSection from './WinterSection.jsx'
import ListDom from './List.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting></Greeting>
    <ListDom></ListDom>
    <WinterSection></WinterSection>
  </StrictMode>,
)
