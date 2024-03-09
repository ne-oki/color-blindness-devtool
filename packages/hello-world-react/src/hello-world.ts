import { createComponent } from '@lit/react'
import * as React from 'react'

import { HelloWorld as HelloWorldWC } from '@web-components-monorepo-starter/hello-world'

export const HelloWorld = createComponent({
  react: React,
  tagName: 'hello-world',
  elementClass: HelloWorldWC,
  displayName: 'HellWorld',
})
