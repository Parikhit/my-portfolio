import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

type NavbarProps = {
    containerStyles: string;
    linkStyles: string;
    underlineStyles: string;
};

const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'my projects' },
    { path: '/contact', name: 'contact' },
];

const Navbar = ({ containerStyles, linkStyles, underlineStyles }: NavbarProps) => {
    const pathname = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
                        {link.path === pathname && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            ></motion.span>
                        )}

                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Navbar;
