"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { checkIsAuthenticated } from "../lib/auth/checkIsAuthenticated";

export default function Navigation() {
    const path = usePathname();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const fetchAuthStatus = async () => {
            const authStatus = await checkIsAuthenticated();
            setIsAuthenticated(authStatus);
        };
        fetchAuthStatus();
    }, []);

    return (
        <nav className='nav-bar flex justify-between p-3 mt-1'>
            <h1 className='heading text-xl font-semibold mx-4'>Personalized Email Generator</h1>
            <div className='flex text-gray-700'>
                <Link className={path === '/' ? 'mx-2 space-x-4 font-medium bg-gray-300 rounded-lg shadow p-1 px-2 transition duration-300' : 'mx-2 space-x-4 rounded-lg shadow p-1 px-2 hover:bg-gray-300 hover:shadow hover:text-gray-900 transition duration-300'} href='/'>Home</Link>
                <Link className={path === '/generate-email' ? 'mx-2 space-x-4 font-medium bg-gray-300 rounded-lg shadow p-1 px-2 transition duration-300' : 'mx-2 space-x-4 rounded-lg shadow p-1 px-2 hover:bg-gray-300 hover:shadow hover:text-gray-900 transition duration-300'} href='/generate-email'>Generate Email</Link>
                <Link className={path === '/leads-and-products' ? 'mx-2 space-x-4 font-medium bg-gray-300 rounded-lg shadow p-1 px-2 transition duration-300' : 'mx-2 space-x-4 rounded-lg shadow p-1 px-2 hover:bg-gray-300 hover:shadow hover:text-gray-900 transition duration-300'} href='/leads-and-products'>Leads and Products</Link>
                <button className='mx-2 space-x-4 rounded-lg shadow p-1 px-2 hover:bg-gray-300 hover:shadow hover:text-gray-900 transition duration-300'>
                    {isAuthenticated ? 'Sign Out' : 'Sign In'}
                </button>
            </div>
        </nav>
    )
}