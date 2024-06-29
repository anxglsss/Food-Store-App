import React, { useContext } from 'react'
import '../../Components/FoodDisplay/FoodDisplay.scss'
import { context } from '../../context/Context'
import { FoodItem } from '../FoodItem/FoodItem'

export const FoodDisplay = ({ category }) => {
	const { food_list } = useContext(context)

	return (
		<>
			<div className='content'>
				<h1>Choose delicious food</h1>
				<div className='list'>
					{food_list.map((item, index) => {
						if (category == item.category || category === 'All') {
							return (
								<FoodItem
									id={item._id}
									desc={item.description}
									image={item.image}
									name={item.name}
									price={item.price}
									category={item.category}
									key={index}
								/>
							)
						}
						return null
					})}
				</div>
			</div>
		</>
	)
}
