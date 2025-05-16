import type { PayloadRequest } from 'payload'

import { defaultLexical } from '@/fields/defaultLexical'
import { addMyZh } from '@/i18n/myzh'
// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
// import { resendAdapter } from '@payloadcms/email-resend'
// import { nodemailerAdapter } from '@payloadcms/email-nodemailer'
import { zh } from '@payloadcms/translations/languages/zh'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp' // sharp-import
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Comments } from './collections/Comments'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { Footer } from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    meta: {
      title: '丽心心理咨询管理面板',
      description: '',
      icons: [
        {
          rel: 'icon',
          type: 'image/jpg',
          url: '/favicon.jpg',
        },
      ],
    },
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    dateFormat: 'yyyy-MM-dd HH:mm',
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      breakpoints: [
        {
          name: 'mobile',
          height: 667,
          label: 'Mobile',
          width: 375,
        },
        {
          name: 'tablet',
          height: 1024,
          label: 'Tablet',
          width: 768,
        },
        {
          name: 'desktop',
          height: 900,
          label: 'Desktop',
          width: 1440,
        },
      ],
    },
    user: Users.slug,
  },
  // This config helps us configure global or default features that the other editors can inherit
  collections: [Pages, Posts, Media, Categories, Users, Comments],
  cors: [getServerSideURL()].filter(Boolean),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  editor: defaultLexical,
  // If your Collection is only ever meant to contain a single Document, consider using a Global instead.
  globals: [Header, Footer],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  secret: process.env.PAYLOAD_SECRET,
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) {
          return true
        }

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // admin UI Internationalization configuration
  i18n: {
    supportedLanguages: { zh },
    translations: {
      zh: addMyZh,
    },
  },
  localization: {
    defaultLocale: 'zh-CN', // required
    locales: ['zh-CN'], // required
  },
  // email: nodemailerAdapter({
  //   defaultFromAddress: 'sd44sd44@yeah.net',
  //   defaultFromName: '丽丽诊所',
  //   // Nodemailer transportOptions
  //   transportOptions: {
  //     host: process.env.SMTP_HOST,
  //     secure: true,
  //     port: 465,
  //     auth: {
  //       user: process.env.SMTP_USER,
  //       pass: process.env.SMTP_PASS,
  //     },
  //   },
  // }),
  // email: resendAdapter({
  //   apiKey: process.env.RESEND_API_KEY || '',
  //   defaultFromAddress: 'sd44sd44@yeah.net',
  //   defaultFromName: '丽丽的诊所',
  // }),
})
