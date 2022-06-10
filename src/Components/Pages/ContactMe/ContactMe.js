import React from 'react';
import bg from '../../../Assets/Home/bg.jpg'

const ContactMe = () => {

    return (
        <div className='flex justify-center my-24 py-24 px-4' style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover"
        }}>
            <form className='w-96 sm:px-4 sm:max-w-sm'>
                <input type="text" placeholder="Your Name" name='name' class="input input-bordered w-full lg:max-w-lg my-3" required/>
                <input type="text" placeholder="Your Email" name='email' class="input input-bordered w-full lg:max-w-lg" required/>
                <textarea class="textarea textarea-bordered w-full lg:max-w-lg my-3" placeholder="Message"></textarea>
                <input type="submit" value="Send Message" className='input-borderd w-full lg:max-w-lg rounded-lg text-white bg-orange-500 hover:bg-orange-400 transition-colors py-3' />
            </form>
        </div>
    );
};

export default ContactMe;