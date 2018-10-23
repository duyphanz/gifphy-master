import React from 'react'
import SearchResults from '../search-results/SearchResults.container';

export default class Trending extends React.Component {

    componentWillMount() {
        this.props.onLoadImg()
    }

    render() {
        return (
            <div>
                <SearchResults  />
            </div>
        )
    }
}






// export default function () {
//     return (
//         <div>
//             <SearchResults />
//         </div>
//     )
// }