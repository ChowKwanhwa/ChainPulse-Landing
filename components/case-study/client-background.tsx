"use client"

import { motion } from "framer-motion"

const challenges = [
  {
    emoji: "🔬",
    title: "技术复杂度高",
    description: "AI+环保+区块链+RWA的复合概念需要专业化表达",
  },
  {
    emoji: "🌍",
    title: "多语言市场",
    description: "需要同时覆盖中文、英文、韩文市场",
  },
  {
    emoji: "🎯",
    title: "品牌从零开始",
    description: "新项目缺乏市场认知度和品牌资产",
  },
  {
    emoji: "👥",
    title: "社群冷启动",
    description: "需要快速建立活跃的Web3社群",
  },
  {
    emoji: "📚",
    title: "内容体系庞大",
    description: "涉及白皮书、宣传材料、社交媒体、视频等多维度内容",
  },
]

export function ClientBackground() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">客户背景与需求</span>
          </h2>

          <motion.div
            className="glass rounded-2xl p-8 border border-primary/20 mb-12"
            whileHover={{
              scale: 1.01,
              boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold mb-4">客户简介</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ECO Protocol 基于韩国EcoMagic
              EVR2.0专利技术（专利号：10-2015085），致力于通过区块链和AI技术解决VOCs治理难题。项目拥有50台已部署运营的实体设备，总价值超过$2,250,000
              USDT。
            </p>
          </motion.div>

          <h3 className="text-2xl font-bold mb-8">核心挑战</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-xl p-6 border border-primary/20 cursor-default transition-shadow"
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {challenge.emoji}
                </motion.div>
                <h4 className="text-xl font-bold mb-2">{challenge.title}</h4>
                <p className="text-muted-foreground">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
