import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { AlignJustify } from 'lucide-react';

import Navbar from './Navbar.component';
import Logo from './Logo.component';
import Socials from './Socials.component';

type Props = {};

const MobileNav = (props: Props) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className='cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
                <div>
                    <div>
                        <Navbar
                            containerStyles='flex flex-col items-center gap-y-4'
                            linkStyles='text-2xl'
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
