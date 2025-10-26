"use client"

import { motion } from "framer-motion"

export function VideoTutorialSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">使用教程</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            观看视频教程，了解如何使用 Telegram、Discord 多账号智能自动水群机器人
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/50"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/nFVLkQzLkkY?start=45"
            title="Telegram Discord 多账号智能自动水群机器人教程"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  )
}
