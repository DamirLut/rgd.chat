// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Colored: Story = {
  args: {
    color: 'primary',
  },
  render: (args) => <Button {...args}>Primary</Button>,
};
