import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { COLOR_PRIMARY } from '../config/config'

const useStyles = makeStyles({
  card: {
    minWidth: 330,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const SimpleCard = (props) => {
  const classes = useStyles();
  return(
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
        {props.value}
      </CardContent>
      {/* <CardActions>
        <Button size="small" style={{background: `${COLOR_PRIMARY}`, color: 'white'}} variant='contained'>Ver más</Button>
      </CardActions> */}
    </Card>
  )
}
export default SimpleCard
