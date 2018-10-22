import React from 'react'


export default class SearchForm extends React.Component {
    render() {
        return (
        <div>
            <form className="form-inline">
                <input className="form-controll" placeholder="Searching ..." type="text"/>
                <input type="submit" value="Search" />
            </form>
        </div>
        )
    }
}