import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('color-blindness-devtool-chevron-up-icon')
export class ChevronUpIcon extends LitElement {
  override render() {
    return html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        part="icon"
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
