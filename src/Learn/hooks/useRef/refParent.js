// ref parent
import React, { useRef } from 'react';
import Child from './forwardRef';

const RefParent = () => {
	const inputRef = useRef();
	const handleClick = () => {
		inputRef.current.focus();
	};
	return (
		<div>
			<Child ref={inputRef} />
			<button onClick={handleClick}>Focus Input</button>
		</div>
	);
};

// ab iska ref child ke andar pass karna hai to forwardRef ka use karna padta hai
// forward ref ke use case me child component ko ref ke through parent component se access karna hota hai
export default RefParent;

// int QNA
// 1. forwardRef kya hai?
// forwardRef ek React function hai jo aapko ek component ke andar ref ko pass karne ki suvidha deta hai.
//  Iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
// lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain,
//  jisse aap child component ke DOM element ya instance ko access kar sakte hain.
// 2. forwardRef ka use case kya hai?
// forwardRef ka use case tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte.
//  Iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte.
// 3. forwardRef ke through ref ko pass karne ka syntax kya hai?
// forwardRef ke through ref ko pass karne ka syntax kuch is tarah hota hai:
// import React, { forwardRef } from 'react';
// const Child = forwardRef((props, ref) => {
//     return (
//         <div>
//             <input type="text" ref={ref} />
//         </div>
//     );
// }   );
// export default Child;

// 4. forwardRef ke through ref ko pass karne ke fayde kya hai?
// forwardRef ke through ref ko pass karne ke fayde ye hai ki aap parent component se child component ke andar ref ko access kar sakte hain,
// jisse aap child component ke DOM element ya instance ko access kar sakte hain. Iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
//  lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain.
// 5. forwardRef ke through ref ko pass karne ke nuksan kya hai?
// forwardRef ke through ref ko pass karne ke nuksan ye hai ki aap parent component se child component ke andar ref ko access kar sakte hain,
//  jisse aap child component ke DOM element ya instance ko access kar sakte hain.
//  Iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte.
// forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte.
//  forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain,
// jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component
// ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte.
// forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component
// 6. forwardRef ke through ref ko pass karne ke alternatives kya hai?
// forwardRef ke through ref ko pass karne ke alternatives ye hai ki aap parent component se child component ke andar ref ko access kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain. Iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain,
// jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte.
//  forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
// lekin aap directly us child component ko ref nahi de sakte.
// forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain.
//  Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
//  lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child
// component ke andar ref ko pass kar sakte hain, jisse aap child component ke DOM element ya instance ko access kar sakte hain.
// Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai, lekin aap directly us child component ko ref nahi de sakte.
// forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain,
//  jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
//  lekin aap directly us child component ko ref nahi de sakte.

// 7. forwardRef ke through ref ko pass karne ke best practices kya hai?
// forwardRef ke through ref ko pass karne ke best practices ye hai ki aap parent component se child component ke andar ref ko access kar sakte hain,
//  jisse aap child component ke DOM element ya instance ko access kar sakte hain.
//  Iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
// lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain,
// jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
// lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain, jisse aap child component ke

// DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
// lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain,
// jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
// lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain,
// jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
// lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain,
// jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access

// 8. forwardRef ke through ref ko pass karne ke common mistakes kya hai?
// forwardRef ke through ref ko pass karne ke common mistakes ye hai ki aap parent component se child component ke andar ref ko access kar sakte hain,
//  jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,

//9. forwardRef ke through ref ko pass karne ke performance implications kya hai?
// forwardRef ke through ref ko pass karne ke performance implications ye hai ki aap parent component se child component ke andar ref ko access kar sakte hain,
//  jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
//  lekin aap directly us child component ko ref nahi de sakte. forwardRef ke through aap parent component se child component ke andar ref ko pass kar sakte hain,

//10 .forwardRef ke through ref ko pass karne ke security implications kya hai?
// forwardRef ke through ref ko pass karne ke security implications ye hai ki aap parent component se child component ke andar ref ko access kar sakte hain,
//  jisse aap child component ke DOM element ya instance ko access kar sakte hain. Lekin iska use tab hota hai jab aapko ek child component ke andar ref ko access karna hota hai,
