import React from 'react';
import InputBox from './InputBox';

export default function LeftSide() {
    return (
        <div className='left-side basis-1/2 p-2.5 m-5 border-2 border-grey-200 shadow rounded-lg'>
            <h2 className='left-heading text-lg font-bold px-3 pt-2'>Input Information</h2>
            <p className='left-desc text-sm text-gray-500 px-3 pt-0.5 pb-6'>Enter product and lead details to generate a personalized email.</p>

            <form className='input-form p-5'>
                <label for='product-description'>Product Description</label><br />
                <InputBox placeholder='Describe your product...'/>

                <label for='lead-description'>Lead Description</label><br />
                <InputBox placeholder='Describe the lead...'/>

                <button type='button' className='bg-black text-white mt-4 w-full h-9 text-sm rounded-lg'>Generate Email</button>
            </form>
        </div>

    )
}
