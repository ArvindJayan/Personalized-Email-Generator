import React from 'react'

export default function Products() {
    return (
        <div className='right-side text-lg border-2 border-gray-200 rounded-lg shadow m-3 p-3 px-4 mb-96 h-full'>
            <h1 className='title font-semibold'>Product Information</h1>
            <p className='description text-sm text-gray-400'>Your product details email will be displayed here.</p>

            <div className='output-box text-gray-500 bg-gray-200 text-sm mt-11 mx-3 p-4 rounded-lg h-4/5'>No products saved yet. Fill in the details and click on "Generate Email" to generate a personalized email to save your product information</div>
        </div>
    )
}

