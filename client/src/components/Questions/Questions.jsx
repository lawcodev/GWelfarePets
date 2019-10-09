import React, { Component } from 'react'
import Header from '../Header/Header'
import { HandleQuestionGetAll } from './services/questions.services'
import H1 from '../../common/H1'
import H2 from '../../common/H2'
import Span from '../../common/Span'

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
        <div className="faq">
          <div className="top">
            <div className="container">
              <H1 text='Preguntas frecuentes'/>
              <H2 text='¿Cómo adopto una mascota?'/>
              <ul>
              {
                questions.length > 0 ? questions.map((question) => {
                  return(
                    <li key={question.idaprocess}><Span text={question.order}/>.- {question.name}</li>
                  )
                }): 'Cargando...'
              }
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Questions