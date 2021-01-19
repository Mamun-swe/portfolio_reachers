import React, { useState, useEffect } from 'react'
import './style.scss'
import Icon from 'react-icons-kit'
import {
    ic_add,
    ic_mode_edit,
    ic_remove_red_eye,
    ic_delete
} from 'react-icons-kit/md'
import { Link } from 'react-router-dom'
import axios from 'axios'
import api from '../../../utils/api'


const Index = () => {
    const [isLoading, setLoading] = useState(true)
    const [publications, setPublications] = useState([])
    const [filtered, setFiltered] = useState(publications)

    useEffect(() => {
        // Fetch Publications
        const fetchPublications = async () => {
            try {
                const response = await axios.get(`${api}admin/publication`)
                if (response.status === 200) {
                    setPublications(response.data)
                    setFiltered(response.data)
                    setLoading(false)
                }
            } catch (error) {
                if (error) {
                    setLoading(false)
                    console.log(error.response)
                }
            }
        }

        fetchPublications()
    }, [])

    // Filter Publication
    const onChangeFilter = event => {
        const result = publications.filter(x => x.title.toLowerCase().includes(event.target.value.toLowerCase()))
        if (result && result.length > 0) {
            setFiltered(result)
        } else {
            setFiltered(publications)
        }
    }

    if (isLoading) return (<div><p>Loading...</p></div>)


    return (
        <div className="publication-index">
            <div className="container-fluid py-3 py-lg-0">
                <div className="row">
                    <div className="col-12 pl-lg-0">
                        <div className="card border-0 shadow">
                            <div className="card-header border-bottom bg-white p-lg-4">
                                <div className="row">
                                    <div className="col-12 col-sm-4 col-lg-6 px-2 px-sm-3 mb-2 mb-sm-0">
                                        <h5 className="mb-0">Publications</h5>
                                    </div>

                                    <div className="col-12 col-sm-8 col-lg-6 px-2 px-sm-3">
                                        <div className="d-flex">
                                            <div className="flex-fill">
                                                <input
                                                    type="text"
                                                    className="form-control shadow-none"
                                                    placeholder="Search by title"
                                                    onChange={onChangeFilter}
                                                />
                                            </div>
                                            <div className="flex-fill px-2">
                                                <select
                                                    className="form-control shadow-none"
                                                >
                                                    <option>2020</option>
                                                    <option>2019</option>
                                                    <option>2018</option>
                                                </select>
                                            </div>
                                            <div>
                                                <Link
                                                    type="button"
                                                    to="/admin/publications/create"
                                                    className="btn btn-primary shadow-none"
                                                >
                                                    <Icon icon={ic_add} size={22} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body p-0">
                                <table className="table table-sm table-borderless table-responsive-sm">
                                    <thead>
                                        <tr className="border-bottom">
                                            <td className="text-center">SL</td>
                                            <td>Year</td>
                                            <td>Title</td>
                                            <td className="text-center">Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filtered.length > 0 ?
                                            filtered && filtered.map((publication, i) =>
                                                <tr className="border-bottom" key={i}>
                                                    <td className="text-center">{i + 1}</td>
                                                    <td>{publication.year}</td>
                                                    <td>{publication.title}</td>
                                                    <td className="text-center">
                                                        <Link
                                                            to={`/admin/publications/${publication.id}/edit`}
                                                            type="button"
                                                            className="btn btn-edit shadow-none"
                                                        >
                                                            <Icon icon={ic_mode_edit} size={16} />
                                                        </Link>

                                                        <Link
                                                            to={`/admin/publications/${publication.id}/show`}
                                                            type="button"
                                                            className="btn btn-edit shadow-none mx-1"
                                                        >
                                                            <Icon icon={ic_remove_red_eye} size={16} />
                                                        </Link>

                                                        <button
                                                            type="button"
                                                            className="btn btn-edit shadow-none"
                                                        >
                                                            <Icon icon={ic_delete} size={16} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ) : null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;