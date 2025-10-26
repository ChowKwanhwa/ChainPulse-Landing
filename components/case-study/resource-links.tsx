"use client"

import { motion } from "framer-motion"
import { ExternalLink, FileText, ImageIcon, Video, Presentation, Users, Bot } from "lucide-react"

const resources = [
  {
    icon: FileText,
    title: "在线文档平台",
    items: [
      { text: "GitBook白皮书", url: "https://eco-protocol.gitbook.io/eco-protocol/" },
      { text: "GitBook一页简介", url: "https://eco-protocol.gitbook.io/eco-protocol/one-pager" }
    ],
  },
  {
    icon: ImageIcon,
    title: "设计作品集",
    items: [
      { text: "Google Drive设计素材库", url: "https://drive.google.com/drive/folders/1ysTzNrqId2SLumYYot4vUacSSceGZ9He?usp=sharing" },
      { text: "30+件海报、易拉宝、Logo等", url: "https://drive.google.com/drive/folders/1ysTzNrqId2SLumYYot4vUacSSceGZ9He?usp=sharing" }
    ],
  },
  {
    icon: Video,
    title: "视频作品集",
    items: [
      { text: "Google Drive视频库", url: "https://drive.google.com/drive/folders/1aBlS9v8OtSs9F7Fag_bvp36n9d88C8Aj?usp=drive_link" },
      { text: "宣传视频、MG动画、快闪视频", url: "https://drive.google.com/drive/folders/1aBlS9v8OtSs9F7Fag_bvp36n9d88C8Aj?usp=drive_link" }
    ],
  },
  {
    icon: Presentation,
    title: "演示文稿",
    items: [
      { text: "Google Slides投资人Deck", url: "https://docs.google.com/presentation/d/1Z12RAFuI-jvRyz2dPdpUoceUR4dRkpHV/edit?usp=sharing&ouid=106292972971103367540&rtpof=true&sd=true" },
      { text: "多语言路演材料", url: "https://docs.google.com/presentation/d/1Z12RAFuI-jvRyz2dPdpUoceUR4dRkpHV/edit?usp=sharing&ouid=106292972971103367540&rtpof=true&sd=true" }
    ],
  },
  {
    icon: Users,
    title: "社群平台",
    items: [
      { text: "Discord服务器", url: "https://discord.gg/morphlayer" },
      { text: "Telegram官方频道", url: "https://t.me/PulseEcoProtocol" },
      { text: "Twitter/X", url: "https://x.com/MorphLayer" }
    ],
  },
  {
    icon: Bot,
    title: "自主研发工具",
    items: [
      { text: "多账号自动化运营工具", url: "https://tg-bot-web-production.up.railway.app/" },
      { text: "使用教程视频", url: "https://youtu.be/nFVLkQzLkkY?si=IrTKN3d5Y9kL9_-p" }
    ],
  },
]

export function ResourceLinks() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">在线资源汇总</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">所有交付成果在线访问</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-2xl p-6 border border-primary/20 cursor-pointer"
              >
                <resource.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-4">{resource.title}</h3>
                <ul className="space-y-2">
                  {resource.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors group"
                      >
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        <span className="text-sm">{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
