import Link from 'next/link';

// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Avatar } from '@nextui-org/react';

const Logo = () => {
    return (
        <Link href='/'>
            <Avatar
                showFallback
                isBordered
                color='success'
                src='/avatar.jpg'
                className='w-20 h-20 text-large'
            />
        </Link>
    );
};

export default Logo;
