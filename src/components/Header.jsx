import React from 'react'

export const Header = () => {
  return (
    <>

<nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Browse</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Kids</a>
        </li>
                <li class="nav-item">
          <a className="nav-link" href="#">Support</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">FAQ</a>
        </li>

 


      </ul>
      <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>


<div className='ms-3'>
       <img  src="./public/bell.png" alt="" height='30px'/> 
       <img src="./public/circle-user.png" alt="" height='30px'/>
</div>
    </div>
  </div>
</nav>

    </>


  )
}