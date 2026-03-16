import React from 'react'
import { Header } from '../components/Header'
import { BannerInicio } from '../components/BannerInicio'
import { ListaPopular } from '../components/ListaPopular'

export const Home = () => {
  return (
    <>

        <div className=""
        style={{
            backgroundImage: "url('./Fondo X.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>



        <Header/>
        <BannerInicio/>
        
        <ListaPopular 
        juegos={[
            {
              id: 1,
              titulo: "Detective Pikachu",
              imagen: "./Movie 1.jpg"
            },
            {
              id: 2,
              titulo: "Siberian Hitman 2",
              imagen: "./Movie 2.jpg"
            },
            {
              id: 3,
              titulo: "Batman",
              imagen: "./Movie 3.jpg"
            },
            {
              id: 4,
              titulo: "Alien Isolation",
              imagen: "./Movie 4.jpg"
            },
            {
              id: 5,
              titulo: "Rampage",
              imagen: "./Movie 5.avif"
            },
            
          ]}
        
        />



        </div>

    </>
  )
}
