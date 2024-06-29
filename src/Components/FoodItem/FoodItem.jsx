import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import '../../Components/FoodItem/FoodItem.scss'
import { context } from '../../context/Context'

export const FoodItem = props => {
	const [count, setCount] = useState(0)

	const { cartItem, addCartItem, removeCartItem } = useContext(context)

	return (
		<div className='wrap'>
			<div className='card'>
				<div className='wrapper'>
					<img className='food' src={props.image}></img>
					{!cartItem[props.id] ? (
						<img
							className='add'
							onClick={() => {
								addCartItem(props.id)
								setCount(prev => prev + 1)
							}}
							src={assets.add_icon_white}
						></img>
					) : (
						<div className='counter'>
							<img
								className='green'
								onClick={() => {
									removeCartItem(props.id)
									setCount(prev => prev - 1)
								}}
								src={assets.remove_icon_red}
							></img>
							<p>{count}</p>
							<img
								className='red'
								onClick={() => {
									addCartItem(props.id)
									setCount(prev => prev + 1)
								}}
								src={assets.add_icon_green}
							></img>
						</div>
					)}
				</div>
				<div className='title'>
					<p>{props.name}</p>
					<img className='rating' width='70' src={assets.rating_starts}></img>
				</div>
				<div className='desc'>
					<p>{props.desc}</p>
				</div>
				<h1>${props.price}</h1>
			</div>
		</div>
	)
}
