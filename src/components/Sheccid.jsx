//dependencias
import React from 'react'

//componentes
import '../styles/const.scss'
import '../styles/sheccid.scss'
import PortadaSection from './PortadaSection'
import Section from './Section'

const Sheccid = () => {
  let darkBlue = {
    backgroundColor: "#26547cff",
  };
  let darkPink = {
    backgroundColor: "#f61067ff",
  };
  let cyan = {
    backgroundColor: "#ddfff7ff",
  };
  let pink = {
    backgroundColor: "#ffd4caff",
  };
  let yellow = {
    backgroundColor: "#fffc31ff",
  };

  return (
    <div className='elwudy'>
      <Section styles={pink}>
        <PortadaSection/>
      </Section>
      <Section styles={darkBlue}>
      </Section>
    </div>
  )
}

export default Sheccid