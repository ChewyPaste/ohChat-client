import React from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Chat from './components/Chat/Chat';
import ProtectedRoute from './components/Router/ProtectedRoute';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faSmile, faImage } from '@fortawesome/free-solid-svg-icons';
import {
	faSpinner,
	faEllipsisV,
	faUserPlus,
	faSignOutAlt,
	faTrash,
	faCaretDown,
	faUpload,
	faTimes,
	faBell
} from '@fortawesome/free-solid-svg-icons';

library.add(
	faSmile,
	faImage,
	faSpinner,
	faEllipsisV,
	faUserPlus,
	faSignOutAlt,
	faTrash,
	faCaretDown,
	faUpload,
	faTimes,
	faBell
);

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<ProtectedRoute exact path='/' component={Chat} />
					<Route path='/login' component={Login} />
					<Route path='/Register' component={Register} />
					<Route
						render={() => {
							return <h1>404 content not found</h1>;
						}}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
