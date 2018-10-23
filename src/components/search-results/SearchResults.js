import React from 'react'
import SearchResult from '../search-result/SearchResult';
import './SearchResults.css'

// const results = [
//     {
//         thumnail: 'https://media0.giphy.com/media/JIX9t2j0ZTN9S/200_s.gif'
//     },
//     {
//         thumnail: 'https://media2.giphy.com/media/mlvseq9yvZhba/200_s.gif'
//     }
// ]


export default class SearchResults extends React.Component {

    componentWillMount(){
        this.props.onClean()
    }

    render() {
        const {results} = this.props
        return (
            <div className="list-images">
                {results.map( (result, index) => (<SearchResult thumnail={result.thumnail} key={index}></SearchResult>))}
            </div>
        )
    }
}


// export default function SearchResults({ results }) {
//     return (
//         <div>
//             {results.map( (result, index) => (<SearchResult thumnail={result.thumnail} key={index}></SearchResult>))}
//         </div>
//     )
// }