<<<<<<< HEAD
import React from 'react';
import { checkIfLoggedIn } from '../../utils/Authenticate';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
=======
import React from 'react'
import { checkIfLoggedIn } from '../../utils/authenticate'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({ props, children, ...rest }) {
>>>>>>> refs/remotes/origin/master
    const loggedIn = checkIfLoggedIn()

    return (
        <Route
            {...rest}
            render={({ location }) =>
<<<<<<< HEAD
=======
                // loggedIn && loggedIn.role === rest.role ? (
>>>>>>> refs/remotes/origin/master
                loggedIn ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/",
                                from: location
                            }}
                        />
                    )
            }
        />
    );
}