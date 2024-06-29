import React from 'react'
import { menu_list } from '../../assets/assets'
import '../../Components/Menu/Menu.scss'

export const Menu = props => {
	return (
		<>
			<div className='menu' id='menu'>
				<h1>Our Menu</h1>
				<h2>Choose needed to you</h2>
				<div className='list'>
					{menu_list.map((item, index) => {
						return (
							<div
								onClick={() => {
									props.setCategory(prev =>
										prev === item.menu_name ? 'All' : item.menu_name
									)
								}}
								className='item'
								key={index}
							>
								<img
									src={item.menu_image}
									alt=''
									className={props.category == item.menu_name ? 'active' : ''}
									key={index}
								/>
								<h3>{item.menu_name}</h3>
							</div>
						)
					})}
				</div>
				<hr></hr>
			</div>
		</>
	)
}
