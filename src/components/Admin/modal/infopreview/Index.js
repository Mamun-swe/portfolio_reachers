import React from 'react'
import './style.scss'
import Icon from 'react-icons-kit'
import { ic_clear } from 'react-icons-kit/md'
import ReactHtmlParser from 'react-html-parser'

const Index = ({ hide, data }) => {

    return (
        <div className="preview-modal-container">
            <div className="custom-modal">
                <div className="custom-modal-header border-bottom">
                    <div className="d-flex">
                        <div><h5 className="mb-0">Info preview</h5></div>
                        <div className="ml-auto">
                            <button
                                type="button"
                                className="btn btn-light rounded-circle shadow-none p-1"
                                onClick={() => hide(false)}
                            >
                                <Icon icon={ic_clear} size={25} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="custom-modal-body">
                    <div className="row">
                        <div className="col-12 col-lg-3 text-center">
                            <div className="image-container rounded-circle">
                                <img src={data.image} className="img-fluid" alt="..." />
                            </div>
                        </div>
                        <div className="col-12 col-lg-9 mt-4 mt-lg-0">
                            <div className="information">
                                <h3>About</h3>
                                <h3 className="mb-0">{data.name}</h3>
                                <br />

                                <div className="content">{ReactHtmlParser(data.information)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;