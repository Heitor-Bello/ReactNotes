import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'sonner'


// Fizemos o import dessa forma (import nomeado) -> meu componente sempre 
//vai ter o mesmo nome que esse do import, se mudar lá tem que mudar aqui no import.
import { App } from './app'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Toaster richColors />
  </React.StrictMode>,
)
