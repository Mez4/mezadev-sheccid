import React from 'react'
import florCorner from '../img/flor2.png'
import { Link } from 'react-router-dom'

const GridSection = () => {
  return (
    <div className='main-grid-section'>
      <div className="title-grid-section">Bellos Recuerdos</div>
      
      <Link style={{textDecoration: 'none'}} to={'/ElAmorDeMiVida/Momentos'}>
      <div className="box">
        <img className="florCorner" src={florCorner} />
        <p className="box-text">Momentos</p>
      </div>
      </Link>

      <Link style={{textDecoration: 'none'}} to={'/ElAmorDeMiVida/Viajes'}>
      <div className="box">
        <img className="florCorner" src={florCorner} />
        <p className="box-text">Viajes</p>
      </div>
      </Link>

      <Link style={{textDecoration: 'none'}} to={'/ElAmorDeMiVida/Comidita'}>
      <div className="box">
        <img className="florCorner" src={florCorner} />
        <p className="box-text">Comidita</p>
      </div>
      </Link>
    </div>
  )
}

export default GridSection