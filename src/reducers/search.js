import {SEARCH_SUCCESS, CLEAN_SEARCH} from '../actions/search'


const initialState = {
    results: []
}

function transformResult(rawResult){
    return rawResult.map( rs => {
        return {
            thumnail: rs.images.fixed_height_small_still.url
        }
    })
}

export function searchReducer(state, action) {
    if(state === undefined){
        return initialState
    }
    switch(action.type){
        case SEARCH_SUCCESS:
            return {
                ...state,
                results: transformResult(action.data)
            }
        case CLEAN_SEARCH:
            return initialState
        default:
            return state
    }
}
