/* eslint-disable no-unused-vars */
import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import axios from 'axios'

export default function Species() {
    const [ species, setSpecies ] = useState([])
    const [ msg, setMsg ] = useState("")

    const getSpecies = () => {
        axios.get(`https://swapi.dev/api/species/`)
        .then(res => {
            console.log(res.data)
            setSpecies(res.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro"))
    }

    useLayoutEffect(() => {
        getSpecies()
    }, [])


    return (
        <>
        <Banner title="OI" message="Tudo bem?"/>
        {msg}
        {species.map((item, chave) =>
            <div key={chave}>
                {item.name}
            </div>
            )}
       </>
    )
}
