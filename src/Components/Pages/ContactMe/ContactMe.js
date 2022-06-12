import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import bg from "../../../Assets/Home/bg.jpg";
import swal from "sweetalert";
import {
    faLocationDot,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from 'emailjs-com'

const ContactMe = () => {
    const handleMessage = e =>{
        e.preventDefault();

        emailjs.sendForm('service_agdgnjp', 'template_6u8hazd', e.target, 'psKoaryTyxneGTu2f')
      .then((result) => {
          if(result.text === "OK"){
            e.target.reset();
            swal({
                icon: "success",
                text: "Thanks for Contact me!"
              });
          }
      }, (error) => {
          console.log(error.text);
      });
    }


    return (
        <div className="my-24 py-12 md:py-24" style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover"
        }}>
            <div class="card lg:card-side">
                <div className="w-full">
                    <div className="text-white lg:w-3/4  p-3">
                        <h1 className="text-5xl font-bold my-3 lg:mx-8" id="contactme">
                            GET IN{" "}
                            <span className="text-orange-500">TOUCH</span>
                        </h1>
                        <h3 className="text-3xl font-semibold lg:mx-8">DON'T BE SHY</h3>
                        <p className="w-full lg:mx-8 my-3">
                            Fell free to get in touch with me. I am always open
                            to discussing new projects, creative ideas or
                            opportunities to be part of your vision.
                        </p>
                        <div className="text-sm lg:text-lg">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="h-4 md:w-16 md:h-6"
                            />
                            <span className="mx-2">Tongi, Dhaka, Bangladesh</span>
                        </div>
                        <div className="my-3 text-sm lg:text-lg">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className=" h-4 md:w-16 md:h-6"
                            />
                            <span className="mx-2">monirhrabby.developer@gmail.com</span>
                        </div>
                        <div className="text-sm lg:text-lg">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className=" h-4 md:w-16 md:h-6"
                            />
                            <span className="mx-2">+880 1956306002</span>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <form className="sm:max-w-sm lg:w-96 mx-auto px-4 sm:my-6 sm:max-w-sm" onSubmit={handleMessage}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            class="input input-bordered w-full lg:max-w-lg my-3"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Your Email"
                            name="email"
                            class="input input-bordered w-full lg:max-w-lg"
                            required
                        />
                        <textarea
                            class="textarea textarea-bordered w-full lg:max-w-lg my-3"
                            placeholder="Message"
                            name="message"
                        ></textarea>
                        <input
                            type="submit"
                            value="Send Message"
                            className="input-borderd w-full lg:max-w-lg rounded-lg text-white bg-orange-500 hover:bg-orange-400 transition-colors py-3"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
