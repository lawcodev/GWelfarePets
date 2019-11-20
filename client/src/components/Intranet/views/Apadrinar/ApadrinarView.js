import React from 'react'
import { Progress } from '../../../../common/'
import PetViewModel from '../../components/Apadrinar/viewmodel/PetViewModel'
import { AppHeader } from '@coreui/react';

const DefaultHeader = React.lazy(() => import('../../container/DefaultLayout/Header'))
const Loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div>

const ApadrinarView = (props) => {
  return(
    <React.Suspense fallback={Loading()}>
      <div className='App'>
        <AppHeader fixed>
          <DefaultHeader/>
        </AppHeader>
        <br/><br/>
        <PetViewModel/>
      </div>
    </React.Suspense>
  )
}
export default ApadrinarView