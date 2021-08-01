const { FETCH_SLIDES_REQUEST, FETCH_SLIDES_SUCCESS, FETCH_SLIDES_FAILURE } = require("actions/homeActions")



const initialState = {
    title: "",
    loading: false,
    slides: [],
    error: ''
}

const reducerHome = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SLIDES_REQUEST:
            return {
                loading: true,
                ...state
            }
        case FETCH_SLIDES_SUCCESS:
            return {
                title: action.payload[0].title,
                loading: false,
                slides: action.payload,
                error: ''
            }
        case FETCH_SLIDES_FAILURE:
            return {
                loading: false,
                slides: [],
                error: action.payload
            }
        default:
            return state
    }
}

export default reducerHome