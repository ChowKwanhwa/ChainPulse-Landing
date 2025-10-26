"use client"

import { motion } from "framer-motion"

const deliverables = [
  {
    category: "白皮书撰写",
    content: "15+篇完整文档",
    languages: "中英双语",
    achievement: "超过150,000字，已发布至GitBook",
  },
  {
    category: "项目简介",
    content: "One-pager精华版、网络介绍",
    languages: "中英韩三语",
    achievement: "适配不同场景的快速传播材料",
  },
  {
    category: "投资人Deck",
    content: "完整PPT演示文稿",
    languages: "多语言",
    achievement: "Google Slides在线演示",
  },
  {
    category: "视觉设计",
    content: "Logo、Banner、海报30+张",
    languages: "中英双语",
    achievement: "完整品牌视觉识别系统",
  },
  {
    category: "视频制作",
    content: "宣传片、MG动画、快闪视频",
    languages: "中文为主",
    achievement: "完整视频成品已交付",
  },
  {
    category: "社交媒体运营",
    content: "Twitter 30天推文计划",
    languages: "中英双语",
    achievement: "100+条推文策划",
  },
  {
    category: "社群运营管理",
    content: "Discord/Telegram搭建",
    languages: "多语言",
    achievement: "完整社群架构、运营SOP",
  },
  {
    category: "社群活跃维护",
    content: "自动化运营工具",
    languages: "多语言",
    achievement: "7×24小时社群维护",
  },
  {
    category: "媒体PR",
    content: "星球日报等媒体文章",
    languages: "中文为主",
    achievement: "多平台媒体曝光",
  },
  {
    category: "用户教育",
    content: "收益案例分析、基础科普",
    languages: "中文为主",
    achievement: "降低用户理解门槛",
  },
]

export function ResultsTable() {
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
            <span className="gradient-text">项目成果数据</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">内容交付统计</p>

          {/* Desktop Table */}
          <div className="hidden lg:block glass rounded-2xl overflow-hidden border border-primary/20">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-primary/20">
                  <th className="px-6 py-4 text-left font-bold">服务类别</th>
                  <th className="px-6 py-4 text-left font-bold">交付内容</th>
                  <th className="px-6 py-4 text-left font-bold">覆盖语言</th>
                  <th className="px-6 py-4 text-left font-bold">核心成果</th>
                </tr>
              </thead>
              <tbody>
                {deliverables.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{
                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                      scale: 1.01,
                    }}
                    className="border-b border-primary/10 transition-all cursor-default"
                  >
                    <td className="px-6 py-4 font-semibold">{item.category}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.content}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.languages}</td>
                    <td className="px-6 py-4 text-muted-foreground">{item.achievement}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.02,
                  y: -4,
                  boxShadow: "0 15px 30px rgba(139, 92, 246, 0.2)",
                }}
                whileTap={{ scale: 0.98 }}
                className="glass rounded-xl p-6 border border-primary/20 cursor-default transition-shadow"
              >
                <h3 className="text-lg font-bold mb-4 gradient-text">{item.category}</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-muted-foreground">交付内容：</span>
                    <p className="font-semibold">{item.content}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">覆盖语言：</span>
                    <p className="font-semibold">{item.languages}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">核心成果：</span>
                    <p className="font-semibold">{item.achievement}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
