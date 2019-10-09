import React from 'react';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge2 = withStyles(theme => ({
  badge: {
    backgroundColor: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid #44b700',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const Imagenes = (props) => {
  return (
    <Box m={1}>
      <StyledBadge2
        overlap="circle"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        variant="dot"
      >
      <Avatar alt="Stock avatar" src={props.src} />
      </StyledBadge2>
    </Box>
  );
}
export default Imagenes
