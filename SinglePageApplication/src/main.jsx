import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header.jsx'
import Form1 from './Components/Form1.jsx'
import Form2 from './Components/Form2.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <div className='form-container'>
    <Form1/>
    <Form2/>
    </div>
  </React.StrictMode>,
)
