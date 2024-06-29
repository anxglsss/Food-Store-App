import React from 'react'
import { assets } from '../../assets/assets'
import '../Footer/Footer.scss'

export const Footer = () => {
	return (
		<>
			<div className='footer' id='footer'>
				<div className='content'>
					<hr></hr>
					<div className='logo' id='footer'>
						<h1>FOOD DELIVERY</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Repellendus modi enim ex eligendi! Voluptate dignissimos
							blanditiis, laborum non praesentium fugiat
						</p>
						<div className='images'>
							<img src={assets.facebook_icon} alt='' />
							<img src={assets.twitter_icon} alt='' />
							<img src={assets.linkedin_icon} alt='' />
						</div>
					</div>
					<div className='list'>
						<h1>COMPANY</h1>
						<ul>
							<li>Home</li>
							<li>About Us</li>
							<li>Privacy Policy</li>
							<li>Delivery</li>
						</ul>
					</div>
					<div className='contact'>
						<h1>Contact Us</h1>
						<h3>+998 99 999 99 99</h3>
						<h3>+998 99 999 99 99</h3>
						<h3>+998 99 999 99 99</h3>
						<p>230103016@sdu.edu.kz</p>
					</div>
				</div>
				<h2>© 2024 [Food Delivery]. All rights reserved.</h2>
			</div>
		</>
	)
}
