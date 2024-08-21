import type { Meta, StoryObj } from '@storybook/angular';
import { InputSearchComponent } from './input-search.component';

const meta: Meta<typeof InputSearchComponent> = {
  component: InputSearchComponent,
};

export default meta;
type Story = StoryObj<typeof InputSearchComponent>;

export const Primary: Story = {
  render: () => ({
    props: {
      label: 'Input',
      placeholder: 'Write something...',
    },
  }),
};
