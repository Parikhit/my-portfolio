import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href='/'>
            <Image src='/logo.svg' priority width={100} height={100} alt='logo' />
        </Link>
    );
};

export default Logo;
