import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import { OutlinedIconButton as AppOutlinedIconButton } from '../';

export default {
  title: 'Outlined Icon Button',
  component: AppOutlinedIconButton,
};

const Template = (args) => (
  <AppOutlinedIconButton {...args}>
    <AdbIcon />
  </AppOutlinedIconButton>
);

export const OutlinedIconButton = Template.bind({});
OutlinedIconButton.args = {};
