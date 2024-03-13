import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import packageJson from '../package.json'
import './card'
import './chevron-up-icon'
import './color-blindness-filter'
import { ColorBlindnessFilterKind } from './color-blindness-filter'
import './github-icon'
import './logo-icon'
import { resetStyles } from './reset-styles'

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
    resetStyles,
    css`
      :host {
        --background: #13151a;
        --border: #2d2f38;
        --accent: #055de3;
        --rule: #1c1e24;
        --muted: #bfc1c9;
      }

      h1 {
        font-weight: 700;
        font-size: 1.25rem;
      }

      ul {
        display: grid;
        gap: 0.5rem;
        grid-template-columns: 1fr 1fr 1fr;
      }

      hr {
        margin: 1rem 0;
        border: 1px solid var(--rule);
      }

      button {
        position: absolute;
        width: 4.5rem;
        height: 2.25rem;
        left: 50%;
        transform: translateX(-50%);
        top: calc(-2.25rem + 1px);
        background: var(--background);
        border: 1px solid var(--border);
        border-bottom: none;
        border-radius: 50% / 100% 100% 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
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

      .root {
        position: fixed;
        bottom: 0;
        left: 50%;
        z-index: calc(infinity);
        transform: translateX(-50%) translateY(100%);
        transition: transform 0.35s;
        animation-fill-mode: forwards;
      }

      .root[data-state='open'] {
        transform: translateX(-50%) translateY(-1rem);
        animation: overshoot 0.45s ease-in-out;
      }

      color-blindness-devtool-chevron-up-icon {
        color: var(--muted);
        transform: translateY(0.3rem);
        transition: transform 0.35s;
      }

      color-blindness-devtool-chevron-up-icon::part(icon) {
        width: 1.5rem;
        height: 1.5rem;
      }

      .root[data-state='open'] color-blindness-devtool-chevron-up-icon {
        transform: translateY(0.3rem) rotate(180deg);
      }

      .window {
        background: var(--background);
        border: 1px solid var(--border);
        border-radius: 0.5rem;
        padding: 1rem;
        color: white;
        width: 40rem;
      }

      header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      header > a {
        margin-left: auto;
      }

      .version {
        color: var(--muted);
        font-size: 0.875rem;
        font-family:
          ui-monospace,
          SFMono-Regular,
          Menlo,
          Monaco,
          Consolas,
          Liberation Mono,
          Courier New,
          monospace;
      }

      color-blindness-devtool-logo-icon,
      color-blindness-devtool-github-icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      color-blindness-devtool-github-icon {
        color: var(--muted);
      }

      color-blindness-devtool-github-icon:hover {
        color: white;
      }
    `,
  ]

  private handleWindowClick = (event: MouseEvent) => {
    if (
      this.isOpen &&
      event.target instanceof HTMLElement &&
      !event.target.closest('color-blindness-devtool')
    ) {
      this.isOpen = false
      this.requestUpdate()
    }
  }

  override connectedCallback() {
    super.connectedCallback()
    window.addEventListener('click', this.handleWindowClick)
  }

  override disconnectedCallback() {
    super.disconnectedCallback()
    window.removeEventListener('click', this.handleWindowClick)
  }

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
      <div class="root" data-state=${this.isOpen ? 'open' : 'closed'}>
        <button @click=${this.handleToggleButtonClick}>
          <color-blindness-devtool-chevron-up-icon></color-blindness-devtool-chevron-up-icon>
        </button>
        <div class="window">
          <header>
            <color-blindness-devtool-logo-icon></color-blindness-devtool-logo-icon>
            <h1 class="title">Color Blindness DevTool</h1>
            <span class="version">${packageJson.version}</span>
            <a
              href="https://github.com/neokidev/color-blindness-devtool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <color-blindness-devtool-github-icon></color-blindness-devtool-github-icon>
            </a>
          </header>
          <hr />
          <main>
            <ul>
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
