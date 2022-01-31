import React from 'react'

function Card(props) {

    return (
        <div className="rounded-md drop-shadow-md bg-cover bg-center p-1" style={{backgroundImage: `url(${props.data.download_url})`}}>
        </div>
    );
}

export default Card