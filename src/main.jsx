import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CursorFollower from "../src/components/CursorFollower.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CursorFollower />
  </StrictMode>,
)
