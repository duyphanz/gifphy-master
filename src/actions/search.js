import axios from 'axios'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
// export const SEARCH_TRENDING = 'SEARCH_TRENDING'
export const CLEAN_SEARCH = 'CLEAN_SEARCH'



// const api_url = 'http://api.giphy.com/v1/gifs/search'
const api_key = 'RaBhN6Cfh3o49mhWoqOBWFrhQ0BopIFK'

export const searchSuccess = (data) => {
    return {
        type: SEARCH_SUCCESS,
        data
    }
}

export const cleanSearch = () => {
    return {
        type: CLEAN_SEARCH
    }
}


// export const searchTrending = (data) => {
//     return {
//         type: SEARCH_TRENDING,
//         data
//     }
// }

export const fetchImg = (searchTerm, url) => {
    return (dispatch) => {
        axios.get(url, {
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

// export const fetchTrending = (url) => {
//     return (dispatch) => {
//         axios.get(url, {
//             params: {
//                 api_key,
//                 limit: 25
//             }
//         })
//         .then(res => {
//             dispatch(searchTrending(res.data))
//         })
//     }
// }