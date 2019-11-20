import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Small from './Small'

const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const CustomizedSwitches = (props) => {
  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
      <FormGroup>
        <div className='container'>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
              />
            }
            label={props.title}
          />
          {
            state.checkedB ?
            <input type="number" style={{width: '180px'}} onChange={props.onChangeContribution} placeholder='S/.'/>
            : ''
          }
          <br/>
          {
            state.checkedB ?
            <Small text='* ¡Elije! Teniendo en cuenta que la contribución brindada (S/.40), cubre los gastos de desparacitación, 
            limpieza, entrega a domicilio y además contribuyes a mejorar los servicios del cuidado animal que ofrece la asociación.'/>
            : ''
          }
          <br/><br/>
        </div>
      </FormGroup>
  );
}
export default CustomizedSwitches