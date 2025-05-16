import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  interfaceName: 'MediaBlock',
  labels: {
    plural: '媒体',
    singular: '媒体',
  },
}
