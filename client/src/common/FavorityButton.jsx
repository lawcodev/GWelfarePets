
import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import { Small } from '../common/'
const FavorityButton = (props) => {
  return(
    <div>
      <Tooltip title={props.titleTooltip}>
        <span className="pull-right save-post pointer" id={props.id}  onClick={props.onClick}>
          <FavoriteOutlinedIcon fontSize='default' color={props.color}/>
          <Small text={props.statusPet}/> 
        </span>
      </Tooltip>
    </div>
  )
}
export default FavorityButton