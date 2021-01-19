import React, { useEffect, useState } from 'react'
import './style.scss'
import { useParams } from 'react-router-dom'
import Icon from 'react-icons-kit'
import { ic_chevron_right } from 'react-icons-kit/md'
import axios from 'axios'
import api from '../../../utils/api'

import Navbar from '../../../components/ClientNav/Index'
import Header from '../../../components/Header/Index'
import Footer from '../../../components/Footer/Index'

const Index = () => {
    const { year } = useParams()
    const [isOpen, setOpen] = useState(null)
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
                                    <div className="item" key={i}>

                                        {/* Item header */}
                                        <div
                                            className="d-flex item-header"
                                            onClick={() => setOpen(publication.id)}
                                        >
                                            <div><Icon icon={ic_chevron_right} size={25} /></div>
                                            <div className="ml-2">
                                                <p className="mb-0">{publication.name}</p>
                                            </div>
                                        </div>

                                        {/* Item body */}
                                        {isOpen === publication.id ?
                                            <div className="item-body">
                                                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
                                            </div>
                                            : null}

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