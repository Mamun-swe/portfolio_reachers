import React, { useState } from 'react'
import '../../../styles/client/contact/style.scss'
import { useForm } from "react-hook-form"
// import axios from 'axios'
// import api from '../../../utils/api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Icon } from 'react-icons-kit'
import { facebookF, twitter, linkedin, skype } from 'react-icons-kit/fa'

import Navbar from '../../../components/ClientNav/Index'
import Header from '../../../components/Header/Index'
import Footer from '../../../components/Footer/Index'

toast.configure({ autoClose: 2000 })
const Index = () => {
    const { register, handleSubmit, errors } = useForm()
    const [isLoading, setLoading] = useState(false)

    const onSubmit = async (data) => {
        try {
            setLoading(true)
            console.log(data)
            // const response = await axios.post(`${api}website/message/send`, data)
            // if (response.status === 200) {
            //     setLoading(false)
            //     toast.success('Thank you. we recived your message.')
            // }

        } catch (error) {
            if (error) {
                setLoading(false)
                console.log(error.response)
            }
        }
    }


    return (
        <div className="contact">
            <Navbar />
            <Header />

            {/* Contact Main */}
            <div className="main-content">
                <div className="container">
                    <div className="row">
                        {/* Contact Utilities */}
                        <div className="col-12 col-lg-4 contact-utilities mb-4 mb-lg-0">

                            <div className="card border-0 mb-3">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-center">
                                        <div className="mr-2"><a href="#"><Icon icon={facebookF} size={20} className="icon" /></a></div>
                                        <div className="mr-2"><a href="#"><Icon icon={twitter} size={20} className="icon" /></a></div>
                                        <div className="mr-2"><a href="#"><Icon icon={linkedin} size={20} className="icon" /></a></div>
                                        <div className="mr-2"><a href="#"><Icon icon={skype} size={20} className="icon" /></a></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Contact form */}
                        <div className="col-12 col-lg-8 contact-form">
                            <div className="card border-0">
                                <div className="card-header border-0 bg-white p-4 pb-0">
                                    <h4 className="pt-2">Send Message</h4>
                                    <p className="text-muted mb-0">if you have any query, feel free to contact with me. </p>
                                </div>
                                <div className="card-body p-4">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row">

                                            {/* Name */}
                                            <div className="col-12 col-lg-6 pr-lg-2">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className={errors.name ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Your name"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            {/* E-mail */}
                                            <div className="col-12 col-lg-6 pl-lg-2">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        className={errors.email ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Email address"
                                                        ref={register({
                                                            required: true,
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                            }
                                                        })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Subject */}
                                            <div className="col-12">
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        className={errors.subject ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Subject"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="col-12">
                                                <div className="form-group mb-3">
                                                    <textarea
                                                        type="text"
                                                        name="message"
                                                        className={errors.message ? "form-control shadow-none danger-border" : "form-control shadow-none"}
                                                        placeholder="Message"
                                                        rows="5"
                                                        ref={register({ required: true })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 text-right">
                                                <button type="submit" className="btn text-white shadow-none" disabled={isLoading}>
                                                    {isLoading ? <span>Sending...</span> : <span>Send Message</span>}
                                                </button>
                                            </div>




                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Index;