export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE'
export const UPDATE_NEW = 'UPDATE_NEW'
export const DELETE_NEW = 'DELETE_NEW'
export const SET_NEW_DETAILS = 'SET_NEW_DETAILS'

export const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_REQUEST
    }
}

export const fetchNewsSuccess = (news) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news
    }
}

export const fetchNewsFailure = (error) => {
    return {
        type: FETCH_NEWS_FAILURE,
        payload: error
    }
}

export const setNewDetails = (item) => {
    return {
        type: SET_NEW_DETAILS,
        payload: item
    }
}

const fetchNews = () => {
    return (dispatch) => {
        dispatch(fetchNewsRequest())
        fetch("http://ongapi.alkemy.org/api/news")
            .then(response => response.json())
            .then(res => {
                dispatch(fetchNewsSuccess(res.data))
            })
    }
}

export default fetchNews