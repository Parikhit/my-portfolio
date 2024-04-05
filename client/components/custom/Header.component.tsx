'use client';

import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import Logo from './Logo.component';
import Navbar from './Navbar.component';
import ThemeToggler from '@/components/custom/ThemeToggler.component';
import MobileNav from './MobileNav.component';

const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const scrollHandler = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <header
            className={`${
                header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'
            } sticky top-0 z-20 transition-all  ${pathname === '/' && 'bg-fuchsia-50'}`}
        >
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <Logo />
                    <div className='hidden sm:flex items-center gap-x-6'>
                        {/* Navbar */}
                        <Navbar style={'flex'} />
                        <ThemeToggler />
                    </div>
                    {/* Mobile Navbar */}
                    <div className='flex items-center gap-8 sm:hidden'>
                        <ThemeToggler />
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
