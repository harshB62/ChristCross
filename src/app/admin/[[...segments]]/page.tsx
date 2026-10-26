import config from '@/payload.config'
import '@payloadcms/next/css'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from './importMap'
import type { Metadata } from 'next'
type Args={params:Promise<{segments?:string[]}>;searchParams:Promise<{[key:string]:string|string[]|undefined}>}
export const generateMetadata=({params,searchParams}:Args):Promise<Metadata>=>generatePageMetadata({config,params,searchParams})
export default function AdminPage({params,searchParams}:Args){return RootPage({config,params,searchParams,importMap})}
