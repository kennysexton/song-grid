import React from 'react'
import Tilt from 'react-vanilla-tilt'

function Card(props) {

    return (
        <Tilt options={{ glare: true, "max-glare": 1 }}
            className="rounded-md bg-cover bg-center"
            data-tilt-full-page-listening
            style={{ backgroundImage: `url(${props.data.download_url})` }}>
        </Tilt>
    );
}

export default Card