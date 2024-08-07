import { Button } from '../ui/button';
import { useState } from 'react';

const Contact = () => {
    const [disabledButton, setDisabledButton] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');

    const resetForm = () => {
        setInputName('');
        setInputEmail('');
        setInputMessage('');
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        let data = new FormData(e.target);
        let formData = Object.fromEntries(data.entries());

        setDisabledButton(true);
        setLoading(true);
        try {
            const res = await fetch('https://sheetdb.io/api/v1/r4i4re23buse0', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // await res.json();

            if (!res.ok) setMessage('Unable to submit Form!');

            setMessage('Form Submitted Successfully!');

            setTimeout(() => {
                setMessage('');
            }, 3000);
        } catch (error) {
            setMessage(error);

            setTimeout(() => {
                setMessage('');
            }, 3000);
        }

        resetForm();
        setLoading(false);
        setDisabledButton(false);
    };

    return (
        <div
            id='contacts'
            className='relative mt-72 z-10'
        >
            <div className='absolute left-8 bottom-8 flex justify-start -z-10'>
                <div className='w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-gradient-to-b from-[#f539aa] to-[#fe6c4c] rounded-full blur-[80px] animate-third sm:blur-[200px] overflow-x-hidden'></div>
            </div>

            <h1 className='text-rose-700 text-4xl text-center font-extrabold mb-14'>Contact Me</h1>

            <div className='relative z-10 max-w-xl mx-auto px-8'>
                <form
                    onSubmit={handleFormSubmit}
                    className='flex flex-col gap-2'
                >
                    <input
                        name='Name'
                        type='text'
                        value={inputName}
                        className='text-2xl px-5 py-3 rounded-lg border hover:border-blue-700 hover:scale-105 transition-transform'
                        placeholder='Name'
                        required
                        onChange={(e) => setInputName(e.target.value)}
                    />
                    <input
                        name='Email'
                        type='email'
                        value={inputEmail}
                        className='text-2xl px-5 py-3 my-2 rounded-lg border hover:border-blue-700 hover:scale-105 transition-transform'
                        placeholder='Email'
                        required
                        onChange={(e) => setInputEmail(e.target.value)}
                    />
                    <textarea
                        name='Message'
                        value={inputMessage}
                        className='text-2xl px-5 py-3 rounded-lg border hover:border-blue-700 hover:scale-105 transition-transform mb-2'
                        placeholder='Message'
                        required
                        onChange={(e) => setInputMessage(e.target.value)}
                    ></textarea>

                    <Button
                        disabled={disabledButton}
                        type='submit'
                        className='text-2xl hover:bg-slate-600 bg-zinc-700 p-2'
                    >
                        {loading ? 'Submitting...' : 'Submit'}
                    </Button>

                    <div className='text-xl text-green-500 text-center mt-4'>{message}</div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
