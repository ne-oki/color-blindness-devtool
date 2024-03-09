import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import 'color-blindness-devtool'
import { ColorBlindnessFilterKind } from 'color-blindness-devtool'

interface ColorBlindnessFilterProps {
  kind?: ColorBlindnessFilterKind
}

const meta = {
  title: 'ColorBlindnessFilter',
  render: ({ kind }) => html`
    <style>
      .rainbow-square {
        width: 100%;
        height: 8rem;
        background: linear-gradient(
          to right,
          red,
          orange,
          yellow,
          green,
          blue,
          indigo,
          violet
        );
      }
    </style>
    <color-blindness-filter kind=${ifDefined(kind)}>
      <div class="rainbow-square"></div>
    </color-blindness-filter>
  `,
} satisfies Meta<ColorBlindnessFilterProps>

export default meta
type Story = StoryObj<ColorBlindnessFilterProps>

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
