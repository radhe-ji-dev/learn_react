// ab useRef ka mutable Storage kya hota hai
import { useRef } from 'react';

const Myref = () => {
	const ref = useRef(10);

	const my = () => {
		ref.current++;
		console.log(ref.current);
	};

	return (
		<div>
			<button
				style={{ className: 'text text-red' }}
				onClick={() => ref.current++}>
				Increase
			</button>
		</div>
	);
};

// ab dekte hai ki useRef ka mutable Storage kya hota hai,
//  to useRef ke through hum kisi variable ki value ko preserve kar sakte hai across renders,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke,
//  aur hum usko current property ke through access kar sakte hai.
// mtlb jo value ui me nhi dikhani vo useref se krni chahiye, aur jo value ui me dikhani hai uske liye useState ka use krna chahiye,
//  kyuki useState me state ki value ko update karna hota hai setState ke through,
//  aur uske baad component re-render hota hai, lekin useRef me hume variable ki value ko directly manipulate karna hota hai bina re-render ke,
//  aur hum usko current property ke through access kar sakte hai.
// ab useRef ka mutable Storage kya hota hai,
//  to useRef ke through hum kisi variable ki value ko preserve kar sakte hai across renders,
