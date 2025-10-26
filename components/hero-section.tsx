"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute top-8 left-8 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05, rotate: 5 }}
      >
        <Image
          src="/logo.png"
          alt="ChainPulse Capital Logo"
          width={120}
          height={120}
          className="drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
        />
      </motion.div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="animated-grid absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-secondary/30 rounded-full blur-3xl" />

      {/* Floating 3D Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/50 rounded-lg"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 border-2 border-secondary/50 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="gradient-text inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              链动资本
            </motion.span>
            <br />
            <motion.span
              className="text-4xl md:text-5xl text-foreground/90 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              ChainPulse Capital
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            专业的Web3品牌内容与社群运营服务商
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            让每一个Web3项目都能成功触达全球用户
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="pulse-glow bg-gradient-to-r from-primary to-secondary text-lg px-8 py-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
            >
              立即咨询
              <motion.div
                className="inline-block ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
