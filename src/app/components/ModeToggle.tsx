'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"
import { BookOpen } from "lucide-react"

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return (
    <BookOpen/>
  )

  if (resolvedTheme === 'dark') {
    return <FiSun className="cursor-pointer mr-6" onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <FiMoon className="cursor-pointer mr-6" onClick={() => setTheme('dark')} />
  }

}