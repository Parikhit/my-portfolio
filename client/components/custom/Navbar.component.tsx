import { Link } from 'react-scroll';

import { motion } from 'framer-motion';

const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'my projects' },
    { path: '/contact', name: 'contact' },
];

const Navbar = () => {
    return (
        <motion.nav>
            <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
            >
                Home
            </Link>
            <Link
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={-140}
                duration={500}
            >
                Projects
            </Link>
            <Link
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
            >
                Skills
            </Link>
            <Link
                activeClass='active'
                to='experience'
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
            >
                Experience
            </Link>
            <Link
                activeClass='active'
                to='contacts'
                spy={true}
                smooth={true}
                offset={100}
                duration={500}
            >
                Contact
            </Link>
        </motion.nav>
    );
};

export default Navbar;
