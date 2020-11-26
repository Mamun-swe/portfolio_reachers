import React from 'react'
import '../../styles/client/header/style.scss'
import { ic_fiber_manual_record } from 'react-icons-kit/md'
import Icon from 'react-icons-kit'

const Index = () => {
    return (
        <div className="custom-header">
            <div className="flex-center flex-column">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center text-md-left">
                                <h1>bikash kumar paul</h1>
                                <ul>
                                    <li><h4>Researcher</h4></li>
                                    <li className="d-none d-lg-block px-2 pt-2"><Icon icon={ic_fiber_manual_record} size={13} /></li>
                                    <li><h4>Software Engineer</h4></li>
                                    <li className="d-none d-lg-block px-2 pt-2"><Icon icon={ic_fiber_manual_record} size={13} /></li>
                                    <li><h4>Teacher</h4></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index