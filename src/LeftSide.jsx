import React, { useState } from 'react';
import toast from 'react-hot-toast';
import InputBox from './InputBox';

export default function LeftSide({setGeneratedContent}) {
    const [prodDesc, setProdDesc] = useState('');
    const [leadDesc, setLeadDesc] = useState('');

    async function handleGenerate() {
        if (prodDesc === '' || leadDesc === '') {
            return toast.error("Fields cannot be empty.");
        }
        // setLoading true
        const prompt = `Write a personalized email based on ${leadDesc}, introducing them to our new product: ${prodDesc}. 
    Highlight the key benefits and features that would be relevant to the lead. 
    Make sure the tone is professional but friendly, and include a call to action for a follow-up meeting or demo.
    Give only the final output email as Markdown Text without any additional prompt text.`
        // try-catch
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "meta-llama/llama-3.2-3b-instruct:free",
                "messages": [
                    {
                        "role": "system",
                        "content": prompt
                    }
                ]
            })
        });
        
        if (response.ok) {
            const responseJson = await response.json();
            const content = responseJson.choices[0].message.content;
            setGeneratedContent(content)
            toast.success("Email generated successfully.");
        } else {
            toast.error("Email generation failed. Please try again.")
            console.log(await response.json())
        }
        // setLoading to false
    }


    return (
        <div className='left-side basis-1/2 p-2.5 m-5 border-2 border-grey-200 shadow rounded-lg'>
            <h2 className='left-heading text-lg font-bold px-3 pt-2'>Input Information</h2>
            <p className='left-desc text-sm text-gray-500 px-3 pt-0.5 pb-6'>Enter product and lead details to generate a personalized email.</p>

            <form className='input-form p-5'>
                <label for='product-description'>Product Description</label><br />
                <InputBox value={prodDesc} onChange={
                    (e) => setProdDesc(e.target.value)
                } placeholder='Describe your product...' />

                <label for='lead-description'>Lead Description</label><br />
                <InputBox value={leadDesc} onChange={
                    (e) => setLeadDesc(e.target.value)
                } placeholder='Describe the lead...' />

                <button type='button' onClick={handleGenerate} className='bg-black text-white mt-4 w-full h-9 text-sm rounded-lg'>Generate Email</button>
            </form>
        </div>

    )
}
