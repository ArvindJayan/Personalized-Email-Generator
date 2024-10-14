import React from 'react';
import './left-side.css';

export default function LeftSide() {
    return (
        <div className='left-side'>
            <h2>Input Information</h2>
            <p className='desc-p'>Enter product and lead details to generate a personalized email.</p>

            <form className='input-form'>
                <label for="product-description">Product Description</label><br />
                <input type="text" id="input-box" placeholder="Describe your product..." /><br /><br />

                <label for="lead-description">Lead Description</label><br />
                <input type="text" id="input-box" placeholder="Describe the lead..." />

                <button type='button'>Generate Email</button>
            </form>
        </div>

    )
}
