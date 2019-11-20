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
import Skeleton from '@material-ui/lab/Skeleton';
import ReactTimeAgo from 'react-time-ago'
import JavascriptTimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import Tooltip from '@material-ui/core/Tooltip'
import { COLOR_PRIMARY, COLOR_WHITE } from '../config/config'

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

const RecipeReviewCard = (props) => {
  const classes = useStyles();
  const { loading = false } = props;
  return (
    <div className='promoted-post'>
      {/* <Tooltip title={'Publicación destacada'}>
        <span className='promoted-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        </span>
      </Tooltip> */}
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} src={props.avatar}>
            </Avatar>
          }
        // Nombre del quien hace la publicación y verifica si es administrador por el cual muestra un simbolo de aprobación
          title={ loading ? <Skeleton height={8} width="100%" /> :
            <a href={props.redirectDetailUser} onClick={props.redirectDetailUser} className='pointer'> 
              {props.autor}
              <Tooltip title={props.titleTooltip}>
                {
                  props.isAdmi === 'administrador'?
                  <span className='verified-color'>
                    &nbsp;<svg viewBox="0 0 16 16" className="svg-icon" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-97.103 -44.137)"><path d="M113.1,52.137a8,8,0,1,0-8,8,8,8,0,0,0,8-8" fill={COLOR_PRIMARY}></path><path d="M155.4,88.276l1.7,3.434,3.63.566-2.578,2.673.8,3.549L155.4,96.951,151.847,98.5l.8-3.549-2.578-2.673,3.63-.566Z" transform="translate(-50.299 -41.917)" fill={COLOR_WHITE}></path></g></svg>
                  </span>: ''
                }
              </Tooltip>
            </a> 
          } 
          subheader={loading ? <Skeleton height={6} width="40%" /> : <span><ReactTimeAgo date={(props.date)} locale="es"/><span style={{color: '#9197a3'}}> - <i className="fa fa-map-marker"></i> Trujillo.</span></span>}
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
          props.accidentType === 'Desaparecido' ?
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
        <div class="stats post-actions pull-right">
          <div class="btn btn-default stat-item" title="Comentarios" onclick="Wo_ShowComments(16);">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span id="comments"> 0 </span>
          </div>
        </div>
        <div className='clear' />
        <hr/>
        <div class="stats pull-left" id="wo_post_stat_button">
          <div class="wo-reaction wo-reaction-post stat-item unselectable" data-id="16">
              <span class="like-btn like-btn-post unselectable" data-id="16" id="react_16" data_react="1" data-reaction="Like" data-reaction-lang="Me gusta" data-post-id="16" onclick="Wo_RegisterReactionLike(this);">
                <span className='status-reaction-106727 unselectable'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                </span>
                <span> Like </span>
              </span>
              <ul class="reactions-box reactions-box-container-16" data-id="16">
                  <li class="reaction reaction-like animated_2" data-reaction="Like" data-reaction-lang="Me gusta" data-post-id="16" onclick="Wo_RegisterReaction(this);">
                      <div class="emoji emoji--like">
                          <div class="emoji__hand">
                              <div class="emoji__thumb">
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="reaction reaction-love animated_4" data-reaction="Love" data-reaction-lang="Amor" data-post-id="16" onclick="Wo_RegisterReaction(this);">
                      <div class="emoji emoji--love">
                          <div class="emoji__heart">
                          </div>
                      </div>
                  </li>
                  <li class="reaction reaction-haha animated_6" data-reaction="HaHa" data-reaction-lang="HaHa" data-post-id="16" onclick="Wo_RegisterReaction(this);">
                      <div class="emoji emoji--haha">
                          <div class="emoji__face">
                              <div class="emoji__eyes">
                              </div>
                              <div class="emoji__mouth">
                                  <div class="emoji__tongue">
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="reaction reaction-wow animated_8" data-reaction="Wow" data-reaction-lang="WoW" data-post-id="16" onclick="Wo_RegisterReaction(this);">
                      <div class="emoji emoji--wow">
                          <div class="emoji__face">
                              <div class="emoji__eyebrows">
                              </div>
                              <div class="emoji__eyes">
                              </div>
                              <div class="emoji__mouth">
                              </div>
                          </div>
                      </div>
                  </li>
                  <li class="reaction reaction-sad animated_10" data-reaction="Sad" data-reaction-lang="Triste" data-post-id="16" onclick="Wo_RegisterReaction(this);">
                      <div class="emoji emoji--sad">
                          <div class="emoji__face">
                              <div class="emoji__eyebrows"></div>
                              <div class="emoji__eyes"></div>
                              <div class="emoji__mouth"></div>
                          </div>
                      </div>
                  </li>
                  <li class="reaction reaction-angry animated_12" data-reaction="Angry" data-reaction-lang="Enojado" data-post-id="16" onclick="Wo_RegisterReaction(this);">
                      <div class="emoji emoji--angry">
                          <div class="emoji__face">
                              <div class="emoji__eyebrows"></div>
                              <div class="emoji__eyes"></div>
                              <div class="emoji__mouth"></div>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
          <div class="btn btn-default stat-item" onclick="Wo_ShowComments(16);" title="Comentarios">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg> 
            <span class="like-btn-mobile">Comentario</span>
          </div>
          <div class="btn btn-default stat-item" title="Compartir" onclick="Wo_SharePostOn(16,1,'timeline')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share-2">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg> 
            <span class="like-btn-mobile">Compartir</span> 
          </div>
        </div>
      </Card>
    </div>
  );
}
export default RecipeReviewCard