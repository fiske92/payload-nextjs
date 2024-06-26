import path from 'path'

import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

export default buildConfig({
  serverURL: 'http://localhost:4000',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    Pages,
    Media
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [], db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  })
})
