/* --
 * DO NOT DELETE THIS FILE
 * EcuCommonDecorator.tsx is used to decorate any Ecu component
-- */
import '../index.css'

import { ReactNode } from 'react'

type EcuCommonDecoratorPropsType = {
  children: ReactNode
}

function EcuCommonDecorator({ children }: EcuCommonDecoratorPropsType) {
  return children
}

export default EcuCommonDecorator
