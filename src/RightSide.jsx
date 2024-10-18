import React from 'react';

export default function RightSide({ generatedContent, loading }) {
    return (
        <div className='right-side basis-1/2 p-2.5 m-5 mt-10 mb-8 md:m-5 border-2 border-grey-200 rounded-lg shadow'>
            <h2 className='right-heading text-lg font-bold px-3 pt-2'>Generated Email</h2>
            <p className='right- text-sm text-gray-500 px-3 pt-0.5'>Your personalized email will appear here.</p>

            <div className='output-box border-2 rounded-lg mt-8 mx-2 h-max h-44 md:h-5/6 bg-gray-200'>

                <div className='output-text text-sm text-gray-500 p-3'>
                    {
                        loading ? "Please wait while we generate your email." :
                            (generatedContent) ? (generatedContent) :
                                `No email generated yet. Fill in the details and click "Generate Email"`
                    }
                </div>
            </div>
        </div>
    );
}
