import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const ResponsiveDialog = (props) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <textarea onClick={handleClickOpen} name={props.name} style={props.style} className="form-control postText ui-autocomplete-input" cols="8" placeholder={props.placeholder} dir="auto">
      </textarea>
      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title" style={{width: '500px'}}>
        <div className="col-12 col-sm-6 col-lg-8 themed-grid-col row mb-3 container">
          <form className="post publisher-box">
            <div className="panel panel-white post panel-shadow">
              <div className="wo_pub_txtara_combo">
                <img src={props.UserDialogImg} className="post-avatar" alt='imagen'/>
                <textarea className="form-control postText ui-autocomplete-input" placeholder={props.tituloPost} onChange={props.handleOnChangeTitulo} cols="100" dir="auto" style={{width: '480px'}}/>
              </div>
            </div>
          </form>
        </div>
        </DialogTitle>
        <DialogContent>
          <small>Usa un título que describa tu pregunta. No uses títulos vagos.</small>
          <DialogContentText>
            <textarea className="form-control postText ui-autocomplete-input border" placeholder={''} onChange={props.handleOnChangeDescription} cols="55" rows="3"/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant='outlined'>
            Cerrar
          </Button>
          <Button onClick={props.handleNewPost} color="primary" variant='contained' autoFocus>
            Publicar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ResponsiveDialog