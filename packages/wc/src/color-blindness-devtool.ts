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
  private isOpen = false

  static override styles = [
    destyle,
    css`
      h1 {
        font-weight: 700;
        font-size: 1.25rem;
      }

      hr {
        margin: 1.5rem 0;
        border: 1px solid #1c1e24;
      }

      @keyframes overshoot {
        0% {
          transform: translateX(-50%) translateY(100%);
        }
        70% {
          transform: translateX(-50%) translateY(-2rem);
        }
        100% {
          transform: translateX(-50%) translateY(-1rem);
        }
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
        z-index: calc(infinity);
        transform: translateX(-50%) translateY(100%);
        transition: transform 0.35s;
        animation-fill-mode: forwards;
      }

      .color-blindness-devtool__root[data-state='open'] {
        transform: translateX(-50%) translateY(-1rem);
        animation: overshoot 0.45s ease-in-out;
      }

      .color-blindness-devtool__toggle-button {
        position: absolute;
        width: 5rem;
        height: 2.5rem;
        left: 50%;
        transform: translateX(-50%);
        top: calc(-2.5rem + 1px);
        background: #13151a;
        border: 1px solid #2d2f38;
        border-bottom: none;
        border-radius: 50% / 100% 100% 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .color-blindness-devtool__toggle-button-icon {
        color: #bfc1c9;
        width: 2rem;
        height: 2rem;
        transform: translateY(0.3rem);
        transition: transform 0.35s;
      }

      .color-blindness-devtool__root[data-state='open']
        .color-blindness-devtool__toggle-button-icon {
        transform: translateY(0.3rem) rotate(180deg);
      }

      .color-blindness-devtool__window {
        background: #13151a;
        border: 1px solid #2d2f38;
        border-radius: 0.5rem;
        padding: 1.5rem;
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

  private handleToggleButtonClick() {
    this.isOpen = !this.isOpen
    this.requestUpdate()
  }

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
      <div
        class="color-blindness-devtool__root"
        data-state=${this.isOpen ? 'open' : 'closed'}
      >
        <button
          class="color-blindness-devtool__toggle-button"
          @click=${this.handleToggleButtonClick}
        >
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
            class="color-blindness-devtool__toggle-button-icon"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
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
