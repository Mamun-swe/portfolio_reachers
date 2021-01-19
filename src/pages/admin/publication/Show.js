import React, { useState, useEffect } from 'react'
import './style.scss'
import Axios from 'axios'
import api from '../../../utils/api'
import { useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser'

const Show = () => {
    const { id } = useParams()
    const [isLoading, setLoading] = useState(true)
    const [publication, setPublication] = useState({})
    const [pubErr, setPubErr] = useState()


    useEffect(() => {
        // Fetch publication
        const fetchPublication = async () => {
            try {
                const response = await Axios.get(`${api}admin/publication/${id}`)
                if (response.status === 200) {
                    setLoading(false)
                    setPublication(response.data)
                }
            } catch (error) {
                if (error) {
                    setLoading(false)
                    setPubErr(error.response.data.message)
                }
            }
        }

        fetchPublication()
    }, [id])


    // if loading
    if (isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }

    // if not found
    if (pubErr) {
        return (
            <div className="publication-show">
                <div className="container-fluid py-3 py-lg-0">
                    <div className="row">
                        <div className="col-12 pl-lg-0">
                            <div className="card border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <h4>{pubErr ?? pubErr}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="publication-show">
            <div className="container-fluid py-3 py-lg-0">
                <div className="row">
                    <div className="col-12 pl-lg-0">
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h4 className="mb-0">{publication.title}</h4>
                                <p className="mb-0">Published year {publication.year}</p>
                                <p className="mb-5">Created at: {publication.created_at}</p>
                                <div className="content">{ReactHtmlParser(publication.description)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;