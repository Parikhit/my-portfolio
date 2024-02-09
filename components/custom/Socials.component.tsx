import Link from 'next/link';

import { FaLinkedin, FaGithub, FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';

import { Button } from '../ui/button';

const Socials = () => {
    const socialsArr = [
        { icon: <FaLinkedin size={30} />, link: 'https://www.linkedin.com/in/parikhitbaruah97/' },
        { icon: <FaGithub size={30} />, link: 'https://github.com/Parikhit' },
        { icon: <FaFacebook size={30} />, link: 'https://www.facebook.com/parikhitb1' },

        { icon: <FaXTwitter size={30} />, link: 'https://twitter.com/Parikhitb97' },
        { icon: <FaInstagram size={30} />, link: 'https://www.instagram.com/codeventures.js/' },
    ];
    return (
        <div className='flex flex-col mx-4'>
            {socialsArr.map((social, index) => (
                <Link key={index} href={social.link} target='_blank'>
                    <Button className='mb-4' variant='ghost' size='socials'>
                        {social.icon}
                    </Button>
                </Link>
            ))}
        </div>
    );
};

export default Socials;
