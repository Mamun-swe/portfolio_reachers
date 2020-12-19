import React, { useState } from 'react'
import '../../../styles/admin/components/sidemenu.scss'
import { NavLink, useHistory } from 'react-router-dom'
import { Icon } from 'react-icons-kit'
import {
    ic_apps,
    ic_lock,
    ic_library_books
} from 'react-icons-kit/md'
// import axios from 'axios'
// import api from '../../../utils/api'

import ProfileImg from '../../../assets/static/user.jpg'

const Index = ({ user }) => {
    const history = useHistory()
    const [open, setOpen] = useState(false)
    const [isLoading, setLoading] = useState(false)

    // Header
    const header = {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
    }

    // Logout
    const doLogout = async () => {
        localStorage.clear()
        history.push('/')

        // try {
        //     setLoading(true)
        //     const response = await axios.get(`${api}auth/logout`, header)
        //     if (response.status === 200) {
        //         setLoading(false)
        //         localStorage.clear()
        //         history.push('/')
        //     }
        // } catch (error) {
        //     if (error) {
        //         setLoading(false)
        //         localStorage.clear()
        //         history.push('/')
        //     }
        // }
    }

    return (
        <div className="side-menu">

            {/* Header */}
            <div className="menu-header">
                <div className="d-flex">
                    <div className="img-box rounded-circle">
                        <img src={ProfileImg} className="img-fluid" alt="..." />
                    </div>
                    <div className="content">
                        <p>{user.name}</p>
                        <small>{user.role}</small>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="body">
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/admin/">
                    <Icon icon={ic_apps} size={20} />
                    <span>dashboard</span>
                </NavLink>

                <div>
                    <button
                        type="button"
                        className="btn btn-block shadow-none"
                    >
                        <Icon icon={ic_library_books} size={20} />
                        <span>publications</span>
                    </button>
                </div>

                <button
                    type="button"
                    className="btn btn-block shadow-none"
                    onClick={doLogout}
                    disabled={isLoading}
                >
                    <Icon icon={ic_lock} size={18} />
                    {isLoading ? <span>Logging out...</span> : <span>logout</span>}
                </button>
            </div>

        </div>
    );
};

export default Index;