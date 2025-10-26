"use client"

import { motion } from "framer-motion"
import { Trophy, Globe, Zap } from "lucide-react"

const advantages = [
  {
    icon: Trophy,
    title: "独家技术优势",
    description: "自主研发自动化运营工具，技术+内容双重赋能",
  },
  {
    icon: Globe,
    title: "全球化服务",
    description: "中英韩三语，覆盖全球Web3市场",
  },
  {
    icon: Zap,
    title: "全栈服务能力",
    description: "内容+设计+视频+运营一站式解决",
  },
]

export function AdvantagesSection() {
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
            <span className="gradient-text">核心优势</span>
          </h2>
          <p className="text-muted-foreground text-lg">为什么选择链动资本</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="text-center cursor-pointer"
            >
              <motion.div
                className="mb-6 inline-block p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                whileHover={{
                  borderColor: "rgba(139, 92, 246, 0.5)",
                  boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                  rotate: [0, -5, 5, 0],
                }}
                transition={{ duration: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.6 }}>
                  <advantage.icon className="h-12 w-12 text-primary" />
                </motion.div>
              </motion.div>

              <motion.h3 className="text-2xl font-bold mb-3 text-foreground" whileHover={{ scale: 1.05 }}>
                {advantage.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground text-lg"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {advantage.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
