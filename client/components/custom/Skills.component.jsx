import Image from 'next/image';
import { skillsData } from '@/lib/skills';

const Skills = () => {
    return (
        <div className='relative z-10 max-w-5xl mx-auto px-8 mb-36'>
            <h1 className='text-rose-700 text-4xl text-center font-semibold mb-8'>Skills</h1>

            {/* <div className='absolute -z-10 w-full top-80 right-8 flex justify-end items-start'>
                <div className='w-[600px] h-[600px] sm:w-[500px] sm:h-[500px] bg-gradient-to-b from-[#f539aa] to-[#fe6c4c] rounded-full blur-[80px] animate-fourth sm:blur-[150px]'></div>
            </div> */}

            <div id='skills' className='flex flex-wrap gap-5 mb-20'>
                {skillsData.map(({ icon, name }, id) => (
                    <div key={id} title={`${name}`} className='mx-auto'>
                        <Image
                            className='hover:scale-125 transition-transform'
                            src={icon}
                            width={100}
                            height={100}
                            alt={`${name}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
