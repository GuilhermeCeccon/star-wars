/* eslint-disable no-unused-vars */
import React, { useState, useLayoutEffect } from 'react'
import Banner from '../components/Banner'
import axios from 'axios'

export default function Peoples() {
    const [ peoples, setPeoples ] = useState([])
    const [ msg, setMsg ] = useState("")

    const getPeoples = () => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
            console.log(res.data)
            setPeoples(res.data.results)
            setMsg("")
        }).catch(() => setMsg("Erro"))
    }

    useLayoutEffect(() => {
        getPeoples()
    }, [])


    return (
        <>
        <Banner title="OI" message="Tudo bem?"/>
        {msg}
        {peoples.map((item, chave) =>
            <div key={chave}>
                {item.name}
            </div>
            )}
       </>
    )
}
