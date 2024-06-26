import type { Meta, StoryObj } from '@storybook/react'

import { ColorBlindnessFilter } from './color-blindness-filter'

const meta = {
  title: 'ColorBlindnessFilter',
  component: ColorBlindnessFilter,
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: { type: 'select' },
      options: [
        'trichromacy',
        'achromatomaly',
        'achromatopsia',
        'deuteranomaly',
        'deuteranopia',
        'protanomaly',
        'protanopia',
        'tritanomaly',
        'tritanopia',
      ],
    },
    children: {
      table: {
        type: { summary: 'React.ReactNode' },
      },
      control: { type: undefined },
    },
  },
  args: {
    children: (
      <div
        style={{
          width: '100%',
          height: '8rem',
          background:
            'linear-gradient(to right, red, orange, yellow, green, blue, purple)',
        }}
      />
    ),
  },
} satisfies Meta<typeof ColorBlindnessFilter>

export default meta
type Story = StoryObj<typeof meta>

export const Trichromacy: Story = {
  args: {},
}

export const Achromatomaly: Story = {
  args: {
    kind: 'achromatomaly',
  },
}

export const Achromatopsia: Story = {
  args: {
    kind: 'achromatopsia',
  },
}

export const Deuteranomaly: Story = {
  args: {
    kind: 'deuteranomaly',
  },
}

export const Deuteranopia: Story = {
  args: {
    kind: 'deuteranopia',
  },
}

export const Protanomaly: Story = {
  args: {
    kind: 'protanomaly',
  },
}

export const Protanopia: Story = {
  args: {
    kind: 'protanopia',
  },
}

export const Tritanomaly: Story = {
  args: {
    kind: 'tritanomaly',
  },
}

export const Tritanopia: Story = {
  args: {
    kind: 'tritanopia',
  },
}
