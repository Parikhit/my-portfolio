import { Link } from 'react-scroll';
import { useState } from 'react';

import { links } from '../../lib/nav-links';

import clsx from 'clsx';

type NavbarProps = {
    style: String;
};

const Navbar = ({ style }: NavbarProps) => {
    const [activeSection, setActiveSection] = useState('Home');

    return (
        <nav className={`${style} gap-4 text-2xl`}>
            {links.map((link) => {
                const { path, name } = link;

                return (
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
                );
            })}
        </nav>
    );
};

export default Navbar;
