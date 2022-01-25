import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const Center = ({ disableX = false, disableY = false, sx = {}, ...other }) => {
  const _sx = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  if (disableX) delete _sx.justifyContent;
  if (disableY) delete _sx.alignItems;

  return (
    <Box
      sx={{
        ..._sx,
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
