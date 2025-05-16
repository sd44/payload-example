import React from 'react'

import { Code } from './Component.client'

export type CodeBlockProps = {
  blockType: 'code'
  code: string
  language?: string
}

type Props = {
  className?: string
} & CodeBlockProps

export const CodeBlock: React.FC<Props> = ({ className, code, language }) => {
  return (
    <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>
      <Code code={code} language={language} />
    </div>
  )
}
