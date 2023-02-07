import React from 'react'

import FotoPolaroid from './FotoPolaroid'
import '../styles/FotoPolaroid.scss'
import VideoPolaroid from './VideoPolaroid'

let portada1 = "https://rr1---sn-hxb5j5cax-ugj6.googlevideo.com/videoplayback?expire=1675823935&ei=v5riY6GSAeXVp84P1o-8-Aw&ip=187.244.56.39&id=8b261531595b667b&itag=18&source=blogger&mh=Cf&mm=31&mn=sn-hxb5j5cax-ugj6&ms=au&mv=m&mvi=1&pl=21&susc=bl&eaua=EieHs-cgoFg&mime=video/mp4&vprv=1&dur=3.088&lmt=1675713828948839&mt=1675794818&txp=1311224&sparams=expire,ei,ip,id,itag,source,susc,eaua,mime,vprv,dur,lmt&sig=AOq0QJ8wRgIhAKEDjM_FBdGZdjJVBwleY6GrF3FwiteFA8s38J12tHW3AiEAm65MLJWfObag8Jlenk76U1j4JVSV3SfWljOjn5Sub5Y%3D&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgLq1ftYu61YGUGSdIbLQ-GZ9Yy8nYaTQbgnNfswqomiQCIQCG03JnOYZd6yEW732dI88yRam_JcSR-PIdx0Gbcl2smQ%3D%3D&cpn=8rNuLLSBu1M1Cw4R&c"
let portada2 = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgguwWOGRIJ-7pKITyjfz-baVRkoKxhT46ucodYZpuIJLL1i3LHnqlmjFe6zmz-xhAkqV6tkA0l6JtcQrayxOCe9_zd-JHCTvPiNGe52bElozxytMvmUxqXu5c_x1OQT8d1e6zvcVqy_r_gupbRDtc5E8VuNEoiV615cEy7KVcTCkplcYmCEKxJLjqVdQ/s1259/momentos%20(5).jpg"
let portada3 = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcpLrRdNt9hhS0dJWTLem7LjkjoChs-lk4T-IQfXTldLeow9eZ0iLRbLN0qhArqQdwI3u2-fUzxXRYEdNXOI_N9x8740szCnDQIh_tts0kFYJMu8m3f5EyFXgoTn8o3EOQogRPCvi-4EYoKkHWOjde90L42INRw5tdBRr05S92JYQHUELv1umXNXqr-Q/s1600/mazatlan%20(1).jpg"



let styleFoto1= {
    transform: 'rotate(-15deg) translate(-10px, -50px)',
  }
  
  let styleFoto2= {
    transform: 'rotate(25deg) translate(-10%, 45%)',
  }
const PortadaSection = () => {
  return (
    <div>
        <h1 className='nombre'>Daniela Sheccid Davila Pérez</h1>
        <div className="main-container">
          <p className='parrafo-principal'>¡Hola hermosa!
            antes que nada, no importa en qué momento leas esto, si es justo cuando te lo enseñé o días, semanas, meses, o años después quiero que sepas que te extraño un montón y te adoro.
            <br></br>
            eres una maravillosa persona y me he dado cuenta de que a veces no te lo digo.
            <br></br>
            pero hey! eso no quiere decir que no lo piense (:
            <br></br>
            me disculpo por hacerte sentir miedo, confusión o duda.
            <br></br>
            no sé en qué momento pasó pero dejé de ser tu lugar seguro.
            <br></br>
            Me siento mal por cualquier cosa que haya hecho o dicho que haya dañado tu confianza en nuestra relación. Sé que la confianza es como una cuerda que nos une y quiero arreglarlo.
            <br></br>
            Entiendo que últimamente te encuentres temerosa y confundida, tal vez no recuerdes eso que nos hace únicos, así que me tomé la libertad de hacer este pequeño espacio donde podrás intentar olvidarte del miedo, recordar bellos momentos y ver lo felices que somos.
            <br></br>
            A veces un recuerdo no será suficiente, pero espero que este espacio te de la valentía de afrontar el problema junto conmigo, recuerda que para mí tu eres mi compañera de vida y estoy dispuesto a hacer lo que sea necesario para que tú y yo estemos bien.
            <br></br>
            estoy muy consciente de que la vida no es fácil y siempre podrá llegar algo que atormente tu corazón, pero creeme que siempre trataré de estar a tu lado cuando más lo necesites.
            <br></br>
            Espero que podamos reírnos juntos, abrazarnos fuerte y recuperar esa confianza que solíamos tener.
            <br></br>
            <br></br>
            Con todo mi amor y una sonrisa,
            <br></br>
            <br></br>
            Alejandro Meza
          </p>
          <div className="banner">
            <VideoPolaroid video={portada1} frase={"Eres tú"} year={"2019"}/>
            <FotoPolaroid styles={styleFoto1} src={portada2} frase={"Siempre has sido tú"} year={'2021'} />
            <FotoPolaroid styles={styleFoto2} src={portada3} frase={"Siempre serás tú"} year={'2022'} />
          </div>
        </div>
    </div>
  )
}

export default PortadaSection