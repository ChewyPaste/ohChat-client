import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../../store/actions/auth';
import { updateProfile } from '../../../../store/actions/auth';
import Modal from '../../../Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.authReducer.user);

	const [showProfileOptions, setShowProfileOptions] = useState(false);
	const [showProfileModal, setShowProfileModal] = useState(false);

	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);
	const [email, setEmail] = useState(user.email);
	const [gender, setGender] = useState(user.gender);
	const [password, setPassword] = useState('');
	const [avatar, setAvatar] = useState('');

	console.log('avatar link', user.avatar);

	const submitForm = (e) => {
		e.preventDefault();

		const form = { firstName, lastName, email, gender, avatar };
		if (password.length > 0) form.password = password;

		const formData = new FormData();

		for (const key in form) {
			formData.append(key, form[key]);
		}
		console.log('formdata', formData);
		dispatch(updateProfile(formData)).then(() => setShowProfileModal(false));
	};

	return (
		<div className='flex justify-between h-60px bg-bgmain p-2 shadow-md mb-2 px-1'>
			<h2 className='flex self-center text-white'>Chat.io</h2>

			<div
				onClick={() => setShowProfileOptions(!showProfileOptions)}
				id='profile-menu'
				className='relative flex flex-row justify-between items-center'
			>
				<img
					width='40'
					height='40'
					className='text-white self-center mr-2 rounded-md'
					src={user.avatar}
					alt='Avatar'
				/>
				<p className='flex self-center text-white cursor-pointer'>
					{user.firstName} {user.lastName}
				</p>
				<FontAwesomeIcon icon='caret-down' className='ml-1 text-white' />

				{showProfileOptions && (
					<div className='profile-options absolute bg-white top-11 right-2  rounded-sm px-.5 border-solid'>
						<p onClick={() => setShowProfileModal(true)} className='m-1'>
							Update profile
						</p>
						<p onClick={() => dispatch(logout())} className='m-1'>
							Logout
						</p>
					</div>
				)}
				{showProfileModal && (
					<Modal
						click={() => {
							setShowProfileModal(false);
						}}
						className='bg-teal-400'
					>
						<Fragment key='header'>
							<h1 className='bg-teal-400'>Modal Header</h1>
							<h3>Update profile</h3>
						</Fragment>
						<Fragment key='body'>
							<div className='input-field '>
								<input
									onChange={(e) => {
										setFirstName(e.target.value);
									}}
									value={firstName}
									required='required'
									placeholder='First Name'
									type='text'
									className='form-input'
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
									className='form-input'
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
									className='form-input'
								/>
							</div>
							<div className='input-field mb-2'>
								<select
									onChange={(e) => {
										setGender(e.target.value);
									}}
									required='required'
									value={gender}
									className='h-9 min-w-full p-1 border border-black rounded-sm'
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
									className='form-input mt-0'
								/>
							</div>
							<div className='input-field'>
								<input
									onChange={(e) => {
										setAvatar(e.target.files[0]);
									}}
									type='file'
									className='h-10 min-w-full mb-1 p-1 border border-black rounded-sm'
								/>
							</div>
						</Fragment>
						<Fragment key='footer'>
							<button
								onClick={submitForm}
								className='btn-success m-auto block border border-black rounded-md m-2 p-1'
							>
								UPDATE
							</button>
						</Fragment>
					</Modal>
				)}
			</div>
		</div>
	);
};

export default Navbar;
