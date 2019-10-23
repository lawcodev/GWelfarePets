import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import ReactTimeAgo from 'react-time-ago'
import JavascriptTimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'

JavascriptTimeAgo.locale(es)

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 720,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const { loading = false } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={props.avatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
       // Nombre del quien hace la publicación y verifica si es administrador por el cual muestra un simbolo de aprobación
        title={loading ? <Skeleton height={8} width="100%" /> :
        <a onClick={props.redirectDetailUser} className='pointer'> 
          {props.autor}
          {props.isAdmi === 'administrador'?
          <span className='verified-color'>
            <svg viewBox="5319 774 16 18.702" className="svg-icon color accent-color s-mr-05" xmlns="http://www.w3.org/2000/svg"> <g transform="translate(5292.079 774)"> <g id="Group_52" data-name="Group 52" transform="translate(26.921)"> <g id="Group_51" data-name="Group 51" transform="translate(0)"> <path id="Path_116" data-name="Path 116" className="cls-1" d="M42.838,15.891l-2.449-4.2c.423-.129.875-.244,1.063-.567.313-.539-.244-1.424-.1-2,.151-.6,1.039-1.11,1.039-1.715,0-.589-.918-1.277-1.069-1.87s.408-1.464.094-2-1.357-.5-1.788-.908-.442-1.47-.972-1.755-1.406.293-2,.155S35.542,0,34.927,0s-1.615,1-1.77,1.041c-.6.138-1.466-.439-2-.152s-.529,1.327-.971,1.754-1.473.372-1.786.912.244,1.424.1,2-1.072,1.168-1.072,1.834c0,.605.891,1.119,1.042,1.713.147.578-.408,1.464-.094,2a1.542,1.542,0,0,0,.945.529c.045.014.131.064.073.148L27,15.922a.342.342,0,0,0,.306.557l1.652.069a1.315,1.315,0,0,1,.941.545l.882,1.4a.342.342,0,0,0,.635-.012l2.467-4.259c.05-.058.1-.046.123-.026a1.707,1.707,0,0,0,.96.459,1.477,1.477,0,0,0,.875-.456c.023-.02.079-.06.12.024l2.464,4.236a.342.342,0,0,0,.635.011l.879-1.4a1.315,1.315,0,0,1,.94-.546l1.652-.072a.342.342,0,0,0,.308-.561Zm-5.181-3.829a5.474,5.474,0,1,1-.11-9.545l.041.023.058.032a5.484,5.484,0,0,1,.011,9.489Z" transform="translate(-26.921)"></path> <path id="Path_117" data-name="Path 117" className="cls-1" d="M100.233,54.128l-.023-.013a4.615,4.615,0,1,0-4.766,7.9l.16.1a4.617,4.617,0,0,0,4.628-7.99Zm.551,3.6-.771.752a1.3,1.3,0,0,0-.332,1.021l.182,1.062c.056.329-.139.47-.434.316l-.953-.5a1.3,1.3,0,0,0-1.074,0l-.953.5c-.3.155-.49.013-.434-.316L96.2,59.5a1.3,1.3,0,0,0-.332-1.021l-.771-.752c-.239-.233-.164-.462.166-.51l1.066-.155a1.3,1.3,0,0,0,.869-.631l.476-.966c.148-.3.39-.3.536,0l.476.966a1.3,1.3,0,0,0,.869.631l1.066.155C100.948,57.266,101.023,57.5,100.784,57.729Z" transform="translate(-89.914 -50.787)"></path> </g> </g> </g></svg>
          </span>: ''}
        </a> } 
        subheader={loading ? <Skeleton height={6} width="40%" /> : <span><ReactTimeAgo date={(props.fecha)} locale="es"/><span style={{color: '#9197a3'}}> - <i className="fa fa-map-marker"></i> Trujillo.</span></span>}
      />
      <CardContent>
        <Typography paragraph variant="body2" color={props.color} component="p">
          <span style={{color: props.color}}>{props.accidentType}</span> {/* Titulo de la publicación */}
        </Typography>
        <Typography>
          {props.textPostTitle} {/* Titulo de la publicación */}
        </Typography>
        <Typography paragraph variant="body2" color="textSecondary" component="p">
          {props.textPost} {/* Cuerpo de la publicación */}
        </Typography>
      </CardContent>
      {
        props.accidentType == 'Desaparecido' ?
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.autor} 
        /> :
        <div className='post-description'>
          <br/>
          <div style={{position: 'relative'}}>
            <div class="wo_adaptive_media">
              <div className='album-image width-3'>
                <img src={'../../assets/img/maltrato/maltrato1.jpg'} alt="image" className="image-file pointer"/>
              </div>
              <div className='album-image width-3'>
                <img src={'../../assets/img/maltrato/maltrato2.jpg'} alt="image" className="image-file pointer"/>
              </div>
              <div className='album-image width-3'>
                <img src={'../../assets/img/maltrato/maltrato3.jpg'} alt="image" className="image-file pointer"/>
              </div>
            </div>
          </div> 
          <div className="clear"></div>
        </div>
      }
    </Card>
  );
}
