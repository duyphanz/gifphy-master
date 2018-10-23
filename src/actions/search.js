import axios from 'axios'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'



const api_url = 'http://api.giphy.com/v1/gifs/search'
const api_key = 'RaBhN6Cfh3o49mhWoqOBWFrhQ0BopIFK'

export const searchSuccess = (data) => {
    return {
        type: SEARCH_SUCCESS,
        data
    }
}

export const fetchImg = (searchTerm) => {
    return (dispatch) => {
        axios.get(api_url, {
            params: {
                q: searchTerm,
                api_key,
                limit: 25
            }
        })
        .then(res => {
            console.log(res.data)
            dispatch(searchSuccess(res.data.data))
        })
    }
}