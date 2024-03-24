import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'

import './color-blindness-filter'
import { ColorBlindnessFilterKind } from './color-blindness-filter'
import { resetStyles } from './reset-styles'

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

@customElement('color-blindness-devtool-card')
export class Card extends LitElement {
  static override styles = [
    resetStyles,
    css`
      button {
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;
        color: white;
        background: var(--background);
        border: 2px solid var(--border);
        border-radius: 0.25rem;
      }

      button.active {
        border: 2px solid var(--accent);
      }

      color-blindness-filter {
        box-sizing: border-box;
        width: 100%;
        padding: 0.25rem;
        padding-bottom: 0;
      }

      .preview {
        height: 5rem;
        background: linear-gradient(
          to right,
          #f00,
          #f50,
          #fa0,
          #ff0,
          #af0,
          #0f0,
          #0f5,
          #0fa,
          #0ff,
          #0af,
          #05f,
          #00f,
          #50f,
          #a0f,
          #f0f,
          #f0a,
          #f05
        );
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        align-items: flex-start;
        padding: 0.5rem;
        font-weight: 500;
      }

      p {
        font-size: 0.75rem;
        color: var(--muted);
      }
    `,
  ]

  @property()
  kind: ColorBlindnessFilterKind = 'trichromacy'

  @property()
  description: string = 'Normal'

  @property({ type: Boolean })
  active = false

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent('select', { detail: { kind: this.kind } }),
    )
  }

  override render() {
    // NOTE: `ifDefined(...)` is used instead of `classMap({ active: this.active })`.
    //  `classMap(...)` is simpler but fails to display correctly due to Vite build issues.
    return html`
      <button
        class=${ifDefined(this.active ? 'active' : undefined)}
        @click=${this.handleClick}
      >
        <color-blindness-filter kind=${this.kind}>
          <div class="preview"></div>
        </color-blindness-filter>
        <div class="content">
          <h3>${capitalize(this.kind)}</h3>
          <p>${this.description}</p>
        </div>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'color-blindness-devtool-card': Card
  }
}
