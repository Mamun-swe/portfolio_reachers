import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './style.scss'
import { Icon } from 'react-icons-kit'
import {
    ic_apps,
    ic_info_outline,
    ic_lock,
    ic_library_books
} from 'react-icons-kit/md'
// import axios from 'axios'
// import api from '../../../utils/api'

import ProfileImg from '../../../assets/static/vector.jpg'

const Index = ({ user }) => {
    const history = useHistory()
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
        //     const response = await axios.get(`${apiURL}auth/logout`, header)
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
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/admin/basic-info">
                    <Icon icon={ic_info_outline} size={20} />
                    <span>basic Info</span>
                </NavLink>
                <NavLink
                    exact
                    activeClassName="is-Active"
                    className="btn btn-block shadow-none"
                    to="/admin/publications">
                    <Icon icon={ic_library_books} size={20} />
                    <span>publications</span>
                </NavLink>

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