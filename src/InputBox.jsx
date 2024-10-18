import React from 'react';

function InputBox(props) {
    return (
        <textarea
            className='input-box border-2 rounded-lg text-sm w-full p-2 mt-1.5 mb-3.5 md:mb-3 focus:outline-gray-300 placeholder:text-gray-500 hover:border-gray-300'
            placeholder={props.placeholder}
            {...props}
            rows={6}
        />
    );
}

export default InputBox
