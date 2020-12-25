import React from 'react';

const Modal = (props) => {
	const findByKey = (name) =>
		props.children.map((child) => {
			if (child.key === name) {
				return child;
			}

			return '';
		});

	const closeModal = (e) => {
		e.stopPropagation();
		if (e.target.classList.contains('modal-close')) {
			return props.click();
		}
	};

	return (
		<div
			onClick={closeModal}
			className='modal-mask modal-close fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-9998'
		>
			<div className='modal-wrapper m-2 p-4 grid place-items-center'>
				<div className='modal-container w-6/12 max-w-md bg-grey-800'>
					<div className='modal-header bg-bgmain text-white p-4 text-center rounded-t-md'>
						{findByKey('header')}
					</div>
					<div className='modal-body p-4 bg-white text-left'>
						{findByKey('body')}
					</div>
					<div className='modal-footer p-2 bg-white rounded-b-md'>
						<button
							onClick={closeModal}
							className='modal-close m-auto block border border-black rounded-md m-2 p-1'
						>
							CLOSE
						</button>
						{findByKey('footer')}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
