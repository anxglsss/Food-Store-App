import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import '../../Components/Login/Login.scss'

export function Login(props) {
	const [state, setState] = useState('Sign Up')

	return (
		<>
			<div className='wrapp'>
				<div className='card'>
					<div className='title'>{state}</div>
				</div>
				<div className='cross'>
					<img
						onClick={() => {
							props.setShowLogin(false)
						}}
						src={assets.cross_icon}
						width='15'
					></img>
				</div>
				<div className='underline'></div>
				<div className='input'>
					{state == 'Login' ? (
						<></>
					) : (
						<input type='text' placeholder='Name' required />
					)}
					<input type='email' placeholder='Email' required />
					<input type='password' placeholder='Password' required />
				</div>

				<button>{state}</button>
				<div className='agree'>
					<input type='checkbox' required></input>
					<p>I agree to the terms and conditions</p>
				</div>
				{state == 'Login' ? (
					<h2>
						Don't have a account?{' '}
						<span
							onClick={() => {
								setState('Sign Up')
							}}
						>
							Click Here
						</span>
					</h2>
				) : (
					<h2>
						Already have an account?{' '}
						<span
							onClick={() => {
								setState('Login')
							}}
						>
							Log in Here
						</span>
					</h2>
				)}
			</div>
		</>
	)
}
