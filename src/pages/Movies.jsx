import React from 'react'
import { Header } from '../components/Header'
import { BannerInicio } from '../components/BannerInicio'
import { ListaPopular } from '../components/ListaPopular'

export const Movies = () => {
    return (
        <>
        <div
            className=""
            style={{
            backgroundImage: "url('/public/Fondo2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
            }}>


            <Header/>


            <BannerInicio
            title="Five Nigths at Freddys"
            year="2023"
            description="Para entender la historia de Five Nights at Freddy's hay que olvidarse que estos son juegos y quiero que tomen realmente a esta saga como lo que es. ¿Terror? Sí, pero sobre todo, ciencia ficción."
        />

            <ListaPopular/>

        </div>

        </>
    )
}