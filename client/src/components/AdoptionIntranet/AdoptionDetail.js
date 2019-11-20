import React, { Suspense, useEffect, useState } from 'react'
import Progress from '../../common/Progress'
import AuthService from '../../config/token';
import { AppHeader } from '@coreui/react';
import DetailPetAdoptionList from '../DetailAdoption/DetailPetAdoptionList'
import { connect } from 'react-redux';
import { PetGetById } from '../../components/Pets/action/petAction';

const DefaultHeader = React.lazy(() => import('../../containers/DefaultLayout/DefaultHeader'));
const loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div>
//Hook para devolver los datos de la sesión
const useUserGetProfile = () => {
  const [user, setUser] = useState(false)
  const Auth = new AuthService();
  useEffect(() => {
    async function fetchUserProfile() {
      const profile = Auth.getProfile() // obtenemos la sesión
      setUser(profile)
    }
    fetchUserProfile()
  })
  return { user }
}
// Hook para obtener una mascota
const usePetGet = (props) => {
  const [pet, setPet] = useState(false)
  useEffect(() => {
    async function fetchPetData() {
      const idpet = props.match.params.id // obtenemos el id de la mascota por medio de los props 
      const response = await props.PetGetById(idpet)
      setPet(response.payload) // le colocamos payload, debido a redux
    }
    fetchPetData()
  })
  return { pet }
}
const useLogin = () => {
  const [IsLoggedin, setIsLoggedin] = useState(false)
  const Auth = new AuthService()
  useEffect(() => {
    function fetchLoginValidate() {
      const IsLogged = Auth.loggedIn()
      setIsLoggedin(IsLogged)
    }
    fetchLoginValidate()
  })
  return { IsLoggedin }
}
const AdoptionDetail = (props) => {
  const { user } = useUserGetProfile(props)
  const { pet }  = usePetGet(props)
  const { IsLoggedin } = useLogin(props)

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
      <br/><br/>
      <DetailPetAdoptionList pet={pet} isAuth={IsLoggedin}/>
    </div>
  </React.Fragment>
  )
}
const mapStateToProps = state => ({
  pets: state.pets.pets
})
export default connect(mapStateToProps, { PetGetById })(AdoptionDetail)