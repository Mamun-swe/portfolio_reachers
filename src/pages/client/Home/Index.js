import React from 'react'
import '../../../styles/client/home/style.scss'
import { ic_fiber_manual_record } from 'react-icons-kit/md'
import Icon from 'react-icons-kit'

const Index = () => {
    return (
        <div className="home">
            <div className="flex-center flex-column">
                <div className="head-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center text-md-left">
                                <h1>bikash kumar paul</h1>
                                <ul>
                                    <li><h4>Researcher</h4></li>
                                    <li className="d-none d-lg-block px-2 pt-2"><Icon icon={ic_fiber_manual_record} style={{ color: '#fff' }} size={13} /></li>
                                    <li><h4>Software Engineer</h4></li>
                                    <li className="d-none d-lg-block px-2 pt-2"><Icon icon={ic_fiber_manual_record} style={{ color: '#fff' }} size={13} /></li>
                                    <li><h4>Teacher</h4></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="content-body">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center py-5">
                            <h4>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed.Lorem ipsum, or lipsum as it is sometimes known, is dummy.</h4>
                        </div>

                        <div className="col-12 text-center pb-5">
                            <h1 className="mb-5">IEEE 2020</h1>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                            <br />
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Index