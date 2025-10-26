"use client"

import { motion } from "framer-motion"
import { Mail, Send, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-12 md:p-16 text-center border-primary/20 relative overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              <span className="gradient-text">开启您的Web3品牌之旅</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto text-balance">
              立即联系我们，获取定制化服务方案
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
              <motion.a
                href="https://t.me/kowliep"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors cursor-pointer"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Send className="h-5 w-5 text-primary" />
                </motion.div>
                <span>Telegram: @kowliep</span>
              </motion.a>

              <div className="hidden md:block w-px h-6 bg-border" />

              <motion.div
                className="flex items-center gap-3 text-foreground"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Mail className="h-5 w-5 text-secondary" />
                </motion.div>
                <span>business@chainpulse.dev</span>
              </motion.div>

              <div className="hidden md:block w-px h-6 bg-border" />

              <motion.div
                className="flex items-center gap-3 text-foreground"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                  <Globe className="h-5 w-5 text-accent" />
                </motion.div>
                <span>chainpulse.dev</span>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="pulse-glow bg-gradient-to-r from-primary to-secondary text-lg px-12 py-6 transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
              >
                立即咨询
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
