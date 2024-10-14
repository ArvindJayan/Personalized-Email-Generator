import React from 'react';
import './index.css';
import LeftSide from './LeftSide.jsx';
import RightSide from './RightSide.jsx';

function Homepage() {
    return (
        <main>
            <h1 className='heading'>Personalized Email Generator</h1>
            <div className='container'>
                <LeftSide/>

                <RightSide/>
            </div>
        </main>
    );
}

export default Homepage