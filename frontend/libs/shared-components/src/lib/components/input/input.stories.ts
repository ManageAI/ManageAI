import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<typeof InputComponent> = {
  component: InputComponent,
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const Primary: Story = {
  render: () => ({
    props: {
      label: 'Input',
      placeholder: 'Write something...',
    },
  }),
};
