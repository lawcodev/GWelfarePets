import React, { Component, Suspense } from 'react'
import { AppHeader } from '@coreui/react';
import { HandleAuthenticationById } from '../../components/Login/services/authHelper.services'
import { AUTHENTICATION_LOGOUT} from '../../config/httpService'

const DefaultHeader = React.lazy(() => import('../../containers/DefaultLayout/DefaultHeader'));
const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

class DetailUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      user: Object
    }
  }
  async componentDidMount() {
    const iduser = this.props.match.params.id
    const user = await HandleAuthenticationById(iduser)
    this.setState({
      user: user
    })
  }
  async signOut(e) {
    e.preventDefault()
    await AUTHENTICATION_LOGOUT()
    this.props.history.push('/')
  }
  onSignAdmi(e) {
    e.preventDefault()
    this.props.history.push('/dashboard')
  }
  functionRedirect(nameRedirect) {
    this.props.history.push(nameRedirect)
  }
  onHandleDetail(e) {
    e.preventDefault()
   }
  render() {
    const { user } = this.state
    return(
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader onLogout={e=>this.signOut(e)} onSignAdmi={e=>this.onSignAdmi(e)} onHandleDetail={e=>this.onHandleDetail(e)}/>
          <Suspense fallback={loading()}>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <main className="main container">
            <br/>
            <div className="animated fadeIn">
              <h1>{user.firstName}{user.lastName}</h1>
              <h1>hola</h1>
            </div>
          </main>
        </div>
      </div>
    )
  }
}
export default DetailUser