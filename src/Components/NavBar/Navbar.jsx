import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { context } from '../../context/Context'
import '../NavBar/Navbar.scss'

export const Navbar = props => {
	const { getTotalCartAmount } = useContext(context)

	return (
		<div>
			<div className='navbar'>
				<div className='logo'>
					<Link to='/'>
						<h1>FOOD DELIVERY</h1>
					</Link>
				</div>
				<div className='menu'>
					<ul>
						<Link to='/' className='underline-effect'>
							Home
						</Link>
						<a href='#menu' className='underline-effect'>
							Menu
						</a>
						<Link to='/about' className='underline-effect'>
							About Us
						</Link>
						<a href='#footer' className='underline-effect'>
							Contact
						</a>
					</ul>
				</div>
				<div className='search'>
					<img src={assets.search_icon}></img>
					<div className='bask'>
						<Link to='/cart'>
							<img src={assets.basket_icon}></img>
						</Link>
						<div className={getTotalCartAmount() == 0 ? '' : 'dot'}></div>
					</div>
				</div>
				<button
					onClick={() => {
						props.setShowLogin(true)
					}}
					className='sign'
				>
					Sign In
				</button>
			</div>
		</div>
	)
}
