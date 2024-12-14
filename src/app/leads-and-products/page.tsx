"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { checkIsAuthenticated } from '../lib/auth/checkIsAuthenticated';
import Leads from './leads';
import Products from './products';

export default function LeadsAndProducts() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchAuthStatus = async () => {
            const authStatus = await checkIsAuthenticated();
            setIsAuthenticated(authStatus);
            if (!authStatus) {
                router.push('/');
            }
        };
        fetchAuthStatus();
    }, [router]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <main className='font-geistSans'>
            <div className='container flex flex-col md:flex-row md:h-screen'>
                <div className='basis-1/2 md:w-1/2 m-2 min-h-screen'>
                    <Products />
                </div>
                <div className='basis-1/2 md:w-1/2 m-2 min-h-screen'>
                    <Leads />
                </div>
            </div>
        </main>
    );
}