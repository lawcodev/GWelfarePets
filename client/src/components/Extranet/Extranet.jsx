import React, { Component } from 'react'
import Header from '../Header/Header'
import CarouselImage from '../CarouselExtranet/CarouselImage'
import Paragraph from '../../common/Paragraph'
import Span from '../../common/Span'
import H2 from '../../common/H2'

const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

class Extranet extends Component {
  onSignIn(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }
  onRedirectEspouse(e) {
    e.preventDefault()
    this.props.history.push('/adopta')
  }
  onRedirectQuestion(e) {
    e.preventDefault()
    this.props.history.push('/faq')
  }
  onHome(e) {
    e.preventDefault()
    this.props.history.push('/')
  }
  
  render() {
    return (
      <React.Suspense fallback={loading()}>
        <Header onHome={e=>this.onHome(e)} onSignIn={e=>this.onSignIn(e)} onRedirectEspouse={e=>this.onRedirectEspouse(e)} onRedirectQuestion={e=>this.onRedirectQuestion(e)}/>
          <div className="carousel slide">
            <div className="options-home">
              <CarouselImage/>
              <div className="options-content">
                <a onClick={e=>this.onRedirectEspouse(e)} className="options-box">
                  <div className="options-text" style={{color: 'white'}}>
                    <Paragraph className='adopta' text='ADOPTA'/>
                    <Paragraph text='¡Buscas un perro? Elige un Geopetfare y cambia dos vidas!'/>
                  </div>
                </a>
                <a className="options-box">
                  <div className="options-text" style={{color: 'white'}}>
                    <Paragraph className='ayuda' text='APADRINA'/>
                    <Paragraph text='¿Amas a los perros? Únete a la Manada Geopetfare y sé parte del más grande programa de voluntariado canino.'/>
                  </div>
                </a>
                <a className="options-box">
                  <div className="options-text" style={{color: 'white'}}>
                      <Paragraph className='contribuye' text='REPORTA'/>
                      <Paragraph text='Reporta un caso de maltrato al animal'/>
                  </div>
                </a>
            </div>
            <div className="fullcontent content-middle">   
              <div className="container">
                <H2 text='¿Qué es GEOPETFARE?'/>
                <ul>
                  <li>
                    <i className="sprite house"></i>
                    <Paragraph className="title" text='Es un perro rescatado'/>
                    <Paragraph text='Geopetfare es un perro que ha sido rescatado del abandono o una mala crianza. Todos ellos han pasado por un proceso de socialización en los albergues, lo que garantiza su recuperación.'/>
                  </li>
                  <li>
                    <i className="sprite doctor"></i>
                    <Paragraph className="title" text='Es un perro seguro'/>
                    <Paragraph text='Tod@ las mascotas están desparasitados, vacunados y esterilizados. Pasan pruebas psicológicas y clínicas, además de pruebas de sangre realizadas por SuizaVet. Nuestro proceso de adopción está certificado por la UCSUR.'/>
                  </li>
                  <li className="dogimgcontainer">
                    <img src="assets/img/img-dog-qwuf.png" alt='Imagen'/>
                  </li>            
                  <li>
                    <i className="sprite meat"></i>
                    <Paragraph className="title" text='Es un perro único'/>
                    <Paragraph text='Tod@s las mascotas son sobrevivientes, son héroes con historias y experiencias que los hacen únicos.'/>
                  </li>
                  <li>
                    <i className="sprite dog"></i>
                    <Paragraph className="title" text='Es un perro noble'/>
                    <Paragraph text='Un Geopetfare agradecerá siempre poder compartir su vida a tu lado. Será un amigo fiel que te acompañará y alegrará tus días.'/>
                  </li>            
                </ul>        
              </div>
            </div>
            <div className="content-bottom">
              <H2 text='¿Aún no te convence adoptar un Geopetfare?'/>
              <div className="container-bottom">
                <div>
                  <div className="dog">
                    <img src="assets/img/img-dog-pqwuf.png" alt='Imagen'/>
                  </div>
                  <ul>
                    <li>
                      <i className="sprite"></i>
                      <p>
                        <strong>Hay 6 millones de perros en las calles del Perú.</strong>
                        <Span text='Cada Geopetfare adoptado permite a otro perro ser rescatado.'/>
                      </p>
                    </li>
                    <li>
                      <i className="sprite"></i>
                      <p>
                        <strong>Adoptando ayudas a desincentivar una industria donde se comercializan más de 300 mil perros al año, mal tratando a madres y cachorros.</strong>
                      </p>
                    </li>
                    <li>
                      <i className="sprite"></i>
                      <p>
                        <strong>Tendrás el privilegio de compartir tu vida al lado de un compañero que la cambiará para siempre. </strong>                        
                      </p>
                    </li>
                    <li>
                      <i className="sprite"></i>
                      <p>
                        <strong>Eligiendo adoptar contribuirás a la construcción de un mundo mejor para todos los perros.</strong>
                      </p>
                    </li>   
                  </ul>
                </div>
                <button className="btnadopt" onClick={e=>this.onRedirectEspouse(e)}>¡Adopta un Geopetfare aquí!</button>
              </div>
            </div>
          </div>
        </div>
      </React.Suspense>
    );
  }
}
export default Extranet