export const FETCH_SLIDES_REQUEST = 'FETCH_SLIDES_REQUEST'
export const FETCH_SLIDES_SUCCESS = 'FETCH_SLIDES_SUCCESS'
export const FETCH_SLIDES_FAILURE = 'FETCH_SLIDES_FAILURE'

export const fetchSlidesRequest = () => {
    return {
        type: FETCH_SLIDES_REQUEST
    }
}

export const fetchSlidesSuccess = (slides) => {
    return {
        type: FETCH_SLIDES_SUCCESS,
        payload: slides
    }
}

export const fetchSlidesFailure = (error) => {
    return {
        type: FETCH_SLIDES_FAILURE,
        payload: error
    }
}

const fetchSlides = () => {
    return (dispatch) => {
        dispatch(fetchSlidesRequest())
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(data => {
                dispatch(fetchSlidesSuccess(data))
            })
    }
}

export default fetchSlides