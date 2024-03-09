import { describe, expect, it } from 'vitest'

import './color-blindness-filter'
import { filterMatrixValues } from './color-blindness-filter'

describe('color-blindness-filter', () => {
  it('renders inner content', async () => {
    document.body.innerHTML =
      '<color-blindness-filter>Test</color-blindness-filter>'
    await customElements.whenDefined('color-blindness-filter')

    const filter = document.body.querySelector('color-blindness-filter')!
    expect(filter.textContent).toBe('Test')
  })

  it('does not have matrix filter values if kind is not set', async () => {
    document.body.innerHTML =
      '<color-blindness-filter></color-blindness-filter>'
    await customElements.whenDefined('color-blindness-filter')

    const filter = document.body.querySelector('color-blindness-filter')!
    const svg = filter.shadowRoot!.querySelector('svg')!
    const feColorMatrix = svg.querySelector('feColorMatrix')!
    expect(feColorMatrix.getAttribute('values')).toBe(null)
  })

  it('does not have matrix filter values if kind is set to trichromacy', async () => {
    document.body.innerHTML =
      '<color-blindness-filter kind="trichromacy"></color-blindness-filter>'
    await customElements.whenDefined('color-blindness-filter')

    const filter = document.body.querySelector('color-blindness-filter')!
    const svg = filter.shadowRoot!.querySelector('svg')!
    const feColorMatrix = svg.querySelector('feColorMatrix')!
    expect(feColorMatrix.getAttribute('values')).toBe(null)
  })

  it('applies matrix filter values correctly if kind is set to achromatomaly by attribute', async () => {
    document.body.innerHTML =
      '<color-blindness-filter kind="achromatomaly"></color-blindness-filter>'
    await customElements.whenDefined('color-blindness-filter')

    const filter = document.body.querySelector('color-blindness-filter')!
    const svg = filter.shadowRoot!.querySelector('svg')!
    const feColorMatrix = svg.querySelector('feColorMatrix')!
    expect(feColorMatrix.getAttribute('values')).toBe(
      filterMatrixValues.achromatomaly,
    )
  })

  it('applies matrix filter values correctly if kind is set to deuteranomaly by property', async () => {
    document.body.innerHTML =
      '<color-blindness-filter></color-blindness-filter>'
    await customElements.whenDefined('color-blindness-filter')

    const filter = document.body.querySelector('color-blindness-filter')!
    filter.kind = 'deuteranomaly'
    await filter.updateComplete

    const svg = filter.shadowRoot!.querySelector('svg')!
    const feColorMatrix = svg.querySelector('feColorMatrix')!
    expect(feColorMatrix.getAttribute('values')).toBe(
      filterMatrixValues.deuteranomaly,
    )
  })
})
