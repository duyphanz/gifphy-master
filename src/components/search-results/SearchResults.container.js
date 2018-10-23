import {connect} from 'react-redux'
import SearchResults from './SearchResults';



function mapStateToProps(state) {
    console.log('Map state: ', state)
    return {
        results: state.search.results
    }
}


export default connect(mapStateToProps, null)(SearchResults)
