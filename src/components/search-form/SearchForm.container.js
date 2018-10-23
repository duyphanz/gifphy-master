import { connect } from 'react-redux'
import {searchSuccess, fetchImg} from '../../actions/search'
import SearchForm from './SearchForm'



function mapDispatchToProps (dispatch) {
    return {
        onSearchSubmitted: (searchTerm) => {
            dispatch(fetchImg(searchTerm))
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchForm)