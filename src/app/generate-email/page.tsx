"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { checkIsAuthenticated } from '../lib/auth/checkIsAuthenticated';
import Leftside from './Leftside';
import Rightside from './Rightside';

export default function GenerateEmail() {
    const [generatedContent, setGeneratedContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
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
        <main className='font-geistSans mt-2'>
            <div className='container flex flex-col md:flex-row md:h-screen'>
                <div className='basis-1/2 md:h-full md:w-1/2 m-2'>
                    <Leftside setGeneratedContent={setGeneratedContent} isLoading={isLoading} setIsLoading={setIsLoading} />
                </div>
                <div className='basis-1/2 md:w-1/2 m-2 min-h-screen'>
                    <Rightside generatedContent={generatedContent} isLoading={isLoading} />
                </div>
            </div>
        </main>
    );
}
