import { connect } from 'react-redux'
import {searchSuccess, fetchImg} from '../../actions/search'
import SearchForm from './SearchForm'

const search_url = 'http://api.giphy.com/v1/gifs/search'

function mapDispatchToProps (dispatch) {
    return {
        onSearchSubmitted: (searchTerm) => {
            dispatch(fetchImg(searchTerm, search_url))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchForm)