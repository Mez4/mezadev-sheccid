import React from 'react'
const FotoPolaroid = (props) => {
  return (
    <div className="foto-frame" style={props.styles}>
      <div className="foto-content">
        <img className='foto' src={props.src}/>
      </div>
      <p className='frase-foto'>
        {props.frase}
        <br></br>
        jamd & dsdp {props.year}
      </p>
    </div>
  )
}

export default FotoPolaroid