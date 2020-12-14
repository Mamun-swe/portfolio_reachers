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
                        <div className="col-12 py-5">
                            <h1>Contact page</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Index;