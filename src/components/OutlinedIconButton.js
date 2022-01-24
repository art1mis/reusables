import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';

const OutlinedIconButton = ({ sx, ...other }) => (
  <IconButton
    sx={{
      border: '1px solid',
      borderColor: (theme) =>
        theme.palette.mode === 'dark' ? 'primaryDark.600' : 'grey.200',
      borderRadius: 1,
      ...sx,
    }}
    {...other}
  />
);

OutlinedIconButton.defaultProps = {
  sx: {},
};

OutlinedIconButton.propTypes = {
  sx: PropTypes.object,
};

export default OutlinedIconButton;
