
import React, { Component } from 'react'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

class TextFieldSearch extends Component {
  render () {
    const theme = createMuiTheme({
      palette: {
        primary: green,
      },
    });

    return (
      <ThemeProvider theme={theme}>
        <TextField
          id="outlined-dense-multiline"
          label="Buscar"
          value={this.props.value} 
          // onChange={(text) => this.filter(text)}
          onChange={this.props.onChange}
          variant="outlined"
          margin="dense"
          rowsMax="4"
        />
      </ThemeProvider>
    )
  }
}

export default TextFieldSearch