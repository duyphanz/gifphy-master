import {connect} from 'react-redux'
import SearchResults from './SearchResults';
import {cleanSearch} from '../../actions/search'



function mapStateToProps(state) {
    console.log('Map state: ', state)
    return {
        // results: state.search.results
        results: state.search.results,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClean: () => {
            dispatch(cleanSearch())
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
