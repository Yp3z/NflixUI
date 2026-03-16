import React from 'react'
import { Header } from '../components/Header'
import { BannerInicio } from '../components/BannerInicio'
import { ListaPopular } from '../components/ListaPopular'

export const Games = () => {
    return (
        <>
        <div
            className=""
            style={{
            backgroundImage: "url('./Fondo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
            }}>


            <Header/>


            <BannerInicio
            title="Final Fantasy VII Remake"
            year="2020"
            top = "1# in PC Games Today"
            description="Final Fantasy VII Remake is a 2020 action role-playing game developed and published by Square Enix for the PlayStation 4. It is the first in a trilogy of games remaking Square's Final Fantasy VII -1997-, originally released for the PlayStation."
        />

                    <ListaPopular 
                    juegos={[
                        {
                          id: 1,
                          titulo: "Detroit Become Human",
                          imagen: "./Juego 1.jpg"
                        },
                        {
                          id: 2,
                          titulo: "Life is Strange",
                          imagen: "./Juego 2.jpg"
                        },
                        {
                          id: 3,
                          titulo: "The Last of Us",
                          imagen: "./Juego 3.jpg"
                        },
                        {
                          id: 4,
                          titulo: "Yakuza 0",
                          imagen: "./Juego 4.jpg"
                        },
                        {
                          id: 5,
                          titulo: "Beyond: One Soul",
                          imagen: "./Juego 5.jpg"
                        },
                        
                      ]}
                    
                    />


        </div>

        </>
    )
}