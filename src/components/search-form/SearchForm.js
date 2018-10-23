import React from 'react'
import ReactDOM from 'react-dom'

export default function SearchForm ({ onSearchSubmitted }) {
    let searchTerm;

    const onSubmitted = (event) => {
        event.preventDefault()
        onSearchSubmitted(searchTerm.value)
        console.log(searchTerm.value)
    }

    const onFocus = () => {
        ReactDOM.findDOMNode(searchTerm).value = ''
    }

    return (
        <div>
             <form className="form-inline " onSubmit={onSubmitted}>
                 <input ref={(element) => searchTerm = element } className="form-control" placeholder="Searching ..." type="text" onFocus={onFocus}/>
                 <input type="submit" value="Search"  className="form-control"/>
             </form>
         </div>
    )
}