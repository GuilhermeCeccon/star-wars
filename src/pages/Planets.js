/* eslint-disable no-unused-vars */
import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import axios from 'axios'


export default function Planets() {
    const [ planets, setPlanets ] = useState([])
    const [ msg, setMsg ] = useState("")

    const getPlanets = () => {
        axios.get(`https://swapi.dev/api/planets/`)
        .then(res => {
            console.log(res.data)
            setPlanets(res.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro"))
    }

    useLayoutEffect(() => {
        getPlanets()
    }, [])


    return (
        <>
        <Banner title="OI" message="Tudo bem?"/>
        {msg}
        {planets.map((item, chave) =>
            <div key={chave}>
                {item.name}
            </div>
            )}
       </>
    )
}
