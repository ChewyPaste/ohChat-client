import React, { useState } from 'react';
import loginImage from '../../assets/images/login.svg';
import { Link } from 'react-router-dom';
import AuthService from '../../services/authService';

import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/auth';

const Login = ({ history }) => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('john.doe@gmail.com');
	const [password, setPassword] = useState('secret');

	const submitForm = (e) => {
		e.preventDefault();

		dispatch(login({ email, password }, history));

		// AuthService.login({ email, password });
		AuthService.login({ email, password }).then((res) => {
			// console.log(res);
		});
		// axios
		// 	.post('http://localhost:3001/login', { email, password })
		// 	.then((res) => {
		// 		console.log('res', res);
		// 	})
		// 	.catch((err) => {
		// 		console.log('err', err);
		// 	});

		// console.log({ email, password });
	};

	return (
		<div id='auth-container' className='min-h-screen bg-bgmain'>
			<div
				id='auth-card'
				className='flex flex-col justify-center p-8 md:flex-row'
			>
				<div
					id='image-section'
					className='bg-white rounded-lg rounded-b-none p-2 md:rounded-lg md:rounded-r-none'
				>
					<img src={loginImage} alt='Login' className='' />
				</div>
				<div
					id='form-section'
					className='flex flex-col bg-bglight rounded-lg rounded-t-none md:rounded-l-none md:rounded-r-lg '
				>
					<h2 className='text-center pt-6'>Welcome back</h2>

					<form onSubmit={submitForm} className='p-8'>
						<div className='input-field '>
							<input
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								required='required'
								type='text'
								placeholder='Email'
								className='h-9 min-w-full mb-2 p-2'
							/>
						</div>
						<div className='input-field'>
							<input
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								required='required'
								type='password'
								placeholder='Password'
								className='h-9 min-h-40px min-w-full mb-2 p-2'
							/>
						</div>

						<button className='mb-4 bg-bgmain min-w-full h-8 hover:bg-bgmainlighter'>
							LOGIN
						</button>

						<p>
							Dont't have an account? <Link to='/Register'>Register</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
