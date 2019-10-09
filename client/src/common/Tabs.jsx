import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={5}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'fixed',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Esta mascota" {...a11yProps(0)} />
        <Tab label="¿Adoptar?" {...a11yProps(1)} />
        {/* <Tab label="Contribución" {...a11yProps(2)} /> */}
        <Tab label="Entrega" {...a11yProps(2)} />
        <Tab label="Seguimiento" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        ¿Viste mis fotos? Me encantan porque han captado mi esencia, ¡en todas sonrío!. Soy un mascota muy feliz, me llevo súper bien con los mascotas del albergue, sin embargo ya es hora de cambiar tu vida humano, yo derrocho amor y te va a gustar.¡Ya estoy listo para irme contigo!.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Adoptar un mascota es asumir el compromiso de mantenerlo, alimentarlo, cuidarlo, respetarlo, darle cariño y velar por su salud. Asegúrate de estar preparado para esta responsabilidad antes de solicitar la adopción.
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Adoptar un mascota tiene un costo de S/. 140.00 que servirá únicamente para cubrir los costos que una adopción genera a mascota y para contribuir con nuestros albergues afiliados.
        <li>Costos de adopción: S/.55.00</li>
        <li>Costos de entrega: S/. 45.00</li>
        <li>Aporte para el albergue de procedencia: S/. 40.00</li>
      </TabPanel> */}
      <TabPanel value={value} index={2}>
        GEOPETFARE se encargará de traer a tu mascota y te indicará la dirección de recojo al concluir el proceso de adopción
      </TabPanel>
      <TabPanel value={value} index={3}>
        Nos pondremos en contacto con todos nuestros adoptantes al cumplirse la primera semana, mes, seis meses y año de haberse producido la adopción de su mascota. Se realizará vía medios digitales, pero mascota se reserva el derecho de poder solicitar una cita cuando lo considere pertinente.
      </TabPanel>
    </div>
  );
}
