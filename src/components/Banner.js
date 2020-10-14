/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react'

function Banner(props) {
    return (
    <section id="banner">
        <h1>{props.title}</h1>
        <p>{props.message}</p>
    </section>
    )
}

export default Banner;