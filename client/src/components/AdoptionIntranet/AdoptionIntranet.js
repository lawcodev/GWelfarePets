import React, { Suspense, useEffect, useState } from 'react'
import Progress from '../../common/Progress'
import AuthService from '../../config/token';
import PetsForAdoption from '../Espouse/PetsForAdoption'
import { AppHeader } from '@coreui/react';

const DefaultHeader = React.lazy(() => import('../../containers/DefaultLayout/DefaultHeader'));
const loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div>
//Hook para devolver los datos de la sesión
const useUserGetProfile = () => {
  const [user, setUser] = useState()
  const Auth = new AuthService();
  useEffect(() => {
    function fetchUserProfile() {
      const profile = Auth.getProfile() // obtenemos la sesión
      setUser(profile)
    }
    fetchUserProfile()
  })
  return { user }
}
// const useLogin = () => {
//   const [IsLoggedin, setIsLoggedin] = useState(false)
//   const Auth = new AuthService()
//   useEffect(() => {
//     function fetchLoginValidate() {
//       const IsLogged = Auth.loggedIn()
//       setIsLoggedin(IsLogged)
//     }
//     fetchLoginValidate()
//   }, [])
//   return { IsLoggedin }
// }
const AdoptionIntranet = (props) => {
  const { user } = useUserGetProfile(props)
  
  const signOut = (e) => {
    e.preventDefault()
    this.Auth.removeAuthorization()
    this.Auth.logout()
    functionRedirect('/')
  }
  const onSignAdmi = (e) => {
    e.preventDefault()
    functionRedirect('/dashboard')
  }
  const functionRedirect = (nameRedirect) => {
    props.history.push(nameRedirect)
  }
  const onHandleDetail = (e) => {
    e.preventDefault()
    let iduser = user.id
    functionRedirect('/perfil/'+iduser)
  }
  const onHome = (e) => {
    e.preventDefault()
    functionRedirect('/home')
  }
  return(
    <React.Fragment>
      <div className="App">
        <AppHeader fixed>
          <DefaultHeader onHome={e=>onHome(e)} onLogout={e=>signOut(e)} onSignAdmi={e=>onSignAdmi(e)} onHandleDetail={e=>onHandleDetail(e)}/>
          <Suspense  fallback={loading()}>
          </Suspense>
        </AppHeader>
        <div className="container-fluid">
          <br/><br/>
          <PetsForAdoption url='/adopcion/'/>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AdoptionIntranet