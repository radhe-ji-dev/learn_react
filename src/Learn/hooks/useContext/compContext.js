// this comp for context provider
// UserProvider.js

import UserContext from './UserContext';

const UserProvider = ({ children }) => {
	const user = {
		name: 'Rohit',
		role: 'Developer',
	};

	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
