'use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav className='nav-bar flex justify-between p-3'>
            <h1 className='heading text-xl font-semibold mx-4'>Personalized Email Generator</h1>
            <div className='flex text-gray-700'>
                <Link className={path === '/' ? 'mx-2 space-x-4 font-medium bg-gray-300 rounded-lg shadow p-1 px-2' : 'mx-2 space-x-4 rounded-lg shadow p-1 px-2 hover:bg-gray-300 hover:shadow hover:text-gray-900'} href='/'>Home</Link>
                <Link className={path === '/leads-and-products' ? 'mx-2 space-x-4 font-medium bg-gray-300 rounded-lg shadow p-1 px-2' : 'mx-2 space-x-4 rounded-lg shadow p-1 px-2 hover:bg-gray-300 hover:shadow hover:text-gray-900'} href='/leads-and-products'>Leads and Products</Link>

                <SignedOut>
                    <div className='mx-2 space-x-4 rounded-lg shadow p-1 px-2 hover:bg-gray-300 hover:shadow hover:text-gray-900'>
                        <SignInButton mode='modal' />
                    </div>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav >
    )
}