import React, { useContext } from 'react'
import { context } from '../../context/Context'
import '../Order/Order.scss'

export const Order = () => {
	const { getTotalCartAmount } = useContext(context)
	return (
		<div className='container'>
			<div className='delivery-information'>
				<h2>Delivery Information</h2>
				<form>
					<div className='input-group'>
						<input type='text' id='first-name' placeholder='First name' />
						<input type='text' id='last-name' placeholder='Last name' />
					</div>
					<div className='input-group'>
						<input type='email' id='email' placeholder='Email address' />
					</div>
					<div className='input-group'>
						<input type='text' id='street' placeholder='Street' />
					</div>
					<div className='input-group'>
						<input type='text' id='city' placeholder='City' />
						<input type='text' id='state' placeholder='State' />
					</div>
					<div className='input-group'>
						<input type='text' id='zip-code' placeholder='Zip code' />
						<input type='text' id='country' placeholder='Country' />
					</div>
					<div className='input-group'>
						<input type='tel' id='phone' placeholder='Phone' />
					</div>
				</form>
			</div>
			<div className='cart-totals'>
				<h2>Cart Totals</h2>
				<div className='totals-item'>
					<span>Subtotal</span>
					<span>${getTotalCartAmount()}</span>
				</div>
				<div className='totals-item'>
					<span>Delivery Fee</span>
					<span>$3</span>
				</div>
				<div className='totals-item'>
					<span>Total</span>
					<span>${getTotalCartAmount() + 2}</span>
				</div>
				<button className='checkout-button'>PROCEED TO PAYMENT</button>
			</div>
		</div>
	)
}
