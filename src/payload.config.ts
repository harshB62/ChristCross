import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { Events } from './collections/Events'
import { Responses } from './collections/Responses'
import { Users } from './collections/Users'

export default buildConfig({
  admin: { user: Users.slug, importMap: { baseDir: process.cwd() } },
  collections: [Users, Events, Responses],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'replace-this-development-secret-before-deploying-please',
  typescript: { outputFile: './src/payload-types.ts' },
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URL || 'postgres://christcross:change-this-local-password@localhost:5432/christcross' }, push: process.env.NODE_ENV !== 'production' }),
  cors: [process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'],
  csrf: [process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'],
})
