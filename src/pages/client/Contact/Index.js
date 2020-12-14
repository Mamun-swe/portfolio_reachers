import React from 'react'
import Navbar from '../../../components/ClientNav/Index'
import Header from '../../../components/Header/Index'
import Footer from '../../../components/Footer/Index'

const Index = () => {
    return (
        <div>
            <Navbar />
            <Header />

            {/* Contact */}
            <div className="contact">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <h1>Contact page</h1>
                        </div>

                        <div className="col-12 col-lg-8 pl-lg-5">
                            <form>

                                <div className="row">
                                    {/* Name */}
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group mb-4">
                                            <input
                                                type="text"
                                                className="form-control shadow-none"
                                                placeholder="Your name"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="col-12 col-lg-6">
                                        <div className="form-group mb-4">
                                            <input
                                                type="text"
                                                className="form-control shadow-none"
                                                placeholder="Your e-mail"
                                            />
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div className="col-12">
                                        <div className="form-group mb-4">
                                            <input
                                                type="text"
                                                className="form-control shadow-none"
                                                placeholder="Write subject"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="col-12">
                                        <div className="form-group mb-4">
                                            <textarea
                                                className="form-control shadow-none"
                                                placeholder="Write message"
                                                rows="5"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12 text-right">
                                        <button type="button" className="btn shadow-none">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Index;