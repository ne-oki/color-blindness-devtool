import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import './hello-world'
import { HelloWorld } from './hello-world'

describe('hello-world', () => {
  it('renders with default values', async () => {
    document.body.innerHTML = '<hello-world></hello-world>'
    await customElements.whenDefined('hello-world')

    const el = document.querySelector('hello-world') as HelloWorld
    const h1 = el.shadowRoot!.querySelector('h1')!
    const button = el.shadowRoot!.querySelector('button')!

    expect(h1.textContent!.trim()).toBe('Hello, World!')
    expect(button.textContent!.trim()).toBe('Click Count: 0')
  })

  it('renders with a set name', async () => {
    document.body.innerHTML = '<hello-world name="Test"></hello-world>'
    await customElements.whenDefined('hello-world')

    const el = document.querySelector('hello-world') as HelloWorld
    const h1 = el.shadowRoot!.querySelector('h1')!
    const button = el.shadowRoot!.querySelector('button')!

    expect(h1.textContent!.trim()).toBe('Hello, Test!')
    expect(button.textContent!.trim()).toBe('Click Count: 0')
  })

  it('handles a click', async () => {
    const user = userEvent.setup()

    document.body.innerHTML = '<hello-world></hello-world>'
    await customElements.whenDefined('hello-world')

    const el = document.querySelector('hello-world') as HelloWorld
    const button = el.shadowRoot!.querySelector('button')!
    await user.click(button)

    expect(button.textContent!.trim()).toBe('Click Count: 1')
  })
})
