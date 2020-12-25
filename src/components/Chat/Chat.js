import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChats } from '../../store/actions/chat';

import Navbar from './components/Navbar/Navbar';

const Chat = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.authReducer.user);

	useEffect(() => {
		dispatch(fetchChats())
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [dispatch]);

	return (
		<div id='chat-wrap' className='flex flex-col bg-white h-screen'>
			<Navbar />
			<div className='flex flex-col bg-gray-500 h-full'>
				ChatMain
				<div className='bg-gray-300 h-1/2'>child</div>
			</div>
		</div>
	);
};

export default Chat;
