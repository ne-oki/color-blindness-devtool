import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('color-blindness-devtool-chevron-up-icon')
export class ChevronUpIcon extends LitElement {
  static override styles = css`
    svg {
      width: var(--size, 1.5rem);
      height: var(--size, 1.5rem);
    }
  `

  override render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'color-blindness-devtool-chevron-up-icon': ChevronUpIcon
  }
}
