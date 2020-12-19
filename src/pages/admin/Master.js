import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
import '../../styles/admin/style.scss'
import { Route, Switch } from 'react-router-dom'
import Icon from 'react-icons-kit'
import { ic_dehaze } from 'react-icons-kit/md'
// import axios from 'axios'
// import api from '../../utils/api'


import SideMenu from '../../components/Admin/sidemenu/Index'
import DashboardIndex from './dashboard/Index'
import BasicInfoIndex from './basicinfo/Index'

const Master = () => {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState({ name: "Bikash" })

=======
import '../../styles/admin/master.scss'
import { Route, Switch } from 'react-router-dom'
import Icon from 'react-icons-kit'
import { ic_dehaze } from 'react-icons-kit/md'
import axios from 'axios'
import api from '../../utils/api'

import SideMenu from '../../components/admin/sidemenu/Index'
import DashboardIndex from './Dashboard/Index'


const Master = () => {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState({ name: 'admin' })
>>>>>>> refs/remotes/origin/master

    useEffect(() => {
        const header = {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        }

        // // Fetch my information
        // const fetchMe = async () => {
        //     try {
        //         const response = await axios.get(`${apiURL}auth/me`, header)
        //         setUser(response.data.result)
        //     } catch (error) {
        //         if (error) {
        //             console.log(error.response)
        //             // HandleResponse(error.response)
        //         }
        //     }
        // }

        // fetchMe()
    }, [])

<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/master
    return (
        <div className="master">
            {/* Mobile Navbar */}
            <div className="mobile-navbar d-lg-none p-3">
                <div className="d-flex">
                    <div><p>{user.name}</p></div>
                    <div className="ml-auto">
                        <button
                            type="button"
                            className="btn btn-light rounded-circle shadow-none"
                            onClick={() => setShow(true)}
                        >
                            <Icon icon={ic_dehaze} size={25} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="d-flex">

                {/* Sidebar */}
                <div className="sidebar">
                    <div
                        className={show ? "backdrop open-backdrop" : "backdrop"}
                        onClick={() => setShow(false)}
                    ></div>
                    <div className={show ? "main-sidebar open-main-sidebar" : "main-sidebar"}>
                        <SideMenu user={user} />
                    </div>
                </div>

                {/* Main */}
                <div className="main flex-fill">
                    <Switch>
                        <Route exact path="/admin/" component={DashboardIndex} />
<<<<<<< HEAD
                        <Route exact path="/admin/basic-info" component={BasicInfoIndex} />
                        {/* <Route exact path="/admin/requests" component={RequestIndex} /> */}
=======
>>>>>>> refs/remotes/origin/master
                    </Switch>
                </div>
            </div>

        </div>
    );
<<<<<<< HEAD
};
=======
}
>>>>>>> refs/remotes/origin/master

export default Master;