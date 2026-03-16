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
            title="Five Nigths at Freddy's"
            year="2023"
            top = "1# in Videogame Movies Today"
            description="Para entender la historia de Five Nights at Freddy's hay que olvidarse que estos son juegos y quiero que tomen realmente a esta saga como lo que es. ¿Terror? Sí, pero sobre todo, ciencia ficción."
        />

                    <ListaPopular 
                    juegos={[
                        {
                          id: 1,
                          titulo: "Five Nights at Freddy's 2",
                          imagen: "./public/Peli 1.jpg"
                        },
                        {
                          id: 2,
                          titulo: "Sonic the Hedgehod 3",
                          imagen: "./public/Peli 2.jpg"
                        },
                        {
                          id: 3,
                          titulo: "Pixels",
                          imagen: "./public/Peli 3.jpg"
                        },
                        {
                          id: 4,
                          titulo: "Super Mario Bros",
                          imagen: "./public/Peli 4.png"
                        },
                        {
                          id: 5,
                          titulo: "Minecraft the Movie",
                          imagen: "./public/Peli 5.avif"
                        },
                        
                      ]}
                    
                    />


        </div>

        </>
    )
}