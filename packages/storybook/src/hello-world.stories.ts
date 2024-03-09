import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import '@web-components-monorepo-starter/hello-world'

interface HelloWorldProps {
  name: string
  count: number
}

const meta = {
  title: 'HelloWorld',
} satisfies Meta<HelloWorldProps>

export default meta
type Story = StoryObj<HelloWorldProps>

export const Default: Story = {
  args: {},
  render: () => html`<hello-world></hello-world>`,
}

export const NameProperty: Story = {
  args: {
    name: 'Storybook',
  },
  render: ({ name }) => html`<hello-world .name=${name}></hello-world>`,
}

export const CountProperty: Story = {
  args: {
    count: 5,
  },
  render: ({ count }) => html`<hello-world .count=${count}></hello-world>`,
}

export const ChildContent: Story = {
  args: {},
  render: () => html`
    <hello-world>
      <p>This is child content</p>
    </hello-world>
  `,
}
