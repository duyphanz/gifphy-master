import {connect} from 'react-redux'
import Trending from './Treding'
import {fetchImg} from '../../actions/search'

const trending_url = 'https://api.giphy.com/v1/gifs/trending'

function mapDispatchToProps(dispatch) {
    return {
        onLoadImg: () => {
            dispatch(fetchImg('', trending_url))
        }
    }
}



export default connect(null, mapDispatchToProps)(Trending)