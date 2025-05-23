import type { Block } from 'payload'

export const Code: Block = {
  slug: 'code',
  fields: [
    {
      name: 'language',
      type: 'select',
      defaultValue: 'typescript',
      options: [
        {
          label: 'Typescript',
          value: 'typescript',
        },
        {
          label: 'Javascript',
          value: 'javascript',
        },
        {
          label: 'CSS',
          value: 'css',
        },
      ],
    },
    {
      name: 'code',
      type: 'code',
      label: false,
      required: true,
    },
  ],
  interfaceName: 'CodeBlock',
  labels: {
    plural: '代码块',
    singular: '代码块',
  },
}
