import React, { Component } from 'react'
import Header from '../Header/Header'
import CarouselImage from '../CarouselExtranet/CarouselImage'
import Paragraph from '../../common/Paragraph'
import Span from '../../common/Span'
import H1 from '../../common/H1'
import H4 from '../../common/H4'
import Button from '../../common/Buttons'
import CardImage from '../../common/CardImage'
import { Col, Row } from 'reactstrap';

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
          <main role="main">
            <div className="carousel slide">
              <CarouselImage/>
              <div className="container">
                <br/><br/>
                <div className="featurette-divider">
                  <div className="row featurette">
                    <div className="text-center">
                      <H1 className="featurette-heading" text='¿QUE ES GEOPETFARE?'/>
                      <Paragraph className="lead" text='Geopetfare es una asociación sin fines de lucro dedicada a la promoción de la adopción, el trabajo de concientización sobre la realidad de los perros en estado de abandono y la ejecución de proyectos que contribuyan a la construcción de un mundo mejor para todos los perros.'/>
                      <Button color='primary' variant='outlined' text='¡Quiero adoptar!' onClick={e=>this.onRedirectEspouse(e)}/>
                      <br/><br/>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <H4 className="featurette-heading" text='Es un perro rescatado'/>
                        <Span className="lead" text='Un mascota que ha sido rescatado del abandono o una mala crianza. Todos ellos han pasado por un proceso de socialización en los albergues, lo que garantiza su recuperación.'/>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <H4 className="featurette-heading" text='Es un perro seguro'/>
                        <Span className="lead" text='Todos las mascotas están desparasitad@s, vacunad@s y esterilizad@s. Pasan pruebas psicológicas y clínicas, además de pruebas de sangre realizadas por SuizaVet. Nuestro proceso de adopción está certificado por la UCSUR.'/>
                      </div>
                    </div>
                    <div className="col-md-3 text-center">
                      <img src="http://www.wuf.pe/assets/img/img-dog-qwuf.png" alt='extranet' className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"/>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group">
                        <H4 className="featurette-heading" text='Es un perro noble'/>
                        <Span className="lead" text='Un can agradecerá siempre poder compartir su vida a tu lado. Será un amigo fiel que te acompañará y alegrará tus días.'/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h1>Mascotas adoptadas</h1>
                  <br/>
                  <Row>
                    <Col xs="12" sm="6" md="3">
                      <CardImage title='Jennifer Peña'
                      img='https://demo.w3layouts.com/demos_new/template_demo/18-12-2018/doggo-demo_Free/787265091/web/images/t1.jpg'
                      color='primary' variant='contained' textButton='Contactar'/>
                    </Col>
                    <Col xs="12" sm="6" md="3">
                      <CardImage title='Osmel Jacobo'
                      img='https://p.w3layouts.com/demos_new/template_demo/18-12-2018/doggo-demo_Free/787265091/web/images/t5.jpg'
                      color='primary' variant='contained' textButton='Contactar'/>
                    </Col>
                    <Col xs="12" sm="6" md="3">
                      <CardImage title='Rubi Castro'
                      img='https://p.w3layouts.com/demos_new/template_demo/18-12-2018/doggo-demo_Free/787265091/web/images/t8.jpg'
                      color='primary' variant='contained' textButton='Contactar'/>
                    </Col>
                    <Col xs="12" sm="6" md="3">
                      <CardImage title='Katherine Lopez'
                      img='https://p.w3layouts.com/demos_new/template_demo/18-12-2018/doggo-demo_Free/787265091/web/images/t7.jpg'
                      color='primary' variant='contained' textButton='Contactar'/>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </main>
      </React.Suspense>
    );
  }
}
export default Extranet