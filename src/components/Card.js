import React from 'react'

function Card(props) {
    return (
        <div className="rounded-md bg-slate-50 drop-shadow-md p-1">
            <h1>{props.data}</h1>
        </div>
    );
}

export default Card