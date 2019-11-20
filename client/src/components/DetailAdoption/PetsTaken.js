import React, { useState, useEffect } from 'react'
import ImagePetAdoption from '../../common/ImagePetAdoption'
import { connect } from 'react-redux';
import { GetAllPetsTaken } from './action/adoptionAction'
//Hooks para listar las mascotas adoptadas con su respectivo dueño
const usePetsTaken = (props) => {
  const [adoptions, setAdoptions] = useState()
  useEffect(() => {
    async function fetchPetsTakenData() {
      const response = await props.GetAllPetsTaken()
      setAdoptions(response.payload)
    }
    fetchPetsTakenData()
  },[])
  return { adoptions, setAdoptions }
}

const PetsTaken = (props) => {
  const { adoptions } = usePetsTaken(props)
  return(
    <div style={{position: 'relative'}}>
      {
        props.adoptions.length > 0 ? props.adoptions.map((pet, i) => {
          return(
            <ImagePetAdoption key={pet.idpet} titleTooltip={((pet.petName).toUpperCase() + ' ha sido ' + (pet.statusPet).toLowerCase() + ' por ' + pet.firstName + '😊')} footerImage={'../../assets/img/avatars/' + pet.userPhoto} bodyImage={'../../assets/img/pets/' + pet.petPhoto}/>
          )
        }): 'No hay datos por mostrar'
      }
    </div>
  )
}
const mapStateToProps = state => ({
  adoptions: state.adoptions.adoptions
})
export default connect(mapStateToProps, { GetAllPetsTaken })(PetsTaken);