import React from 'react'

export const BannerInicio = ({
  badge = "SLOTHUI ORIGINAL",
  title = "Rise of X",
  year = "2028",
  top = "1# in Movies Today",
  rating = "TV-MA",
  description = "It was the 33rd century. Civil war had struck the galaxy, which an Empire ruled. A princess, fleeing the Empire, was traveling with her protector, General Luke Skywalker. Two bureaucrats posted to the space fortress prematurely evacuated to the surface of Aquilae and discovered a store of aura spice, a precious substance. ",
}) => {
  return (
        <>

{
    <div 
      className="d-flex align-items-center justify-content-start p-5"
    >
<div className="p-4 me-5 ms-6" style={{ width: "500px", background: "transparent" }}>
  <h1 className="text-white" style={{ fontSize: "60px"}}>{title}</h1>
  <p className="text-white">{year}<img className="ms-2" src="./TVMA.png" alt="" width="60px"/></p> 
  <h2 className="text-white">{top}</h2>  
  <p className="text-white">{description}</p>
  <img src="./public/Play.png" alt="" width="100px" />
    <img className='ms-3' src="./public/Info.png" alt="" width="105px" />
      </div>
    </div>
}
        </>

        
    )
}