import React from 'react'
import ReactPlayer from 'react-player'

const VideoPolaroid = (props) => {
    let video = props.video

    return (
    
    <div className="foto-frame" style={props.styles}>
              <ReactPlayer
                url={video}
                muted={true}
                playing={true}
                loop={true}
                width={"100%"}
                height={"100%"}
              />
              <p className='frase-foto'>
                {props.frase}
                <br></br>
                jamd & dsdp {props.year}
              </p>
            </div>
  )
}

export default VideoPolaroid
