import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const Center = ({ disableX = false, disableY = false, sx = {}, ...other }) => {
  return (
    <Box
      sx={{
        display: 'block',
        position: 'absolute',
        top: disableY ? 'auto' : '50%',
        left: disableX ? 'auto' : '50%',
        transform: `translate(${disableX ? 'auto' : '-50%'}, ${
          disableY ? 'auto' : '-50%'
        })`,
        ...sx,
      }}
      {...other}
    />
  );
};

Center.propTypes = {
  disableX: PropTypes.bool,
  disableY: PropTypes.bool,
  sx: PropTypes.object,
};

export default Center;
