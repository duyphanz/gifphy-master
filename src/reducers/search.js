import {SEARCH_SUCCESS} from '../actions/search'


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
        default:
            return state
    }
}
