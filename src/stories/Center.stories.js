import React from 'react'
import { Center as AppCenter } from '/src';

export default {
  title: 'Center',
  component: AppCenter,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (<AppCenter {...args}>Hello World!</AppCenter>)

export const Center = Template.bind({})

Center.args = {
	disableX: false,
	disableY: false,
	sx: {}
}