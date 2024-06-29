import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login/Login'
import { Navbar } from './Components/NavBar/Navbar'
import { About } from './pages/About/About'
import { Cart } from './pages/Cart/Cart'
import { Home } from './pages/Home/Home'
import { Order } from './pages/Order/Order'

function App() {
	const [showLogin, setShowLogin] = useState(false)

	return (
		<>
			{showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
			<div className='app'>
				<Navbar setShowLogin={setShowLogin} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/order' element={<Order />} />
					<Route path='/about' element={<About />} />
				</Routes>

			</div>
		</>
	)
}

export default App
