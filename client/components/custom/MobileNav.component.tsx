import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { AlignJustify } from 'lucide-react';

import Navbar from './Navbar.component';
import Socials from './Socials.component';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className='cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
                <div className='h-full'>
                    <div className='h-full flex flex-col items-center my-4 justify-between'>
                        <Navbar style={'flex flex-col items-center'} />
                        <Socials size={16} />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
