import jwt_decode from "jwt-decode"

export const checkIfLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
        // const user = jwt_decode(token);
        // if (user.role === 'admin') {
        //     return ({ role: user.role })
        // }
        // return false

        return token
    }
    return false;
};