# @color-blindness-devtool/react

A React component for simulating color blindness in web application development.

## Installation

```bash
npm install @color-blindness-devtool/react
```

## Usage

Import the `ColorBlindnessDevtool` component and wrap your application with it.

<!-- prettier-ignore -->
```jsx
import { ColorBlindnessDevtool } from '@color-blindness-devtool/react'

function App() {
  return (
    <ColorBlindnessDevtool>
      {/* Your application here */}
    </ColorBlindnessDevtool>
  )
}
```

<!-- prettier-ignore-end -->

### Disable the DevTool

You can disable the devtool by setting the `disabled` prop to `true`.

This is particularly useful for disabling the simulation in production environments:

```tsx
<ColorBlindnessDevTool disabled={process.env.NODE_ENV === 'production'} />
```
