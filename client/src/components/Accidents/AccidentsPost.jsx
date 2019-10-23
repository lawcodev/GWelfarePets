import React, { Component } from 'react'
import CardViewPostEsqueleton from '../../common/CardViewPostEsqueleton'
import CardViewPost from '../../common/CardViewPost'
import { AccidentGetAllApproved } from '../Accidents/action/accidentAction'
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom"; // Componente de orden superior

// Componente el cual renderiza todas las publicaciones aprobadas por el administrador.
class AccidentsPost extends Component {
  
  state = {
    isMounth: false
  }

  async componentDidMount() {
    this.isMounth = true // Cambiamos el estado para cuando el componente es montado
    if(this.isMounth) {
      await this.props.AccidentGetAllApproved()
      this.interval = setInterval(() => {
        this.props.AccidentGetAllApproved()
      }, 3000);
    }
  }
  componentWillUnmount() { // En este componente, es cuando el componente es desmontado, por ende desabilitamos el interval.
    this.isMounth = false
    clearInterval(this.interval)
  }
  setRedirect(id) {
    this.props.history.push('/perfil/'+id)   
  }
  render() {
    const { accidentsPost } = this.props // llamamos al props, debido a que estamos utilizando redux 
    return(
      <div>
        {
          accidentsPost.length > 0 ? accidentsPost.map((accidentPost) => {
            return(
              <div key={accidentPost.idpetaccident}>
                <CardViewPost
                fecha={accidentPost.date}
                autor={accidentPost.firstName + ' ' + accidentPost.lastName}
                textPost={accidentPost.lastSeen} 
                textPostTitle={accidentPost.title}
                accidentType={accidentPost.accidentType}
                avatar={'../../assets/img/avatars/' + accidentPost.photo}
                image={'../../assets/img/pets/' + accidentPost.photoApprove}
                redirectDetailUser={()=>this.setRedirect(accidentPost.iduser)}
                isAdmi={accidentPost.rol}
                color={accidentPost.color}
                />
                <br/>
              </div>
            )
          }): <CardViewPostEsqueleton/> // Muestra un esqueleto de publicaciones vacias, parecido a youtube o facebook.
        }
      </div>
    )
  }
}
const mapStateToProps = state => ({
  accidentsPost: state.accidents.accidents
})
// este componente lo hacemos orden superior, para poder escoger los props del historial de navegación
export default withRouter(connect(mapStateToProps, { AccidentGetAllApproved })(AccidentsPost));