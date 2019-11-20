import React from 'react';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { COLOR_WHITE } from '../config/config'
import { withStyles } from '@material-ui/core/styles';

const Imagenes = (props) => {
  const color = props.color
  const StyledBadge2 = withStyles(theme => ({
    badge: {
      backgroundColor: `${color}`,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: `1px solid ${color}`,
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
      <Avatar alt={'Imagen'} src={props.src} />

      </StyledBadge2>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={COLOR_WHITE} stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" className="feather">
        <circle cx="12" cy="12" r="1">
        </circle>
        <circle cx="12" cy="5" r="1">
        </circle>
        <circle cx="12" cy="19" r="1">
        </circle>
      </svg>
    </Box>
  );
}
export default Imagenes
