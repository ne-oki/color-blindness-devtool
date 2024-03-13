import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import './color-blindness-devtool'

describe('color-blindness-devtool', () => {
  it('renders inner content', async () => {
    document.body.innerHTML =
      '<color-blindness-devtool>Test</color-blindness-devtool>'
    await customElements.whenDefined('color-blindness-devtool')

    const devtool = document.body.querySelector('color-blindness-devtool')!
    expect(devtool.textContent).toBe('Test')
  })

  it('opens devtool when toggle button is clicked', async () => {
    const user = userEvent.setup()

    document.body.innerHTML =
      '<color-blindness-devtool></color-blindness-devtool>'
    await customElements.whenDefined('color-blindness-devtool')

    const devtool = document.body.querySelector('color-blindness-devtool')!
    const toggleButton = devtool.shadowRoot!.querySelector('button')!
    await user.click(toggleButton)
    await devtool.updateComplete

    const root = devtool.shadowRoot!.querySelector('.root')!
    expect(root.getAttribute('data-state')).toBe('open')
  })

  it('closes devtool when toggle button is clicked twice', async () => {
    const user = userEvent.setup()

    document.body.innerHTML =
      '<color-blindness-devtool></color-blindness-devtool>'
    await customElements.whenDefined('color-blindness-devtool')

    const devtool = document.body.querySelector('color-blindness-devtool')!
    const toggleButton = devtool.shadowRoot!.querySelector('button')!
    await user.click(toggleButton)
    await devtool.updateComplete
    await user.click(toggleButton)
    await devtool.updateComplete

    const root = devtool.shadowRoot!.querySelector('.root')!
    expect(root.getAttribute('data-state')).toBe('closed')
  })

  it('closes devtool after clicking outside when it is open', async () => {
    const user = userEvent.setup()

    document.body.innerHTML =
      '<color-blindness-devtool></color-blindness-devtool>'
    await customElements.whenDefined('color-blindness-devtool')

    const devtool = document.body.querySelector('color-blindness-devtool')!
    const toggleButton = devtool.shadowRoot!.querySelector('button')!
    await user.click(toggleButton)
    await devtool.updateComplete
    await user.click(document.body)
    await devtool.updateComplete

    const root = devtool.shadowRoot!.querySelector('.root')!
    expect(root.getAttribute('data-state')).toBe('closed')
  })

  it('selects trichromacy by default', async () => {
    document.body.innerHTML =
      '<color-blindness-devtool></color-blindness-devtool>'
    await customElements.whenDefined('color-blindness-devtool')

    const devtool = document.body.querySelector('color-blindness-devtool')!
    const filter = devtool.shadowRoot!.querySelector('color-blindness-filter')!
    expect(filter.getAttribute('kind')).toBe('trichromacy')
  })

  it('selects deuteranomaly when the card is clicked', async () => {
    const user = userEvent.setup()

    document.body.innerHTML =
      '<color-blindness-devtool></color-blindness-devtool>'
    await customElements.whenDefined('color-blindness-devtool')

    const devtool = document.body.querySelector('color-blindness-devtool')!
    const cards = Array.from(
      devtool.shadowRoot!.querySelectorAll('color-blindness-devtool-card')!,
    )
    const updateCompletePromises = cards.map((card) => card.updateComplete)
    await Promise.all(updateCompletePromises)

    const card = cards.find(
      (card) =>
        card.shadowRoot!.querySelector('h3')!.textContent === 'Deuteranomaly',
    )!
    const button = card.shadowRoot!.querySelector('button')!
    await user.click(button)
    await devtool.updateComplete

    const filter = devtool.shadowRoot!.querySelector('color-blindness-filter')!
    expect(filter.getAttribute('kind')).toBe('deuteranomaly')
  })
})
