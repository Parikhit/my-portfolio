import Image from 'next/image';
import { skillsData } from '@/lib/skills';

const Skills = () => {
    return (
        <div className='max-w-5xl mx-auto px-8'>
            <h1 className='text-rose-700 text-4xl text-center font-semibold mb-6'>Skills</h1>
            <div id='skills' className='flex flex-wrap gap-8'>
                {skillsData.map(({ icon, name }, id) => (
                    <div key={id} title={`${name}`}>
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
