import React from 'react'
import ReactDOM from 'react-dom/client' //herramienta para renderizar
import App from './hiWord'
import {FirstApp} from './firstApp'
import { CounterApp } from './counterApp'

import './styles.css'
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp valor={ 20 }/>
    </React.StrictMode>
)