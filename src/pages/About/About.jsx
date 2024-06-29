import React from 'react'
import '../About/About.scss'

export const About = () => {
	return (
		<>
			<div className='about-container'>
				<header className='about-header'>
					<h1>About Us</h1>
					<p>
						Welcome to our company. We are dedicated to providing the highest
						quality products and services to our customers.
					</p>
				</header>

				<section className='about-mission'>
					<h2>Our Mission</h2>
					<p>
						Our mission is to provide high quality, high integrity, and high
						performance products.
					</p>
				</section>

				<section className='about-vision'>
					<h2>Our Vision</h2>
					<p>
						Our vision is to create innovative, customer-centric solutions that
						make life easier and more enjoyable.
					</p>
				</section>

				<section className='about-values'>
					<h2>Our Values</h2>
					<ul>
						<li>Integrity: We believe in doing the right thing.</li>
						<li>
							Customer Focus: We are dedicated to providing great customer
							service.
						</li>
						<li>Excellence: We aim for excellence in everything we do.</li>
					</ul>
				</section>

				<section className='about-history'>
					<h2>Our History</h2>
					<p>
						Founded in 2000, our company has grown from a small startup to a
						leading company in our industry. We have a proud history of
						innovation and customer satisfaction.
					</p>
				</section>

				<section className='about-contact'>
					<h2>Contact Us</h2>
					<p>
						We are always here to assist you. Reach out to us through the
						following channels:
					</p>
					<p>
						<strong>Email:</strong> support@company.com
					</p>
					<p>
						<strong>Phone:</strong> +1 (123) 456-7890
					</p>
					<p>
						<strong>Address:</strong>
						1234 Company St, Suite 100, City, State, ZIP
					</p>
				</section>
			</div>
		</>
	)
}
