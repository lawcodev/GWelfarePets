import React, { Suspense, useState, useEffect } from 'react'
import { Progress, TextAreaModal } from '../../../../common/'

const Loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div>

const HomeView = (props) => {
  return(
    // <div className="app">
    //   <AppHeader fixed>
    //     <DefaultHeader fixed/>
    //   </AppHeader>
    //   <div className="container">
    //     <br/><br/><br/>
    //     <main className="">
    //       <div className="animated fadeIn">
    //         <br/><br/><br/>
          
    //       </div>
    //     </main>
    //   </div>
    // </div>
    <div>
     <TextAreaModal/>
    </div>
  )
}
export default HomeView