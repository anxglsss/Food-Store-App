import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import ContextProvider from './context/Context.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<ContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ContextProvider>

		<Footer />
	</>
)
