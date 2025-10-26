"use client"

import { motion } from "framer-motion"
import { BookOpen, Palette, Video, Users, Bot, Newspaper } from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "品牌内容创作",
    items: ["白皮书撰写", "投资人Deck"],
    link: "https://eco-protocol.gitbook.io/eco-protocol",
  },
  {
    icon: Palette,
    title: "视觉设计服务",
    items: ["Logo & 品牌设计", "海报 & 物料设计"],
    link: "https://drive.google.com/drive/folders/1ysTzNrqId2SLumYYot4vUacSSceGZ9He?usp=sharing",
  },
  {
    icon: Video,
    title: "视频内容制作",
    items: ["宣传片 & MG动画", "快闪短视频"],
    link: "https://drive.google.com/drive/folders/1aBlS9v8OtSs9F7Fag_bvp36n9d88C8Aj?usp=drive_link",
  },
  {
    icon: Users,
    title: "社群建设运营",
    items: ["Discord & Telegram", "Twitter内容运营"],
    link: "https://discord.gg/morphlayer",
  },
  {
    icon: Bot,
    title: "自动化运营工具",
    items: ["多账号智能水军", "7×24小时运营"],
    link: "https://tg-bot-web-production.up.railway.app/",
  },
  {
    icon: Newspaper,
    title: "媒体PR推广",
    items: ["行业媒体投稿", "品牌曝光传播"],
    link: "https://www.odaily.news/zh-CN/newsflash/453674",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">核心服务</span>
          </h2>
          <p className="text-muted-foreground text-lg">全方位Web3品牌服务解决方案</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a key={index} href={service.link} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-xl p-6 border-primary/20 hover:border-primary/50 transition-all duration-300 group cursor-pointer text-center md:text-left"
              >
              <motion.div
                className="mb-4 inline-block p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:glow-primary transition-all"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="h-8 w-8 text-primary" />
              </motion.div>

              <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>

              <ul className="space-y-2 flex flex-col items-center md:items-start">
                {service.items.map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-muted-foreground flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + i * 0.1 }}
                  >
                    <motion.span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" whileHover={{ scale: 1.5 }} />
                    {item}
                  </motion.li>
                ))}
              </ul>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
