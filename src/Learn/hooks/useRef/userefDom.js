// useref ka dom me use
import { useRef } from 'react';

const Myref = () => {
    const ref = useRef();
//DOM
    const my = () => {
        ref.current.style.color = 'red'; // yha smjhna ref or current ka kya role hai, 
        // ref ek object hota hai jisme current property hoti hai, aur current property
        //  me hum us element ko store karte hai jise hum reference dena chahte hai, aur uske baad hum us element ko manipulate kar 
        // sakte hai bina re-render ke, kyuki useRef me hume variable ki value ko directly manipulate karna hota hai bina re-render ke,
        //  aur hum usko current property ke through access kar sakte hai.
    };

    return (
        <div>
            <h1 ref={ref}>Hello World</h1>
            <button onClick={my}>Change Color</button>
        </div>
    );
}