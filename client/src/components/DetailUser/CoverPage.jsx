import React from 'react'
import { withRouter } from "react-router-dom";
import Progress from '../../common/Progress'
import Span from '../../common/Span'

const loading = () => <div className="animated fadeIn pt-1 text-center"><Progress/></div>

const CoverPage = (props) => {
  return (
    <React.Suspense fallback={loading()}>
      <div className="container">
        <div className="profile-container">
          <div className="card hovercard">
            <div className="cardheader user-cover">
              <div className="user-cover-reposition-container">
                <div className="user-cover-reposition-w">
                  <img src='../../assets/img/banner/d-cover.jpg' alt={props.nameUser} className="pointer"/>
                </div>
              </div>
            </div>
            <div className="pic-info-cont">
              <div className="user-avatar flip">
                <img className="pointer" alt={props.nameUser} src={'../../assets/img/avatars/' + props.photo}/>
              </div>
              <div className="info" style={{marginTop: '0px'}}>
                <div className="title">
                  <Span text={(props.nameUser + ' ' + props.lastNameUser)}/>
                </div>
              </div>
            </div>
          </div>
          {/* Detalle */}
          <div className="row" style={{marginTop: '-25px'}}>
            <div className="user-bottom-nav col-md-12 ">
              <ul>
                <li>
                  <a href="#">
                    <span className="split-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></span>
                    <Span text='Cronología'/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="split-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></span>
                    <Span text='Apadrinamiento'/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="split-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></span>
                    <Span text='Adopciones'/>
                  </a>
                </li>
              </ul>
            </div>
            <label className="col-md-1 "></label>
          </div>
        </div>
      </div>
    </React.Suspense>
  )
}
export default withRouter(CoverPage)