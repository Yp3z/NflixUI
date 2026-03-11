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
        <ListaPopular/>
        </div>

    </>
  )
}
