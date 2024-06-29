import { createContext, useEffect, useState } from 'react'
import { food_list } from '../assets/assets'

import React from 'react'

export const context = createContext(null)

const ContextProvider = props => {
	const [cartItem, setCartItem] = useState({})

	const getTotalCartAmount = () => {
		let totalAmount = 0
		for (const item in cartItem) {
			if (cartItem[item] > 0) {
				let itemInfo = food_list.find(product => product._id === item)
				totalAmount += itemInfo.price * cartItem[item]
			}
		}
		return totalAmount
	}

	function addCartItem(id) {
		if (!cartItem[id]) {
			setCartItem(prev => ({
				...prev,
				[id]: 1,
			}))
		} else {
			setCartItem(prev => ({
				...prev,
				[id]: prev[id] + 1,
			}))
		}
	}

	useEffect(() => {
		console.log(cartItem)
	}, [cartItem])

	function removeCartItem(id) {
		setCartItem(prev => ({
			...prev,
			[id]: prev[id] - 1,
		}))
	}

	const contextValue = {
		food_list,
		cartItem,
		addCartItem,
		removeCartItem,
		getTotalCartAmount,
	}

	return (
		<context.Provider value={contextValue}>{props.children}</context.Provider>
	)
}
export default ContextProvider
