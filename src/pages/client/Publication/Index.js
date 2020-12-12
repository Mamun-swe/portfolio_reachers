import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../../styles/client/publication/style.scss'
import Icon from 'react-icons-kit'
import { ic_chevron_right } from 'react-icons-kit/md'
import axios from 'axios'
import api from '../../../utils/api'

import Navbar from '../../../components/ClientNav/Index'
import Header from '../../../components/Header/Index'
import Footer from '../../../components/Footer/Index'

const Index = () => {
    const { year } = useParams()
    const [isLoading, setLoading] = useState(true)
    const [publications, setPublications] = useState([])

    useEffect(() => {
        // Fetch Publications
        const fetchPublications = async () => {
            try {
                const results = await axios.get(`${api}users`)
                if (results.status === 200) {
                    setLoading(false)
                    setPublications(results.data)
                }
            } catch (error) {
                if (error) {
                    setLoading(false)
                    console.log(error.response)
                }
            }
        }

        fetchPublications()
    }, [year])

    return (
        <div>
            <Navbar />
            <Header />

            <div className="publication">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Publication's of {year}</h2>
                            {isLoading ? <p className="mb-0">Loading...</p> : null}
                            <hr className="mb-0" />
                        </div>

                        {/* Items */}
                        {publications && publications.length > 0 ?
                            <div className="col-12">

                                {publications && publications.map((publication, i) =>
                                    <div className="d-flex item" key={i}>
                                        <div><Icon icon={ic_chevron_right} size={25} /></div>
                                        <div className="ml-2">
                                            <p className="mb-0">{publication.name}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            : <p>No publication found</p>
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Index;