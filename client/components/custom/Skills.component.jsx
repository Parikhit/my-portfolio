import Image from 'next/image';
import { skillsData } from '@/lib/skills';

const Skills = () => {
    return (
        <div className='relative z-10 max-w-5xl mx-auto px-8 mb-36'>
            <h1 className='text-rose-700 text-4xl text-center font-bold mb-8'>Skills</h1>

            <div className='w-full h-full absolute top-80 right-8 flex justify-start -z-10'>
                <div className='w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-to-t from-cyan-400 to-cyan-300 rounded-full blur-[80px] sm:animate-sixth sm:blur-[240px]'></div>
            </div>

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
