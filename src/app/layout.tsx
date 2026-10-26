import type { Metadata } from 'next'
import './globals.css'
import { CrossMark } from '@/components/CrossMark'
export const metadata: Metadata = { title: 'ChristCross — Gather. Grow. Go.', description: 'Interactive Bible studies, church events, quizzes and live polls.' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><header className="topbar"><a className="brand" href="/"><CrossMark/><span>christ<span className="gold-text">cross</span><small>GATHER · GROW · GO</small></span></a><nav><a href="/">Dashboard</a><a href="/create">Create event</a><a href="/join">Join event</a><a className="nav-cta" href="/admin">CMS Admin ↗</a></nav></header>{children}<footer><div className="footer-brand"><CrossMark/> ChristCross</div><span>Make every gathering meaningful.</span><span>Built for faith communities ✦</span></footer></body></html>
}
