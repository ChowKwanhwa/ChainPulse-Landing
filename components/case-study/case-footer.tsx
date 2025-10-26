"use client"

import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

export function CaseFooter() {
  return (
    <footer className="py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            返回首页
          </Link>

          <div className="text-center">
            <p className="text-muted-foreground">链动资本 ChainPulse Capital © 2025</p>
          </div>

          <a
            href="https://t.me/kowliep"
            className="text-muted-foreground hover:text-secondary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
