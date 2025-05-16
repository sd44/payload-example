import type { Block } from 'payload'

export const WenJuan: Block = {
  slug: 'wenJuan',
  fields: [
    {
      name: 'activityId',
      type: 'text',
      label: '问卷ID',
      required: true,
    },
    {
      name: 'width',
      type: 'number',
      defaultValue: 800,
      label: '问卷宽度',
      required: true,
    },
  ],
  interfaceName: 'WenJuanBlock',
  labels: {
    plural: '问卷星模块',
    singular: '问卷星模块',
  },
}
