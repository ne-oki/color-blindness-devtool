import { createComponent } from '@lit/react'
import * as React from 'react'

import {
  ColorBlindnessFilterKind,
  ColorBlindnessFilter as ColorBlindnessFilterWC,
} from 'color-blindness-devtool'

export interface ColorBlindnessFilterProps extends React.PropsWithChildren {
  kind?: ColorBlindnessFilterKind
}

export const ColorBlindnessFilter = createComponent({
  react: React,
  tagName: 'color-blindness-filter',
  elementClass: ColorBlindnessFilterWC,
  displayName: 'ColorBlindnessFilter',
}) as React.ForwardRefExoticComponent<ColorBlindnessFilterProps>
