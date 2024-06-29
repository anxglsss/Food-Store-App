import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { context } from '../../context/Context'
import '../Cart/Cart.scss'

// Assuming you have a context like CartContext

export const Cart = () => {
	const { food_list, cartItem, removeCartItem, getTotalCartAmount } =
		useContext(context)

	const navigate = useNavigate()
	return (
		<>
			<div className='cart'>
				<div className='items'>
					<div className='title'>
						<p className='nameOfProp'>Items</p>
						<p className='nameOfProp'>Title</p>
						<p className='nameOfProp'>Price</p>
						<p className='nameOfProp'>Quantity</p>
						<p className='nameOfProp'>Total</p>
						<p className='nameOfProp'>Remove</p>
					</div>
					<br />
					<hr />
					{food_list.map((item, index) => {
						if (cartItem[item._id] > 0) {
							return (
								<>
									<div className='title item' key={item._id}>
										<img width='110' src={item.image}></img>
										<h3>{item.name}</h3>
										<h3>${item.price}</h3>
										<h3>{cartItem[item._id]}</h3>
										<h3>${item.price * cartItem[item._id]}</h3>
										<h3
											onClick={() => {
												removeCartItem(item._id)
											}}
											className='remove'
										>
											x
										</h3>
									</div>
									<hr></hr>
								</>
							)
						}
						return null
					})}
				</div>
			</div>
			<div className='container'>
				<div className='cart-container'>
					<div className='cart-totals'>
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
					</div>
					<button
						className='checkout-button'
						onClick={() => {
							navigate('/order')
						}}
					>
						PROCEED TO CHECKOUT
					</button>
				</div>
				<div className='promo-code'>
					<label htmlFor='promo'>If you have a promo code, Enter it here</label>
					<input type='text' id='promo' placeholder='promo code'></input>
					<button className='submit-button'>Submit</button>
				</div>
			</div>
		</>
	)
}
