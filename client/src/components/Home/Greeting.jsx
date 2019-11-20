import React from 'react'
import Paragraph from '../../common/Paragraph'

const Greeting = (props) => {
  let date = new Date()
  let greeting, quote, img, classColor
  let hours = date.getHours()
  if(hours < 12) {
    greeting = 'Buenos días'
    quote = 'Cada nuevo día es una oportunidad para cambiar tu vida y la de una mascota.'
    img = '../../assets/img/greeting/park.png'
    classColor = 'alert alert-dismissible greetalert border-5 border-bottom-0 border-right-0 border-top-0 border-success';
  } else if(hours >= 12 && hours <=18) {
    greeting = 'Buenas tardes'
    quote = 'Que esta tarde sea luz, bendita, iluminada, productiva y feliz.'
    img = '../../assets/img/greeting/desert.png'
    classColor = 'alert alert-dismissible greetalert border-bottom-0 border-right-0 border-top-0 border-warning';
  } else if(hours >=18 && hours <=24) {
    greeting = 'Buenas noches'
    quote = 'Las noches son la forma en que la vida dice que estás más cerca de tus sueños.'
    img = '../../assets/img/greeting/sea.png'
    classColor = 'alert alert-dismissible greetalert border-bottom-0 border-right-0 border-top-0 border-danger';
  }
  return(
    <div className={`${classColor}`} style={{borderLeft: '3.5px solid'}}>
      <div className="small-texts">{greeting}, {props.name}
        <img src={img} alt='Imagen'/>
      </div>
      <Paragraph text={quote}/>
    </div>
  )
}
export default Greeting