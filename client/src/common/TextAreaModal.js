import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import HomeView from '../components/Intranet/views/Home/HomeView'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 450,
  },
}));

const Prueba = (props) => {
  return(
    <h1>{props.description}</h1>
  )
}

const TextAreaModal = (props) => {
  const classes = useStyles();
  const [description, setDescription] = useState(null);
  const handleChange = eve => {
    setDescription(eve.target.value)
  }
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label='Descripción'
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          onChange={handleChange}
        />
        <Prueba description={description}/>
      </div>
    </form>
  );
}
export default TextAreaModal