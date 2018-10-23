import React from 'react'


export default function SearchResult({ thumnail }) {
    return (
        <div className="img-item">
            <img src={thumnail} />
        </div>
    )
}