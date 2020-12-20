import React from 'react'
import Icon from 'react-icons-kit'
import { ic_add } from 'react-icons-kit/md'

const Index = () => {
    return (
        <div className="index">
            <div className="container-fluid py-3 py-lg-0">
                <div className="row">
                    <div className="col-12 pl-lg-0">
                        <div className="card border-0 shadow">
                            <div className="card-header border-bottom bg-white p-lg-4">
                                <div className="d-flex">
                                    <div><h5 className="mb-0">Publications</h5></div>

                                    <div className="ml-auto mr-2">
                                        <input
                                            type="text"
                                            className="form-control form-control-sm shadow-none rounded-0"
                                            placeholder="Search"
                                        />
                                    </div>

                                    <div className="mr-2">
                                        <select
                                            className="form-control form-control-sm shadow-none rounded-0"
                                        >
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                        </select>
                                    </div>

                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-primary rounded-0 shadow-none"
                                        >
                                            <Icon icon={ic_add} size={22} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;