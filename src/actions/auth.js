export const register = (email, firstName, lastName, token) => {
    return {
        type: 'register',
        payload: {
            email,
            firstName,
            lastName,
            token,
        }
    }
};
export const login = ( email, token ) => {
    return {
        type: 'login',
        payload: {
            email,
            token
        }
    }
}
