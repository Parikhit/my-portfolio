import Link from 'next/link';

import { FaLinkedin, FaGithub, FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
import { Button } from '../ui/button';

type SocialsProps = {
    size?: number;
    margin?: number;
};

const Socials = ({ size, margin }: SocialsProps) => {
    const socialsArr = [
        {
            icon: <FaLinkedin size={size} />,
            link: 'https://www.linkedin.com/in/parikhitbaruah97/',
        },
        {
            icon: <FaGithub size={size} />,
            link: 'https://github.com/Parikhit',
        },
        {
            icon: <FaFacebook size={size} />,
            link: 'https://www.facebook.com/parikhitb1',
        },

        {
            icon: <FaXTwitter size={size} />,
            link: 'https://twitter.com/Parikhitb97',
        },
        {
            icon: <FaInstagram size={size} />,
            link: 'https://www.instagram.com/codeventures.js/',
        },
    ];
    return (
        <div className='flex xl:flex-col lg:flex-col md:flex-row mx-6'>
            {socialsArr.map((social, index) => (
                <Link
                    key={index}
                    href={social.link}
                    target='_blank'
                    className={`${margin}`}
                >
                    <Button
                        className='mb-4 hover:animate-appearance-in mx-[-3px]'
                        variant='ghost'
                        size='socials'
                    >
                        {social.icon}
                    </Button>
                </Link>
            ))}
        </div>
    );
};

export default Socials;
