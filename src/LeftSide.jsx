import React from 'react';

export default function LeftSide() {
    return (
        <div className='left-side basis-1/2 p-2.5 m-5 border-2 border-grey-200 shadow rounded-lg'>
            <h2 className='left-heading text-lg font-bold px-3 pt-2'>Input Information</h2>
            <p className='left-desc text-sm text-gray-500 px-3 pt-0.5 pb-6'>Enter product and lead details to generate a personalized email.</p>

            <form className='input-form p-5'>
                <label for='product-description'>Product Description</label><br />
                <input type='text'
                    className='input-box border-2 rounded-lg text-sm w-full h-40 mt-1.5 pt-12 pl-1 placeholder:translate-y-[-85px] placeholder:px-2 placeholder:py-2.5 placeholder:text-gray-500 hover:border-gray-300'
                    placeholder='Describe your product...'
                /> <br /><br />

                <label for='lead-description'>Lead Description</label><br />
                <input type='text'
                    className='input-box border-2 rounded-lg text-sm w-full h-40 pt-12 pl-1 mt-1.5 placeholder:translate-y-[-85px] placeholder:px-2 placeholder:py-2.5 placeholder:text-gray-500 hover:border-gray-300'
                    placeholder='Describe the lead...'
                />

                <button type='button' className='bg-black text-white mt-4 w-full h-9 text-sm rounded-lg'>Generate Email</button>
            </form>
        </div>

    )
}
