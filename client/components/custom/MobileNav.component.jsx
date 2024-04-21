import { useState } from 'react';
import { Link } from 'react-scroll';

import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet';
import { AlignJustify } from 'lucide-react';
import Footer from './Footer.component';

import { links } from '../../lib/nav-links';
import clsx from 'clsx';

const MobileNav = () => {
    const [activeSection, setActiveSection] = useState('Home');
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className='cursor-pointer' />
            </SheetTrigger>

            <SheetContent>
                <div className='h-full p-2'>
                    <div className='h-full flex flex-col items-center my-4 justify-between'>
                        <nav className='flex flex-col items-center gap-4 text-2xl'>
                            {links.map((link) => {
                                const { path, name } = link;

                                return (
                                    <SheetClose asChild>
                                        <Link
                                            className={clsx(
                                                'relative cursor-pointer hover:scale-110 transition-transform',
                                                {
                                                    'text-rose-600': activeSection === name,
                                                }
                                            )}
                                            key={name}
                                            to={path}
                                            spy={true}
                                            smooth={true}
                                            offset={-190}
                                            duration={500}
                                            onClick={() => {
                                                setActiveSection(name);
                                            }}
                                        >
                                            {name}

                                            {name === activeSection && (
                                                <div className='bg-rose-600 h-1 w-full rounded bottom-0 absolute -z-10'></div>
                                            )}
                                        </Link>
                                    </SheetClose>
                                );
                            })}
                        </nav>

                        <Footer />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
