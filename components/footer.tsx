"use client"

import { Send } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/50 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ChainPulse Capital Logo"
              width={40}
              height={40}
              className="drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]"
            />
            <div className="text-muted-foreground text-sm">链动资本 ChainPulse Capital © 2025</div>
          </div>

          <div className="text-muted-foreground text-sm text-center">专业的Web3品牌内容与社群运营服务提供商</div>

          <a 
            href="https://t.me/kowliep" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-secondary transition-colors" 
            aria-label="Telegram"
          >
            <Send className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
