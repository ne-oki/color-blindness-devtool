import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import './color-blindness-filter'
import { ColorBlindnessFilterKind } from './color-blindness-filter'
import { destyle } from './destyle'

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

@customElement('color-blindness-devtool-card')
export class ColorBlindnessDevtoolCard extends LitElement {
  static override styles = [
    destyle,
    css`
      .color-blindness-devtool-card__root {
        width: 100%;
        background: #1e1e21;
        border: 3px solid #363639;
        border-radius: 0.25rem;
        font-size: 0.875rem;
        color: white;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .color-blindness-devtool-card__root.active {
        border: 3px solid #055de3;
      }

      .color-blindness-devtool-card__preview-filter {
        width: 100%;
        padding: 0.125rem;
      }

      .color-blindness-devtool-card__preview {
        height: 8rem;
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

      .color-blindness-devtool-card__content {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        gap: 0.125rem;
      }

      .color-blindness-devtool-card__description {
        color: #737374;
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
        class=${classMap({
          'color-blindness-devtool-card__root': true,
          active: this.active,
        })}
        @click=${this.handleClick}
      >
        <color-blindness-filter
          kind=${this.kind}
          class="color-blindness-devtool-card__preview-filter"
        >
          <div class="color-blindness-devtool-card__preview"></div>
        </color-blindness-filter>
        <div class="color-blindness-devtool-card__content">
          <h3 class="color-blindness-devtool-card__kind">
            ${capitalize(this.kind)}
          </h3>
          <p class="color-blindness-devtool-card__description">
            ${this.description}
          </p>
        </div>
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'color-blindness-devtool-card': ColorBlindnessDevtoolCard
  }
}
