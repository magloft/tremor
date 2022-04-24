import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import MarkerBar from 'components/bar-elements/MarkerBar/MarkerBar';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/BarElements/MarkerBar',
    component: MarkerBar,
} as ComponentMeta<typeof MarkerBar>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof MarkerBar> = (args) => (
    <MarkerBar {...args} />
);
  
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    markerPercentageValue: 50,
};

export const Colors = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Colors.args = {
    markerPercentageValue: 20,
    markerBgColor: 'bg-green-600',
    barBgColor: 'bg-blue-100'
};