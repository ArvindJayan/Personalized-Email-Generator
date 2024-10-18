import React, { useState } from 'react';
import './index.css';
import LeftSide from './LeftSide.jsx';
import RightSide from './RightSide.jsx';

function Homepage() {
    const [generatedContent, setGeneratedContent] = useState();
    const [loading, setLoading] = useState(false);
    return (
        <main className='main font-sans'>
            <h1 className='heading pt-6 px-5 pb-3 text-2xl font-bold'>Personalized Email Generator</h1>
            <div className='container flex-row md:flex md:h-screen md:h-full'>
                <LeftSide setGeneratedContent={setGeneratedContent} setLoading={setLoading} loading={loading} />

                <RightSide generatedContent={generatedContent} loading={loading} />
            </div>
        </main>
    );
}

export default Homepage