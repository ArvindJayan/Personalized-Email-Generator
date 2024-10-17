import React from 'react';

function InputBox(props) {
    return (
        <input type='text'
            className='input-box border-2 rounded-lg text-sm w-full h-40 pt-12 pl-1 mt-1.5 mb-3.5 md:mb-3 focus:outline-gray-300 placeholder:translate-y-[-85px] placeholder:px-2 placeholder:py-2.5 placeholder:text-gray-500 hover:border-gray-300'
            placeholder={props.placeholder}
        />
    );
}

export default InputBox
