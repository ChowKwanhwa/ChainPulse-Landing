"use client"

import { motion } from "framer-motion"

const impacts = [
  {
    title: "品牌建设成果",
    items: [
      {
        subtitle: "✅ 品牌认知度提升",
        points: ["完整的品牌视觉识别系统", "统一的多语言品牌话术", "专业的白皮书内容体系"],
      },
      {
        subtitle: "✅ 内容资产积累",
        points: ["150,000+字专业内容", "100+设计素材", "3部完整视频作品", "多维度内容矩阵"],
      },
    ],
  },
  {
    title: "社群运营成果",
    items: [
      {
        subtitle: "📈 社群增长（预期目标）",
        points: ["Discord社群: 目标5,000+成员", "Telegram频道: 目标10,000+订阅", "Twitter关注: 目标20,000+粉丝"],
      },
      {
        subtitle: "🎯 社群活跃度",
        points: ["完善的社群管理框架", "清晰的互动规则", "持续的内容更新机制"],
      },
    ],
  },
  {
    title: "市场推广成果",
    items: [
      {
        subtitle: "🌍 市场覆盖",
        points: ["中国市场: 完整中文内容体系", "英语市场: 专业英文白皮书", "韩国市场: 本地化内容支持"],
      },
      {
        subtitle: "📢 媒体曝光",
        points: ["区块链垂直媒体报道", "环保科技领域关注", "Web3社区广泛传播"],
      },
    ],
  },
]

export function ImpactSection() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="gradient-text">实际效果与影响</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 border border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">{impact.title}</h3>
                <div className="space-y-6">
                  {impact.items.map((item, idx) => (
                    <div key={idx}>
                      <h4 className="text-lg font-semibold mb-3">{item.subtitle}</h4>
                      <ul className="space-y-2">
                        {item.points.map((point, pidx) => (
                          <li key={pidx} className="text-muted-foreground text-sm flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
