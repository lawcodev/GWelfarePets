import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import { withRouter } from "react-router-dom"; // Componente de orden superior
import PetsIcon from '@material-ui/icons/Pets';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import MapIcon from '@material-ui/icons/Map';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const useStyles = makeStyles(theme => ({
  root: {
    height: 430,
    transform: 'translateZ(220px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'relative',
    bottom: theme.spacing(-14),
    right: theme.spacing(-14),
  },
}));
const actions = [
  { icon: <MapIcon />, name: 'Mapeo de mascotas', path: '/mapeo'},
  { icon: <PetsIcon />, name: 'Adoptar mascota', path: '/adopcion'},
  { icon: <GpsFixedIcon />, name: 'Buscar mascota', path: ''},
  { icon: <LoyaltyIcon />, name: 'Apadrinar mascota', path: '/apadrinar'},
];
const OpenIconSpeedDial = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden] = React.useState(false);
 
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const renderRedirect = (e,path) => {
    e.preventDefault()
    props.history.push(path)  
  }
  return (
    <div className={classes.root} style={{position: 'fixed'}}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon openIcon={<EditIcon/>} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}>
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e)=>renderRedirect(e, action.path)}
          />
        ))}
      </SpeedDial>
    </div>
  );
}
export default withRouter(OpenIconSpeedDial)
