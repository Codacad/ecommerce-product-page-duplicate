import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import ProductConextProvider from './context/ProductConextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductConextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductConextProvider>
  </React.StrictMode>,
)
