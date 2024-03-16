import { css } from 'lit'

export const resetStyles = css`
  :host {
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
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.15;
    text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  main {
    display: block;
  }

  p {
    margin: 0;
  }

  h3 {
    margin: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    margin: 0;
    overflow: visible;
    clear: both;
    color: inherit;
    border-top-width: 1px;
  }

  a {
    color: inherit;
    text-decoration: none;
    background-color: transparent;
  }

  button {
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    text-align: inherit;
    text-transform: inherit;
    vertical-align: middle;
    appearance: none;
    background: transparent;
    border-radius: 0;
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
