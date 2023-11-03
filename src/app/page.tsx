"use client"
import Image from 'next/image';
import { Auth } from './components';


export default function Home() {
  return (
    <main className="flex flex-col h-screen min-h-screen items-center justify-between p-24">
      <Auth />
    </main>
  )
}
