import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import './color-blindness-devtool-card'
import { colorBlindnessDevtoolIconHtml } from './color-blindness-devtool-icon-html'
import './color-blindness-filter'
import { ColorBlindnessFilterKind } from './color-blindness-filter'
import { destyle } from './destyle'

interface CardItem {
  kind: ColorBlindnessFilterKind
  description: string
}

const cardItems: CardItem[] = [
  { kind: 'trichromacy', description: 'Normal' },
  { kind: 'achromatomaly', description: 'Blue Cone Monochromacy' },
  { kind: 'achromatopsia', description: 'Monochromacy' },
  { kind: 'deuteranomaly', description: 'Green-Weak' },
  { kind: 'deuteranopia', description: 'Green-Blind' },
  { kind: 'protanomaly', description: 'Red-Weak' },
  { kind: 'protanopia', description: 'Red-Blind' },
  { kind: 'tritanomaly', description: 'Blue-Weak' },
  { kind: 'tritanopia', description: 'Blue-Blind' },
]

@customElement('color-blindness-devtool')
export class ColorBlindnessDevtool extends LitElement {
  private selectedKind: ColorBlindnessFilterKind = 'trichromacy'

  static override styles = [
    destyle,
    css`
      h1 {
        font-weight: 700;
        font-size: 1.25rem;
      }

      hr {
        margin: 1rem 0;
        border: 1px solid #1c1e24;
      }

      .color-blindness-devtool__root {
        position: fixed;
        bottom: 0;
        font-size: 0.875rem;
        font-weight: 400;
        font-family:
          ui-sans-serif,
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          'Helvetica Neue',
          Arial,
          'Noto Sans',
          sans-serif,
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji';
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
      }

      .color-blindness-devtool__window {
        background: #13151a;
        border: 1px solid #2d2f38;
        border-radius: 0.5rem;
        padding: 1rem;
        color: white;
        width: 48rem;
      }

      .color-blindness-devtool__window-header-left {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .color-blindness-devtool__window-list {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr;
      }
    `,
  ]

  private handleCardSelect(
    event: CustomEvent<{ kind: ColorBlindnessFilterKind }>,
  ) {
    this.selectedKind = event.detail.kind
    this.requestUpdate()
  }

  override render() {
    return html`
      <color-blindness-filter kind=${this.selectedKind}>
        <slot></slot>
      </color-blindness-filter>
      <div class="color-blindness-devtool__root">
        <div class="color-blindness-devtool__window">
          <header class="color-blindness-devtool__window-header">
            <section class="color-blindness-devtool__window-header-left">
              <div>${colorBlindnessDevtoolIconHtml}</div>
              <h1>Color Blindness DevTool</h1>
            </section>
          </header>
          <hr />
          <main>
            <ul class="color-blindness-devtool__window-list">
              ${cardItems.map(
                ({ kind, description }) => html`
                  <li>
                    <color-blindness-devtool-card
                      kind=${kind}
                      description=${description}
                      ?active=${this.selectedKind === kind}
                      @select=${this.handleCardSelect}
                    ></color-blindness-devtool-card>
                  </li>
                `,
              )}
            </ul>
          </main>
        </div>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'color-blindness-devtool': ColorBlindnessDevtool
  }
}
