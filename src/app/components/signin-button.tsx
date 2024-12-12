"use client";

import { useRouter } from 'next/navigation';

export const SignInButton = () => {
    const router = useRouter();

    return (
        <button className='bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded-lg transition duration-300'
            onClick={() => router.push('/auth/sign-in')}>
            Get Started
        </button>
    )
}