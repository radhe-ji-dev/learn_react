// lest create and uncontrolled form component
import React, { useRef } from 'react';
function UncontrolledForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);  
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        alert(`Name: ${name}, Email: ${email}`);
    };
    console.log('uncontrolled form render');
    return (    
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' ref={nameRef} />
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' ref={emailRef} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
}
export default UncontrolledForm;    