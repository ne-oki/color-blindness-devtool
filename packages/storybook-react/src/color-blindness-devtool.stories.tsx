import type { Meta, StoryObj } from '@storybook/react'

import { ColorBlindnessDevtool } from '@color-blindness-devtool/react'

const meta = {
  title: 'ColorBlindnessDevtool',
  component: ColorBlindnessDevtool,
  tags: ['autodocs'],
  args: {
    children: (
      <div
        style={{
          width: '100%',
          height: '8rem',
          background:
            'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
        }}
      />
    ),
  },
} satisfies Meta<typeof ColorBlindnessDevtool>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
