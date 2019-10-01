import React, { Component } from 'react'
import Header from '../Header/Header'
import Jumbotrons from '../../common/Jumbotrons'
import { HandleQuestionGetAll } from './services/questions.services'
import { Card, CardBody, Col, ListGroup, ListGroupItem, Row, Collapse } from 'reactstrap';
import Button from '../../common/Buttons'

class Questions extends Component {
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      questions: [],
      collapse: false 
    }    
  }
  async componentDidMount () {
    const responseJson = await HandleQuestionGetAll()
    this.setState({
      questions: responseJson
    })
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  onHome(e) {
    e.preventDefault()
    this.props.history.push('/')
  }
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
  render() {
    const { questions } = this.state
    return(
      <React.Fragment>
        <Header onHome={e=>this.onHome(e)} onSignIn={e=>this.onSignIn(e)} onRedirectEspouse={e=>this.onRedirectEspouse(e)} onRedirectQuestion={e=>this.onRedirectQuestion(e)}/>
        <div className="container">
          <Jumbotrons title='Preguntas frecuentes' subtitle='¿Como adopto a una mascota?'/>
          <Row>
            <Col sm="12" xl="12">
              <Button color='primary' variant='contained' onClick={this.toggle} text='Proceso de adopción'/>
              <Collapse isOpen={this.state.collapse}>
                <Card>
                  <CardBody>
                    <ListGroup>
                      {
                        questions.length > 0 ? questions.map((question, index) => {
                          return(
                            <ListGroupItem key={question.idaprocess}>{index + 1}.- {question.name}</ListGroupItem>
                          )
                        }): 'No hay datos por mostrar ...'
                      }
                    </ListGroup>
                  </CardBody>
                </Card>
              </Collapse>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}
export default Questions