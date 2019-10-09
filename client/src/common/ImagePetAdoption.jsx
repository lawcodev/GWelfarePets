import React from 'react';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const SmallAvatar = withStyles(theme => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);
const ImagePetAdoption = (props) => {
  return (
    <Box display="flex">
      <Box m={1}>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          badgeContent={<SmallAvatar alt="Stock avatar" src={props.footerImage} />}
        >
          <Avatar alt="Stock avatar" src={props.bodyImage} />
        </Badge>
      </Box>
    </Box>
  )
}
export default ImagePetAdoption