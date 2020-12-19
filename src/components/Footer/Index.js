import React from 'react'
import '../../styles/client/component/footer/style.scss'
import Icon from 'react-icons-kit'
import { ic_language } from 'react-icons-kit/md'

const Index = () => {
    return (
        <div className="footer">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        {/* Intro */}
                        <div className="col-12 col-lg-6 text-center text-lg-left pr-lg-5 mb-4 mb-lg-0">
                            <h2 className="mb-4">Bikash Kumar Paul</h2>
                            <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. giving information on its origins, as well as a random Lipsum generator.</p>
                        </div>


                        {/* Contact */}
                        <div className="col-12 col-lg-6 pl-lg-5 mb-4 mb-lg-0">
                            <h2 className="mb-4">Connect</h2>
                            <div className="d-flex mb-3">
                                <div><Icon icon={ic_language} size={25} style={{ color: '#fff' }} /></div>
                                <div className="ml-2">
                                    <a href="">facebook.com</a>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div><Icon icon={ic_language} size={25} style={{ color: '#fff' }} /></div>
                                <div className="ml-2">
                                    <a href="">facebook.com</a>
                                </div>
                            </div>
                            <div className="d-flex mb-3">
                                <div><Icon icon={ic_language} size={25} style={{ color: '#fff' }} /></div>
                                <div className="ml-2">
                                    <a href="">facebook.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Message Send */}
                        {/* <div className="col-12 col-lg-4 pr-lg-5 mb-4 mb-lg-0">
                            <h2 className="mb-4">Send Message</h2>
                            <form>
                               
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control shadow-none"
                                        placeholder="E-mail"
                                    />
                                </div>

                              
                                <div className="form-group mb-3">
                                    <textarea
                                        className="form-control shadow-none"
                                        placeholder="Write message"
                                        rows="3"
                                    />
                                </div>

                                <div className="text-right">
                                    <button
                                        type="button"
                                        className="btn shadow-none"
                                    >Send</button>
                                </div>
                            </form>
                        </div> */}
                    </div>

                    {/* Dev section */}
                    <div className="row">
                        <div className="col-12 text-center py-3">
                            <p className="mb-0">All Rights Reserved | Developed by <a style={{ textDecoration: 'underline' }} href="">Abdullah Al Mamun</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;