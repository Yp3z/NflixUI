import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-dark p-3" style={{ background: 'transparent', position: 'absolute', width: '100%', zIndex: 10 }}>
  <div className="container-fluid">
    <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active ms-3" aria-current="page" to="/movies">Movies</Link>
        </li>

        <li className="nav-item">
         <Link className="nav-link active ms-3" aria-current="page" to="/anime">Anime</Link>
        </li>
        
                <li className="nav-item">
         <Link className="nav-link active ms-3" aria-current="page" to="/games">Games</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">FAQ</a>
        </li>

 


      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>


<div className='ms-3 d-flex gap-2'>
       <img  src="./public/bell.png" alt="" height='30px'/> 
       <img src="./public/circle-user.png" alt="" height='30px'/>
</div>
    </div>
  </div>
</nav>

    </>


  )
}