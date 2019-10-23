import React, { Component } from 'react'
import { AppHeader } from '@coreui/react';
import { HandleAuthenticationById } from '../../components/Login/services/authHelper.services'
import { PERFIL } from '../../config/config';
import httpService from '../../config/token'
import CoverPage from './CoverPage'
import Progress from '../../common/Progress'
import AccidentsPost from '../Accidents/AccidentsPost'

const DefaultHeader = React.lazy(() => import('../../containers/DefaultLayout/DefaultHeader'));
const loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div>

class DetailUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      user: Object
    }
    this.Auth = new httpService()
  }
  async componentDidMount() {
    const iduser = this.props.match.params.id
    const user = await HandleAuthenticationById(iduser)
    this.setState({
      user: user
    })
    this.replaceTitle()
  }
  // Con esta función simplemente lo que hace es, cambiar el título dependiendo del componente
  replaceTitle() {
    let user = this.state.user.firstName + ' ' + this.state.user.lastName
    document.title = `${user + PERFIL}`
  }
  async signOut(e) {
    e.preventDefault()
    this.Auth.logout()
    this.functionRedirect('/')
  }
  onSignAdmi(e) {
    e.preventDefault()
    this.functionRedirect('/dashboard')
  }
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  onHandleDetail(e) {
    e.preventDefault()
  }
  onHome(e) {
    e.preventDefault()
    this.functionRedirect('/home')
  }
  render() {
    const { user } = this.state
    return(
      <React.Suspense fallback={loading()}>
        <div className="app">
          <AppHeader fixed>
            <DefaultHeader onHome={e=>this.onHome(e)} onLogout={e=>this.signOut(e)} onSignAdmi={e=>this.onSignAdmi(e)} onHandleDetail={e=>this.onHandleDetail(e)}/>
          </AppHeader>
          <div className="container">
            {/* Portada y imagen de usuario */}
            <div className='row page-margin profile wo_user_profile'>
              <CoverPage photo={user.photo} nameUser={(user.firstName === undefined ? '': user.firstName)}
              lastNameUser={(user.lastName === undefined ? '': user.lastName)} />
            </div>
            <AccidentsPost/> {/* Esto falta cambiar por las publicaciones realizadas sólo por el usuario */}
          </div>
        </div>
      </React.Suspense>
    )
  }
}
export default DetailUser