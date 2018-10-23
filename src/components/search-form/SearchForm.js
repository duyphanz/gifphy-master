import React from 'react'

export default function SearchForm ({ onSearchSubmitted }) {
    let searchTerm;

    const onSubmitted = (event) => {
        event.preventDefault()
        onSearchSubmitted(searchTerm.value)
        console.log(searchTerm.value)
    }

    return (
        <div>
             <form className="form-inline" onSubmit={onSubmitted}>
                 <input ref={(element) => searchTerm = element } className="form-controll" placeholder="Searching ..." type="text"/>
                 <input type="submit" value="Search" />
             </form>
         </div>
    )
}