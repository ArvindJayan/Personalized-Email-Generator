"use client";

import { useRouter } from 'next/navigation';
import { handleSignOut } from '../lib/auth/signOut';

export const SignOutButton = () => {
    const router = useRouter();

    return (
        <button className='bg-gray-200 hover:bg-gray-300 font-semibold py-2 px-4 rounded-lg transition duration-300'
            onClick={() => {
                handleSignOut();
                router.push('/');
            }}>
            Sign Out
        </button>

    )
}