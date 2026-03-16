import React from 'react'
import { Header } from '../components/Header'
import { BannerInicio } from '../components/BannerInicio'
import { ListaPopular } from '../components/ListaPopular'

export const Anime = () => {
    return (
        <>
        <div
            className=""
            style={{
            backgroundImage: "url('/public/Fondo3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
            }}>


            <Header/>


            <BannerInicio
            title="Chainsaw Man: Reze Arc"
            year="2025"
            top = "1# in Anime Movies Today"
            description="For the first time, Chainsaw Man comes to the big screen in an epic, action-packed adventure that continues the popular anime series. Denji worked as a demon hunter for the yakuza, trying to pay off the debt he inherited from his parents, but the yakuza betrayed and killed him."
        />

                    <ListaPopular 
                    juegos={[
                        {
                          id: 1,
                          titulo: "Words Bubble Up Like Soda Pop",
                          imagen: "./public/Anime 1.jpg"
                        },
                        {
                          id: 2,
                          titulo: "Suzume",
                          imagen: "./public/Anime 2.jpg"
                        },
                        {
                          id: 3,
                          titulo: "Look Back",
                          imagen: "./public/Anime 3.jpg"
                        },
                        {
                          id: 4,
                          titulo: "Madoka Magica Rising",
                          imagen: "./public/Anime 4.png"
                        },
                        {
                          id: 5,
                          titulo: "Perfect Blue",
                          imagen: "./public/Anime 5.jpg"
                        },
                        
                      ]}
                    
                    />


        </div>

        </>
    )
}