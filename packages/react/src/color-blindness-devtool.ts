import { createComponent } from '@lit/react'
import * as React from 'react'

import { ColorBlindnessDevtool as ColorBlindnessDevtoolWC } from 'color-blindness-devtool'

export interface ColorBlindnessDevtoolProps extends React.PropsWithChildren {}

export const ColorBlindnessDevtool = createComponent({
  react: React,
  tagName: 'color-blindness-devtool',
  elementClass: ColorBlindnessDevtoolWC,
  displayName: 'ColorBlindnessDevtool',
}) as React.ForwardRefExoticComponent<ColorBlindnessDevtoolProps>
