// this is a condition where we have to pass data from one component to another component which is nested deeply
// here CmpM is parent component which has user data
// Cmp1 is child of CmpM and Cmp2 is child of Cmp1
// we have to pass user data from CmpM to Cmp2
// so we have to pass user data as props from CmpM to Cmp1 and then from Cmp1 to Cmp2
// Props drilling is the process of passing data from one component to another component which is nested deeply using props

import React, { createContext, useContext } from 'react';

function CmpM() {
	const user = 'John Doe';
	return (
		<div>
			<Cmp1 user={user} />
		</div>
	);
}

function Cmp1({ user }) {
	return (
		<div>
			<Cmp2 name={user}></Cmp2>
		</div>
	);
}

function Cmp2({ name }) {
	return (
		<div>
			<h2>User Info</h2>
			<p>Name: {name}</p>
		</div>
	);
}

//export { Cmp1, Cmp2, CmpM };

// Now we see how to avoid props drilling using useContext hook in react

const UserContext = createContext();

function CmpCP() {
	const user = 'John Doe';
	return (
		<UserContext.Provider value={user}>
			<div>
				<CmpCP1 />
			</div>
		</UserContext.Provider>
	);
}
function CmpCP1() {
	return (
		<div>
			<CmpCP2 />
		</div>
	);
}

function CmpCP2() {
	const name = useContext(UserContext);
	return (
		<div>
			<h2>User Info</h2>
			<p>Name: {name}</p>
		</div>
	);
}
export { CmpCP, CmpCP1, CmpCP2 };
// Here we have created a context using createContext() method and wrapped the parent component with UserContext.Provider
// and passed the user data as value to the provider
// then in the child component we have used useContext hook to get the user data from the context
// thus we have avoided props drilling
