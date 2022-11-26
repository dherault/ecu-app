/* --
 * DO NOT DELETE THIS FILE
 * EcuCommonDecorator.tsx is used to decorate any Ecu component
-- */
import { ReactNode, useEffect } from 'react'

import indexCss from '../index.css?inline'

type EcuCommonDecoratorPropsType = {
  head?: HTMLHeadElement
  children: ReactNode
}

function EcuCommonDecorator({ children, head }: EcuCommonDecoratorPropsType) {

  useEffect(() => {
    if (!head) return

    const style = document.createElement('style')

    style.innerHTML = indexCss

    head.appendChild(style)
  }, [head])

  return children
}

export default EcuCommonDecorator
