import React from 'react'

export const BannerInicio = () => {
    return (
        <>

{

    <div 
      className="d-flex align-items-center justify-content-start p-5"
    >
<div className="p-4 me-5 ms-6" style={{ width: "500px", background: "transparent" }}>
  <h1 className="text-white" style={{ fontSize: "60px"}}>Final Fantasy VII</h1>
  <p className="text-white">2020  Parte I <img className="ms-2" src="./public/TVMA.png" alt="" width="60px"/></p> 
  <h2 className="text-white">#1 in PC Games Today</h2>  
  <p className="text-white">Final Fantasy VII Remake is a 2020 action role-playing game developed and published by Square Enix for the PlayStation 4. It is the first in a trilogy of games remaking Square's Final Fantasy VII -1997-, originally released for the PlayStation.</p>
  <img src="./public/Play.png" alt="" width="100px" />
    <img className='ms-3' src="./public/Info.png" alt="" width="105px" />
      </div>
    </div>
}
        </>

        
    )
}