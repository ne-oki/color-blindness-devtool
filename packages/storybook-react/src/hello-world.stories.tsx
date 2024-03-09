import type { Meta, StoryObj } from '@storybook/react'

import { HelloWorld } from '@web-components-monorepo-starter/hello-world-react'

const meta = {
  title: 'HelloWorld',
  component: HelloWorld,
  tags: ['autodocs'],
} satisfies Meta<typeof HelloWorld>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const NameProperty: Story = {
  args: {
    name: 'Storybook',
  },
}

export const CountProperty: Story = {
  args: {
    count: 5,
  },
}

export const ChildContent: Story = {
  args: {
    children: <p>This is child content</p>,
  },
}
