import React, { useState } from 'react';
import registerImage from '../../assets/images/register.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/auth';

const Register = ({ history }) => {
	const dispatch = useDispatch();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [gender, setGender] = useState('male');
	const [password, setPassword] = useState('');

	const submitForm = (e) => {
		e.preventDefault();

		dispatch(
			register({ firstName, lastName, email, gender, password }, history)
		);
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
					<img src={registerImage} alt='Register' className='' />
				</div>

				<div
					id='form-section'
					className='flex flex-col bg-bglight rounded-lg rounded-t-none md:rounded-l-none md:rounded-r-lg '
				>
					<h2 className='text-center pt-6'>Welcome</h2>

					<form onSubmit={submitForm} className='p-8'>
						<div className='input-field '>
							<input
								onChange={(e) => {
									setFirstName(e.target.value);
								}}
								value={firstName}
								required='required'
								placeholder='First Name'
								type='text'
								className='h-9 min-w-full mb-2 p-2'
							/>
						</div>
						<div className='input-field'>
							<input
								onChange={(e) => {
									setLastName(e.target.value);
								}}
								value={lastName}
								required='required'
								type='text'
								placeholder='Last Name'
								className='h-9 min-h-40px min-w-full mb-2 p-2'
							/>
						</div>
						<div className='input-field'>
							<input
								onChange={(e) => {
									setEmail(e.target.value);
								}}
								value={email}
								required='required'
								placeholder='Email'
								type='text'
								className='h-9 min-h-40px min-w-full mb-2 p-2'
							/>
						</div>
						<div className='input-field mb-2'>
							<select
								onChange={(e) => {
									setGender(e.target.value);
								}}
								required='required'
								value={gender}
								className='h-9 min-h-40px min-w-full p-2'
							>
								<option value='male'>Male</option>
								<option value='female'>Female</option>
							</select>
						</div>

						<div className='input-field'>
							<input
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								value={password}
								required='required'
								type='password'
								placeholder='Password'
								className='h-9 min-h-40px min-w-full mb-2 p-2'
							/>
						</div>

						<button className='mb-4 bg-bgmain min-w-full h-8 hover:bg-bgmainlighter'>
							REGISTER
						</button>

						<p>
							Already have an account? <Link to='/login'>Login</Link>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
