import { CollectionConfig } from 'payload'
import { authenticatedOrPublished } from '../access/authenticatedOrPublished'
import { authenticated } from '../access/authenticated'

export const Comments: CollectionConfig = {
  slug: 'comments',
  admin: {
    defaultColumns: ['content', 'author', 'post', 'isApproved', 'createdAt'],
    description: '用户文章留言板',
  },
  access: {
    read: authenticatedOrPublished,
    create: () => true,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Comment',
      validate: (value: string | undefined | null) => {
        if (!value || value.length > 2000) return '留言最多1000字'
        return true
      },
    },
    {
      name: 'author',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          maxLength: 100,
        },
        {
          name: 'email',
          type: 'email',
          required: false,
        },
      ],
    },
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'posts',
      required: true,
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'isApproved',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Comments must be approved before they appear publicly',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData.isApproved && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
  ],
  timestamps: true,
}
