import React from 'react'
import './style.scss'

import Navbar from '../../../components/ClientNav/Index'
import Header from '../../../components/Header/Index'
import Footer from '../../../components/Footer/Index'

import Img from '../../../assets/static/own.jpeg'

const Index = () => {
    return (
        <div className="about">
            <Navbar />
            <Header />


            <div className="content-body">
                <div className="container">
                    <div className="row">

                        {/* Image */}
                        <div className="col-12 col-lg-3 mb-4 mb-lg-0 text-center">
                            <div className="img-box rounded-circle">
                                <img src={Img} className="img-fluid" alt="..." />
                            </div>
                        </div>

                        {/* Details about */}
                        <div className="col-12 col-lg-9 text-center text-lg-left pl-lg-5">
                            <h2 className="mb-2">About</h2>

                            <div className="content mb-5">
                                <h3 className="text-capitalize mb-0">bikash kumar paul</h3>
                                <br />

                                <p>Bikash Kumar Paul completed his Bachelor of Science in Engineering (B.Sc Engg) and Master of Science in Engineering (M.Sc Engg) from Department of Information and Communication Technology (ICT), Mawlana Bhashani Science and Technology University (MBSTU). He is working with Photonic Crystal Fiber (PCF) based sensors, Terahertz (THz) Communication, Surface Plasmon Resonance (SPR).</p>
                            </div>


                            <div className="content mb-5">
                                <h3 className="text-capitalize mb-0">education</h3>
                                <br />

                                <p>Bikash Kumar Paul completed his Bachelor of Science in Engineering (B.Sc Engg) and Master of Science in Engineering (M.Sc Engg) from Department of Information and Communication Technology (ICT), Mawlana Bhashani Science and Technology University (MBSTU). He is working with Photonic Crystal Fiber (PCF) based sensors, Terahertz (THz) Communication, Surface Plasmon Resonance (SPR).</p>
                            </div>

                            <div className="content mb-5">
                                <h3 className="text-capitalize mb-0">research fields</h3>
                                <br />

                                <p>Bikash Kumar Paul completed his Bachelor of Science in Engineering (B.Sc Engg) and Master of Science in Engineering (M.Sc Engg) from Department of Information and Communication Technology (ICT), Mawlana Bhashani Science and Technology University (MBSTU). He is working with Photonic Crystal Fiber (PCF) based sensors, Terahertz (THz) Communication, Surface Plasmon Resonance (SPR).</p>
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