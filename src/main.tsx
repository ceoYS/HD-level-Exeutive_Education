import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/tokens.css'
import './styles/global.css'
import './styles/components.css'
import './styles/home.css'
import './styles/book.css'
import './styles/book01-insight.css'
import './styles/editorial.css'
import './styles/certification.css'
import './styles/book03.css'
import './styles/book04.css'
import './styles/book05.css'
import './styles/part1.css'
import './styles/ai-foundation.css'
import './styles/build.css'
import './styles/cases.css'
import './styles/hdec-context.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
