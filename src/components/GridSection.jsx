import React from 'react'
import florCorner from '../img/flor2.png'
const GridSection = () => {
  return (
    <div className='main-grid-section'>
      <div className="title-grid-section">Bellos Recuerdos</div>
      <div className="box">
        <img className="florCorner" src={florCorner}/>
        <p className="box-text">Momentos</p>
      </div>
      <div className="box">
      <img className="florCorner" src={florCorner}/>
        <p className="box-text">Viajes</p>
      </div>
      <div className="box">
      <img className="florCorner" src={florCorner}/>
        <p className="box-text">Comidita</p>
      </div>
    </div>
  )
}

export default GridSection