/* eslint-disable no-unused-vars */
import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import axios from 'axios'

export default function Starships() {
    const [ starships, setStarships ] = useState([])
    const [ msg, setMsg ] = useState("")

    const getStarships = () => {
        axios.get(`https://swapi.dev/api/starships/`)
        .then(res => {
            console.log(res.data)
            setStarships(res.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro"))
    }

    useLayoutEffect(() => {
        getStarships()
    }, [])


    return (
        <>
        <Banner title="OI" message="Tudo bem?"/>
        {msg}
        {starships.map((item, chave) =>
            <div key={chave}>
                {item.name}
            </div>
            )}
       </>
    )
}
