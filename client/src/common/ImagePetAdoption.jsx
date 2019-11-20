import React from 'react';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

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
    <Tooltip title={props.titleTooltip}>
      <Box container display="inline" p={1} m={1}>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={<SmallAvatar alt="Imagen" src={props.footerImage} className={classes.bigAvatarSmall} />}
        >
          <Avatar alt="imagen" src={props.bodyImage} className={classes.bigAvatar}  />
        </Badge>
      </Box>
    </Tooltip>
  )
}
export default ImagePetAdoption