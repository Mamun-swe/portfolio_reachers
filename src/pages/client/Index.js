import React from 'react'
import NavBar from '../../components/ClientNav/Index'
import Home from '../../pages/client/Home/Index'
import About from '../../components/About/Index'

const Index = () => {
    return (
        <div>
            <NavBar />
            <Home />
            {/* <About /> */}
        </div>
    );
};

export default Index