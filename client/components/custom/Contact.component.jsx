import { Button } from '../ui/button';

const Contact = () => {
    return (
        <div id='contacts' className='mt-96 mb-40'>
            <h1 className='text-rose-700 text-4xl text-center font-semibold mb-16'>Contact Me</h1>

            <div className='relative z-10 max-w-xl mx-auto px-8'>
                <form className='flex flex-col gap-2'>
                    <input
                        type='text'
                        className='px-4 py-2 rounded-lg border hover:border-blue-700 hover:scale-105 transition-transform'
                        placeholder='Name'
                        required
                    />

                    <input
                        type='email'
                        className='px-4 py-2 rounded-lg border hover:border-blue-700 hover:scale-105 transition-transform'
                        placeholder='Email'
                        required
                    />

                    <textarea
                        name=''
                        className='px-4
                        py-2
                        rounded-lg
                        border
                        hover:border-blue-700 hover:scale-105 transition-transform'
                        placeholder='Message'
                        required
                    ></textarea>

                    <Button className='hover:bg-slate-700 '>Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
