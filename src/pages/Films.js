/* eslint-disable no-unused-vars */
import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import axios from 'axios'

export default function Films() {
    const [ films, setFilms ] = useState([])
    const [ msg, setMsg ] = useState("")

    const getFilms = () => {
        axios.get(`http://swapi.dev/api/films`)
        .then(res => {
            console.log(res.data.results)
            setFilms(res.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro"))
    }

    useLayoutEffect(() => {
        getFilms()
    }, [])


    return (
        <>
        <Banner title="OI" message="Tudo bem?"/>
        {msg}
        {films.map((item, chave) =>
            <div key={chave}>
                {item.title}
            </div>
            )}
       </>
    )
}
