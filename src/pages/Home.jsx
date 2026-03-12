import React from 'react'
import { Header } from '../components/Header'
import { BannerInicio } from '../components/BannerInicio'
import { ListaPopular } from '../components/ListaPopular'

export const Home = () => {
  return (
    <>

        <div className=""
        style={{
            backgroundImage: "url('/public/Fondo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>



        <Header/>
        <BannerInicio/>
        
        <ListaPopular 
        juegos={[
            {
              id: 1,
              titulo: "Detroit Become Human",
              imagen: "./public/Juego 1.jpg"
            },
            {
              id: 2,
              titulo: "Life is Strange",
              imagen: "./public/Juego 2.jpg"
            },
            {
              id: 3,
              titulo: "The Last of Us Pt.1",
              imagen: "./public/Juego 3.jpg"
            },
            {
              id: 4,
              titulo: "Yakuza 0",
              imagen: "./public/Juego 4.jpg"
            },
            {
              id: 5,
              titulo: "Beyond: Two Souls",
              imagen: "./public/Juego 5.jpg"
            },
            
          ]}
        
        />



        </div>

    </>
  )
}
