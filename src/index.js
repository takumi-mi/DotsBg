import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Texts from './Texts'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <Texts />
    <App />
  </React.StrictMode>,
  rootElement
)
