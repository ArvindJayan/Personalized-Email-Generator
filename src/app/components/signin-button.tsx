"use client";
import handleSignIn from '../lib/auth/signin';

export const SignInButton = () => {
    return (
        <button className='bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded-lg transition duration-300'
            onClick={() => handleSignIn()}>
            Get Started
        </button>
    )
}