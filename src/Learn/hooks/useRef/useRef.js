import React, { useRef } from 'react';
// useref me react me kab use krna h
// jab hume kisi variable ki value ko preserve karna hota hai across renders,
// 	lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// ye sirf ui k liye nahi hota hai, balki hume kisi variable ki value ko preserve karna hota hai across renders,
// 	lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// useRef ke through hum kisi variable ki value ko preserve kar sakte hai across renders,

const Myref = () => {
	const ref = useRef(10); // state ko ref de dete hai taaki uski value ko preserve kar sake across renders,
	// lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.

	const my = () => {
		ref.current++;

		console.log(ref.current); //to ye to useState se bhi kr skte hai, lekin useState me hume state ki value ko update karna hota hai setState ke through,
		// aur uske baad component re-render hota hai, lekin useRef me hume variable ki value ko directly manipulate karna hota hai bina re-render ke,

		// aur hum usko current property ke through access kar sakte hai.
		// mtlb jo value ui me nhi dikhani vo useref se krni chahiye, aur jo value ui me dikhani hai uske liye useState ka use krna chahiye,
		//  kyuki useState me state ki value ko update karna hota hai setState ke through,
	};

	return (
		<div>
			<button style={{ className: 'text text-red' }} onClick={my}>
				Increase
			</button>
		</div>
	);
};

export default Myref;

// ref me agr intial value pass karte hai to wo current property me store hoti hai, aur hum usko directly manipulate kar sakte hai bina re-render ke.
// initial value pass karna optional hai, agar hum initial value pass nahi karte hai to current property undefined hoti hai, aur hum usko directly
//  manipulate kar sakte hai bina re-render ke.
// agr initial value na pass kre to current property undefined hoti hai,
// aur hum usko directly manipulate kar sakte hai bina re-render ke,
//  lekin agar hum initial value pass karte hai to wo current property me store hoti hai,

// intv QNA 10
// 1. useRef kya hai?
// useRef ek React hook hai jo hume kisi variable ki value ko preserve karne me madad karta hai across renders,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// 2. useRef ka use kab karna chahiye?
// useRef ka use tab karna chahiye jab hume kisi variable ki value ko preserve karna hota hai across renders,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// 3. useRef ke through hum kisi variable ki value ko kaise preserve kar sakte hai across renders?
// useRef ke through hum kisi variable ki value ko preserve kar sakte hai across renders,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// 4. useRef ke through hum kisi variable ki value ko kaise manipulate kar sakte hai bina re-render ke?
// useRef ke through hum kisi variable ki value ko manipulate kar sakte hai bina re-render ke,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// 5. useRef ke through hum kisi variable ki value ko kaise access kar sakte hai?
// useRef ke through hum kisi variable ki value ko access kar sakte hai current property ke through,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// 6. useRef ke through hum kisi variable ki value ko kaise update kar sakte hai?
// useRef ke through hum kisi variable ki value ko update kar sakte hai current property ke through,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// 7. useRef ke through hum kisi variable ki value ko kaise reset kar sakte hai?
// useRef ke through hum kisi variable ki value ko reset kar sakte hai current property ko kisi initial value se set karke,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// 8. useRef ke through hum kisi variable ki value ko kaise increment kar sakte hai?
// useRef ke through hum kisi variable ki value ko increment kar sakte hai current property ko increment karke,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// 9. useRef ke through hum kisi variable ki value ko kaise decrement kar sakte hai?
// useRef ke through hum kisi variable ki value ko decrement kar sakte hai current property ko decrement karke,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// 10. useRef ke through hum kisi variable ki value ko kaise log kar sakte hai?
// useRef ke through hum kisi variable ki value ko log kar sakte hai current property ko log karke,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke.
// 11. useref or usestate me kya difference hai?
// useRef me hume kisi variable ki value ko preserve karna hota hai across renders,
//  lekin hume us variable ki value ko directly manipulate karna hota hai bina re-render ke,
