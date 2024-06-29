import React, { useState } from 'react'
import { FoodDisplay } from '../../Components/FoodDisplay/FoodDisplay'
import { Header } from '../../Components/Header/Header'
import { Menu } from '../../Components/Menu/Menu'
import '../Home/Home.scss'

export const Home = () => {
	const [category, setCategory] = useState('All')

	return (
		<>
			<div>
				<Header />
				<Menu category={category} setCategory={setCategory} />
				<FoodDisplay category={category} />
			</div>
		</>
	)
}
