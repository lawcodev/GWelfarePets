import React from 'react';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const SmallAvatar = withStyles(theme => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  bigAvatarSmall: {
    margin: 10,
    width: 35,
    height: 35,
  }
});

const ImagePetAdoption = (props) => {

  const classes = useStyles();

  return (
    <Box display="flex">
      <Box m={1}>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={<SmallAvatar alt="Stock avatar" src={props.footerImage} className={classes.bigAvatarSmall} />}
        >
          <Avatar alt="Stock avatar" src={props.bodyImage} className={classes.bigAvatar}  />
        </Badge>
      </Box>
    </Box>
  )
}
export default ImagePetAdoption