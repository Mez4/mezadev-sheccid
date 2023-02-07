import React from 'react'

const MainContent = () => {
  return (
    <div id="page-top">
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Alejandro Meza</a>
            <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portafolio</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">sobre mi</a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">

            <img class="masthead-avatar mb-5" src="assets/img/PP.png" alt="" />

            <h1 class="masthead-heading text-uppercase mb-0">Alejandro Meza</h1>

            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>

            <p class="masthead-subheading font-weight-light mb-0">Diseño y desarrollo web</p>
        </div>
    </header>

    <section class="page-section portfolio" id="portfolio">
        <div class="container">

            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portafolio</h2>

            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>

            <div class="row justify-content-center">

                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/portfolio/operativapp.png" alt="" />
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/portfolio/lobus.png" alt="" />
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/portfolio/operativappux.png" alt="" />
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/portfolio/colegio-america.png" alt="" />
                    </div>
                </div>

                <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/portfolio/mezadev.png" alt="" />
                    </div>
                </div>

                <div class="col-md-6 col-lg-4">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/portfolio/coderhouse.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">

            <h2 class="page-section-heading text-center text-uppercase text-white">Sombre mi</h2>

            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>

            <div class="row">
                <div class="col-lg-4 ml-auto"><p class="lead">Hola. Me llamo Alejandro. nací en el 98. Ahora estás en uno de mis proyectos, creado con la finalidad de poder mostrar mis demás proyectos y poderlos compartir de forma sencilla.</p></div>
                <div class="col-lg-4 mr-auto"><p class="lead">estudié sistemas en el Tecnológico de la Laguna también me he certificado en diferentes cursos, la mayoría orientados a la programación. Mi mayor hobbie es aprender cosas nuevas.</p></div>
            </div>


        </div>
    </section>

    <section class="page-section" id="contact">
        <div class="container">

            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contacto</h2>

            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>

            <div class="row">
                <div class="col-lg-8 mx-auto">

                    <form id="contactForm" name="sentMessage" novalidate="novalidate">
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Nombre</label>
                                <input class="form-control" id="name" type="text" placeholder="Nombre" required="required" data-validation-required-message="Olvidaste ingresar tu nombre." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>direccón de correo</label>
                                <input class="form-control" id="email" type="email" placeholder="Email" required="required" data-validation-required-message="Olvidaste ingresar tu email." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Numero de teléfono</label>
                                <input class="form-control" id="phone" type="tel" placeholder="Teléfono" required="required" data-validation-required-message="Olvidaste ingresar tu teléfono." />
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                <label>Mensaje</label>
                                <textarea class="form-control" id="message" rows="5" placeholder="Mensaje..." required="required" data-validation-required-message="Porfavor deja un mensaje."></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                        </div>
                        <br />
                        <div id="success"></div>
                        <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Enviar</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer text-center">
        <div class="container">
            <div class="row">

                <div class="col-lg-4 mb-2 mb-lg-0">
                    <h4 class="text-uppercase mb-4">ubicación</h4>
                    <p class="lead mb-0">
                        Torreón Coahuila, MX.
                    </p>
                </div>

                <div class="col-lg-4 mb-2 mb-lg-0">
                    <h4 class="text-uppercase mb-4">redes sociales</h4>
                    <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/Mez4" target="_blank"><i class="fab fa-github"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/meza_bxg/?hl=es-la" target="_blank"><i class="fab fa-fw fa-instagram"></i></a>
                </div>

                <div class="col-lg-4">
                    <h4 class="text-uppercase mb-4">otros contactos</h4>
                    <p class="lead mb-0">
                        871-412-8195
                        ale.meza.dev@gmail.com
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <div class="copyright py-4 text-center text-white">
        <div class="container"><small>Copyright © MEZA 2021</small></div>
    </div>

    <div class="scroll-to-top d-lg-none position-fixed">
        <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
    </div>

    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-labelledby="portfolioModal1Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                        
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal1Label">Operativapp</h2>
                        
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>
                        
                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/operativapp.png" alt="" />
                        
                            <p class="mb-5">A mi gusto personal este es el mejor proyecto que tengo.
                                <br></br>
                                Utilizando todos lo conocimientos adquiridos por mis estudios logre comenzar a desarrollar una aplicación móvil.
                                <br></br>
                                Utilicé las tecnologías mas actuales para este proyecto usando un servicio de bases de datos de Google que es Firebase, y React Native, un Framework de JavaScript para crear aplicaciones que puedan existir tanto en dispositivos Android como en iPhone 
                                <br></br>
                                estoy muy orgulloso de este proyecto ya que lo he desarrollado yo solo, desde el diseño de la interfaz utilizando figma, hasta el codigo. 
                                <br></br>
                                <a href="https://github.com/Mez4/Operativapp" target="_blank">puedes revisar el codigo aquí.</a>
                            </p>
                            <button class="btn btn-primary" data-dismiss="modal">
                                <i class="fas fa-times fa-fw"></i>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-labelledby="portfolioModal2Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal2Label">LOBUS WEB</h2>
                            
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>
                            
                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/lobus.png" alt="" />
                            
                            <p class="mb-5">en LOBUS Participe desarrollando su sitio web.
                            <br></br> utilicé tecnologías como HTML, JavaScript, css, php, etc.
                            <br></br>
                            En este proyecto si colabore en equipo ya que estaba trabajando en una empresa de desarrollo web. 
                            <br></br>
                                <a href="https://www.lobus.com.mx/" target="_blank">puedes revisar el proyecto aquí.</a>
                            </p>
                            <button class="btn btn-primary" data-dismiss="modal">
                                <i class="fas fa-times fa-fw"></i>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-labelledby="portfolioModal3Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">

                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal3Label">operativapp UI/UX</h2>

                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>

                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/operativappux.png" alt="" />

                            <p class="mb-5">En este proyecto realice el diseño de la interfaz de usuario de una aplicación movil. 
                                <br></br>
                                Utilicé como herramienta la plataforma FIGMA.
                                <br></br> 
                                Figma es una herramienta de prototipado web y editor de gráficos vectorial, que a diferencia de las otras herramientas, se aloja en la web y es gratis.

                                Además, una de las características que tiene Figma es que, al estar basada en el navegador, puedes compartir el proyecto con tu equipo y hacer modificaciones en la misma mesa de trabajo.
                                <br></br>
                                Este proyecto fue realizado solo por mí.
                                <br></br>
                                <a href="https://www.figma.com/file/CZrIELddigqZXCJwT5MsTL/MESEROS-UX?node-id=0%3A1" target="_blank">puedes revisar el proyecto aquí.</a>
                            </p>
                            <button class="btn btn-primary" data-dismiss="modal">
                                <i class="fas fa-times fa-fw"></i>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-labelledby="portfolioModal4Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            
                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal4Label">colegio américa</h2>
                            
                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>
                            
                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/colegio-america.png" alt="" />
                            
                            <p class="mb-5">
                                    Este proyecto me sirvió demasiado porque tuve demasiado trabajo de campo, convivía con el cliente para entender sus necesidades y plasmarlas en código.
                                    <br></br>
                                    En este proyecto si colabore en equipo ya que estaba trabajando en una empresa de desarrollo web. 
                                    <br></br>
                                    Utilicé tecnologías como HTML, JavaScript y css.
                                    <br></br>
                                    Desafortunadamente no se llego a un acuerdo monetario a mitad del proyecto y quedó inconcluso, sin embargo, como experiencia personal me sirvió demasiado ya que nunca habia tenido tanto contacto con un cliente como en este proyecto.
                                    <br></br>
                                    Aún así puedes revisar mi versión entregada con la página actual del colegio.    
                                    <br></br>
                                    <a href="/assets/nosoyelcolegio/colegio.html" onclick="window.open(this.href, 'mywin',
                                    'left=20,top=20,width=450,height=1000,toolbar=1,resizable=0'); return false;">Esta es mi versión del proyecto!</a>
                                    <br></br>
                                <a href="https://www.colegioamericatrc.com/" target="_blank">Esta es la página actual del colegio.</a>    
                            </p>
                            <button class="btn btn-primary" data-dismiss="modal">
                                <i class="fas fa-times fa-fw"></i>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="portfolioModal5Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">

                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal5Label">meza-dev</h2>

                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>

                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/mezadev.png" alt="" />

                            <p class="mb-5">
                                Este es mi proyecto personal, lo hice principalmente para poder mostrar los proyectos en los que he participado.
                                espero poder actualizar el portafolio constantemente y agregarle nuevas funcionalidades a este proyecto. 
                            <br></br>
                                Utilicé tecnologías como HTML, JavaScript, bootstrap y php.
                              
                            </p>
                            <button class="btn btn-primary" data-dismiss="modal">
                                <i class="fas fa-times fa-fw"></i>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-labelledby="portfolioModal6Label" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">

                            <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0" id="portfolioModal6Label">cursos</h2>

                            <div class="divider-custom">
                                <div class="divider-custom-line"></div>
                                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                <div class="divider-custom-line"></div>
                            </div>

                            <img class="img-fluid rounded mb-5" src="assets/img/portfolio/coderhouse.png" alt="" />

                            <p class="mb-5">
                                A lo largo de mi carrera y estudios he cursado distintos tipos de diplomados o cursos orientados al area de desarrollo o programación.
                                <br></br>
                                El ultimo de ellos ha sido en coderhouse, una de las mejores plataformas de LATAM.
                                <br></br>
                                aqui puedes revisar algunos de mis certificados.
                                <br></br>
                                <a href="https://www.sololearn.com/Certificate/CT-EYOMWUPC/png" target="_blank">JavaScript.</a>
                                <br></br>
                                <a href="/assets/img/portfolio/certificado.png" target="_blank">Desarrollo de aplicaciones moviles.</a>
                                <br></br>
                            </p>
                            <button class="btn btn-primary" data-dismiss="modal">
                                <i class="fas fa-times fa-fw"></i>
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>
  )
}

export default MainContent