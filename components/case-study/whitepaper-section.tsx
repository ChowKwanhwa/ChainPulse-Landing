"use client"

import { motion } from "framer-motion"
import { ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const chineseWhitepapers = [
  { title: "项目背景 - 市场痛点与解决方案", url: "https://eco-protocol.gitbook.io/eco-protocol/bai-pi-shu/xiang-mu-bei-jing" },
  { title: "产品特性 - 四大技术支柱详解", url: "https://eco-protocol.gitbook.io/eco-protocol/bai-pi-shu/chan-pin-te-xing" },
  { title: "商业模型 - 收入来源与盈利模式", url: "https://eco-protocol.gitbook.io/eco-protocol/bai-pi-shu/shang-ye-mo-xing" },
  { title: "代币经济学 - ECO代币分配与经济模型", url: "https://eco-protocol.gitbook.io/eco-protocol/bai-pi-shu/dai-bi-jing-ji-xue" },
  { title: "矿机与算力运行机制 - 智能矿机系统详解", url: "https://eco-protocol.gitbook.io/eco-protocol/bai-pi-shu/kuang-ji-yu-suan-li-yun-hang-ji-zhi" },
  { title: "收益案例分析 - 实际收益计算案例", url: "https://eco-protocol.gitbook.io/eco-protocol/bai-pi-shu/shou-yi-an-li-fen-xi" },
  { title: "技术概述 - AI+区块链技术架构", url: "https://eco-protocol.gitbook.io/eco-protocol/bai-pi-shu/ji-shu-gai-shu" },
  { title: "团队简介 - 核心团队与顾问", url: "https://eco-protocol.gitbook.io/eco-protocol/bai-pi-shu/tuan-dui-jian-jie" },
  { title: "发展路线图 - 2025-2028四阶段发展计划", url: "https://eco-protocol.gitbook.io/eco-protocol/bai-pi-shu/fa-zhan-lu-xian-tu" },
]

const englishWhitepapers = [
  { title: "Project Background", url: "https://eco-protocol.gitbook.io/eco-protocol/whitepaper/project_background" },
  { title: "Product Features", url: "https://eco-protocol.gitbook.io/eco-protocol/whitepaper/product_features" },
  { title: "Business Model", url: "https://eco-protocol.gitbook.io/eco-protocol/whitepaper/business_model" },
  { title: "Tokenomics", url: "https://eco-protocol.gitbook.io/eco-protocol/whitepaper/tokenomics" },
  { title: "Mining Mechanism", url: "https://eco-protocol.gitbook.io/eco-protocol/whitepaper/mining_mechanism" },
  { title: "Revenue Case Analysis", url: "https://eco-protocol.gitbook.io/eco-protocol/whitepaper/revenue_case_analysis" },
]

const keyAchievements = [
  { icon: "📝", text: "15+份核心文档，总计超过150,000字内容" },
  { icon: "🌐", text: "中英双语完整白皮书体系" },
  { icon: "💡", text: "创新性AI算力补偿机制设计" },
  { icon: "📊", text: "完整的RWA资产代币化框架" },
]

export function WhitepaperSection() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="gradient-text">核心内容创作 - 白皮书撰写</span>
          </h2>

          <div className="glass rounded-2xl p-8 border border-primary/20 mb-8">
            <h3 className="text-2xl font-bold mb-6">服务范围</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                "完整技术白皮书撰写",
                "商业模式深度解析",
                "代币经济学设计文档",
                "产品特性说明",
                "发展路线图规划",
                "挖矿机制详解",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-primary">中文白皮书系列（9篇）</h4>
                <ul className="space-y-3">
                  {chineseWhitepapers.map((paper, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-secondary cursor-pointer transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {paper.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 text-foreground drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
                  英文白皮书系列（6篇）
                </h4>
                <ul className="space-y-3">
                  {englishWhitepapers.map((paper, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-muted-foreground hover:text-secondary cursor-pointer transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <a href={paper.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {paper.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {keyAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-4 border border-primary/30"
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <p className="text-sm">{achievement.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <a href="https://eco-protocol.gitbook.io/eco-protocol/" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary">
                  访问完整白皮书
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
