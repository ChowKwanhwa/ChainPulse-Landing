"use client"

import { motion } from "framer-motion"
import { ExternalLink, ImageIcon, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const tabs = [
  { id: "posters", label: "海报设计", icon: ImageIcon },
  { id: "banners", label: "易拉宝设计", icon: ImageIcon },
  { id: "videos", label: "视频内容", icon: Video },
]

const posterFeatures = [
  { icon: "🎨", text: "深色科技风 + 绿色环保元素" },
  { icon: "💎", text: "3D视觉效果" },
  { icon: "🌿", text: "热带植物装饰融入环保理念" },
  { icon: "⚡", text: "未来感科技线条和光效" },
  { icon: "📊", text: "信息图表化，数据可视化" },
]

const videoContent = [
  { title: "ECO宣传视频", duration: "3分钟完整版" },
  { title: "ECO MG动画", duration: "5分钟专业动画" },
  { title: "ECO快闪视频", duration: "短视频版本" },
  { title: "完整脚本与分镜头设计", duration: "专业制作流程" },
]

export function DesignVideoSection() {
  const [activeTab, setActiveTab] = useState("posters")

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
            <span className="gradient-text">视觉设计与多媒体内容</span>
          </h2>

          <div className="glass rounded-2xl p-8 border border-primary/20">
            <div className="flex flex-wrap gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-primary to-secondary text-white"
                      : "glass hover:bg-primary/10"
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  {tab.label}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === "posters" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">海报设计系列</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="glass rounded-xl p-6 border border-primary/20">
                      <h4 className="text-lg font-bold mb-2">代币经济系列</h4>
                      <p className="text-muted-foreground text-sm">展示ECO代币分配、经济模型和价值流转</p>
                    </div>
                    <div className="glass rounded-xl p-6 border border-secondary/20">
                      <h4 className="text-lg font-bold mb-2">AI环保主题系列</h4>
                      <p className="text-muted-foreground text-sm">突出AI技术与环保设备的结合</p>
                    </div>
                    <div className="glass rounded-xl p-6 border border-accent/20">
                      <h4 className="text-lg font-bold mb-2">其他系列</h4>
                      <p className="text-muted-foreground text-sm">矿机档位、收益案例、路线图、RWA流程图</p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold mb-4">设计特色</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {posterFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20"
                      >
                        <div className="text-2xl mb-2">{feature.icon}</div>
                        <p className="text-sm">{feature.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "banners" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">易拉宝设计</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="glass rounded-xl p-6 border border-primary/20">
                      <h4 className="text-lg font-bold mb-2">挖矿机制与收益主题</h4>
                      <p className="text-muted-foreground text-sm">详细展示矿机运作原理和收益计算</p>
                    </div>
                    <div className="glass rounded-xl p-6 border border-secondary/20">
                      <h4 className="text-lg font-bold mb-2">技术架构展示</h4>
                      <p className="text-muted-foreground text-sm">AI+区块链+RWA技术栈可视化</p>
                    </div>
                    <div className="glass rounded-xl p-6 border border-accent/20">
                      <h4 className="text-lg font-bold mb-2">合作伙伴展示</h4>
                      <p className="text-muted-foreground text-sm">生态合作伙伴和战略联盟</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "videos" && (
                <div>
                  <h3 className="text-2xl font-bold mb-6">视频内容制作</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {videoContent.map((video, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="glass rounded-xl p-6 border border-primary/20"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-bold">{video.title}</h4>
                          <Video className="h-5 w-5 text-primary" />
                        </div>
                        <p className="text-muted-foreground text-sm">{video.duration}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="glass rounded-xl p-6 border border-secondary/20 mb-8">
                    <h4 className="text-lg font-bold mb-4">应用渠道</h4>
                    <div className="flex flex-wrap gap-3">
                      {["YouTube", "Twitter/X", "Telegram", "线下活动"].map((channel) => (
                        <span
                          key={channel}
                          className="px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-sm"
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a href="https://drive.google.com/drive/folders/1ysTzNrqId2SLumYYot4vUacSSceGZ9He?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary">
                  查看设计作品集
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="https://drive.google.com/drive/folders/1aBlS9v8OtSs9F7Fag_bvp36n9d88C8Aj?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-secondary/50 hover:bg-secondary/10 hover:border-secondary bg-transparent"
                >
                  查看视频作品集
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
