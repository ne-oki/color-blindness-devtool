import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './color-blindness-devtool'

interface ColorBlindnessDevtoolProps {
  disabled?: boolean
}

const meta = {
  title: 'ColorBlindnessDevtool',
  tags: ['autodocs'],
  render: ({ disabled }) => html`
    <style>
      .preview {
        width: 100%;
        height: 8rem;
        background: linear-gradient(
          to right,
          red,
          orange,
          yellow,
          green,
          blue,
          purple
        );
      }
    </style>
    <color-blindness-devtool ?disabled=${disabled}>
      <div class="preview"></div>
    </color-blindness-devtool>
  `,
} satisfies Meta<ColorBlindnessDevtoolProps>

export default meta
type Story = StoryObj<ColorBlindnessDevtoolProps>

export const Default: Story = {
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
