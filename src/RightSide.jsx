import React from 'react';
import './right-side.css';

export default function RightSide() {
    return (
        <div className='right-side'>
            <h2>Generated Email</h2>
            <p>Your personal email will appear here.</p>
            <div className="output-box">
                <p>No email generated yet. Fill in the deails and click "Generate Email".</p>
            </div>
        </div>
    );
}
