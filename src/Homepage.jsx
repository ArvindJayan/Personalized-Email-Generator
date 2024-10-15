import React from 'react';
import './index.css';
import LeftSide from './LeftSide.jsx';
import RightSide from './RightSide.jsx';

function Homepage() {
    return (
        <main className = 'main font-sans'>
            <h1 className='heading pt-6 px-5 pb-3 text-2xl font-bold'>Personalized Email Generator</h1>
            <div className='container flex h-screen h-full'>
                <LeftSide/>

                <RightSide/>
            </div>
        </main>
    );
}

export default Homepage