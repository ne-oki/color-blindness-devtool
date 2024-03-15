import { css } from 'lit'

export const resetStyles = css`
  :host {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
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
  }
  main {
    display: block;
  }
  p {
    margin: 0;
  }
  h3 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    border-top-width: 1px;
    margin: 0;
    clear: both;
    color: inherit;
  }
  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }
  button {
    -webkit-appearance: none;
    appearance: none;
    vertical-align: middle;
    color: inherit;
    font: inherit;
    background: transparent;
    padding: 0;
    margin: 0;
    border-radius: 0;
    text-align: inherit;
    text-transform: inherit;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    cursor: pointer;
  }
  button:disabled,
  [type='button']:disabled,
  [type='reset']:disabled,
  [type='submit']:disabled {
    cursor: default;
  }
`
