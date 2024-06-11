import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header.jsx'
import Form1 from './Components/Form1.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Form1/>
  </React.StrictMode>,
)
