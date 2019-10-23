import React, {Component} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'

class MultipleImageUpload extends Component{
  
  render(){
    return (
      <form encType="multipart/form-data" action="">
        <DropzoneArea 
          onChange={this.props.handleChangeImage}
          filesLimit={6}
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp', 'video/*']}
          dialogTitle='Agrega imagenes o vídeo para comprobación'
          dropzoneText='Agrega imagenes o vídeo'
          showAlerts={false}
          name="myImage"
        />
      </form>
    )  
  }
} 

export default MultipleImageUpload;