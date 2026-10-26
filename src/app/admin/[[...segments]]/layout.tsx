import config from '@/payload.config'
import { RootLayout } from '@payloadcms/next/layouts'
import { importMap } from './importMap'
export default function AdminLayout({children}:{children:React.ReactNode}){return RootLayout({children,config,importMap})}
