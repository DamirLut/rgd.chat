import type { Preview } from '@storybook/react';
import '@/styles/global.scss';

const preview: Preview = {
  argTypes: {
    color: {
      options: ['primary', 'success', 'error', 'notify'],
      control: 'radio',
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
};

export default preview;
