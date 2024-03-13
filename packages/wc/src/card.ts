import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

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
      p {
        color: var(--muted);
        font-size: 0.75rem;
      }

      button {
        width: 100%;
        background: var(--background);
        border: 2px solid var(--border);
        border-radius: 0.25rem;
        color: white;
        display: flex;
        flex-direction: column;
        overflow: hidden;
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
          rgb(255, 81, 47) 1.7%,
          rgb(255, 167, 47) 8.2%,
          rgb(218, 253, 1) 16.2%,
          rgb(98, 234, 20) 23.4%,
          rgb(69, 193, 42) 32.8%,
          rgb(7, 249, 149) 43.7%,
          rgb(6, 200, 217) 55.3%,
          rgb(18, 51, 233) 65.5%,
          rgb(122, 59, 202) 74.5%,
          rgb(231, 7, 249) 82.3%,
          rgb(202, 59, 163) 91.4%
        );
      }

      .content {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        gap: 0.25rem;
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
    return html`
      <button
        class=${classMap({ active: this.active })}
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
