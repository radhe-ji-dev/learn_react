// ab dekter ke andar ref pass karna hai to forwardRef ka use karna padta hai
import React, { forwardRef } from 'react';

const Child = forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    );
}   );

export default Child;