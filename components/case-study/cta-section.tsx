"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CaseStudyCTA() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" />
          <div className="relative glass border border-primary/30 p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">受到ECO Protocol案例的启发？</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              让链动资本为您的Web3项目提供专业服务
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6 pulse-glow"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                立即咨询
              </Button>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 hover:border-primary text-lg px-8 py-6 bg-transparent"
                >
                  查看更多案例
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
