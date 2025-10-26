"use client"

import { motion } from "framer-motion"
import { ExternalLink, MessageCircle, Twitter, Zap, Shield, Ticket, Megaphone, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const communityServices = [
  {
    title: "Discord社群搭建",
    icon: MessageCircle,
    description: "完整的Discord服务器架构设计与社群管理方案",
    features: [
      { icon: Target, text: "服务器架构设计" },
      { icon: Shield, text: "频道和角色配置方案" },
      { icon: Ticket, text: "社区准则与行为规范" },
      { icon: Megaphone, text: "服务器使用指南" },
    ],
    achievements: [
      { label: "社群管理", value: "完整框架" },
      { label: "安全保护", value: "隐私机制" },
      { label: "支持系统", value: "Ticket" },
      { label: "互动体系", value: "公告频道" },
    ],
    link: "加入Discord社群",
    linkUrl: "https://discord.gg/morphlayer",
    highlight: false,
  },
  {
    title: "Telegram社群运营",
    icon: MessageCircle,
    description: "专业的Telegram频道创建与日常运营管理",
    features: [
      { icon: Target, text: "官方频道创建与配置" },
      { icon: Shield, text: "社群运营规则制定" },
      { icon: Megaphone, text: "每日内容更新策划" },
      { icon: MessageCircle, text: "用户互动管理" },
    ],
    achievements: [
      { label: "频道配置", value: "专业设置" },
      { label: "规则制定", value: "完善体系" },
      { label: "内容策划", value: "每日更新" },
      { label: "互动管理", value: "高效响应" },
    ],
    link: "访问Telegram频道",
    linkUrl: "https://t.me/PulseEcoProtocol",
    highlight: false,
  },
  {
    title: "Twitter/X内容运营",
    icon: Twitter,
    description: "系统化的Twitter内容策划与发布管理",
    features: [
      { icon: Target, text: "30天完整内容日历" },
      { icon: Megaphone, text: "每日推文主题和文案" },
      { icon: Shield, text: "配图和话题标签策略" },
      { icon: MessageCircle, text: "社区互动管理" },
    ],
    contentTypes: ["项目更新", "技术解读", "社区活动", "行业观点"],
    achievements: [
      { label: "内容日历", value: "30天规划" },
      { label: "推文策略", value: "每日更新" },
      { label: "话题标签", value: "精准定位" },
      { label: "互动管理", value: "及时响应" },
    ],
    link: "访问Twitter/X",
    linkUrl: "https://x.com/MorphLayer",
    highlight: false,
  },
  {
    title: "自主研发自动化运营工具",
    icon: Zap,
    subtitle: "独家技术优势：多账号自动化社群运营系统",
    description: "行业领先的多平台自动化社群运营解决方案",
    features: [
      { icon: Zap, text: "Telegram 多账号自动聊天" },
      { icon: Zap, text: "Discord 多账号自动互动" },
      { icon: Zap, text: "智能水军活动管理" },
      { icon: Zap, text: "自动化内容发布" },
    ],
    values: [
      { icon: "💰", label: "成本优化", value: "降低90%" },
      { icon: "⚡", label: "全天运营", value: "7×24小时" },
      { icon: "🚀", label: "快速启动", value: "3天冷启" },
      { icon: "📈", label: "参与提升", value: "300%+" },
    ],
    links: [
      { text: "工具入口", url: "https://tg-bot-web-production.up.railway.app/" },
      { text: "使用教程", url: "https://youtu.be/nFVLkQzLkkY?si=IrTKN3d5Y9kL9_-p" }
    ],
    highlight: true,
  },
]

export function CommunitySection() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="gradient-text">社群建设与运营</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {communityServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`glass rounded-2xl p-8 border flex flex-col ${
                  service.highlight
                    ? "border-accent/50 ring-2 ring-accent/20 bg-gradient-to-br from-accent/5 to-primary/5"
                    : "border-primary/20"
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl ${
                      service.highlight
                        ? "bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30"
                        : "bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                    }`}
                  >
                    <service.icon className={`h-6 w-6 ${service.highlight ? "text-accent" : "text-primary"}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Subtitle for highlighted card */}
                {service.subtitle && (
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 border border-accent/30">
                    <p className="text-foreground font-bold text-center drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                      ⭐️ {service.subtitle}
                    </p>
                  </div>
                )}

                {/* Features List */}
                <div className="mb-6 space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <feature.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Content Types Tags */}
                {service.contentTypes && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold mb-3 text-foreground">内容类型</p>
                    <div className="flex flex-wrap gap-2">
                      {service.contentTypes.map((type) => (
                        <span
                          key={type}
                          className="px-3 py-1.5 rounded-full bg-secondary/20 border border-secondary/40 text-xs font-medium"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements/Values Grid */}
                <div className="mb-6 grid grid-cols-2 gap-3">
                  {(service.achievements || service.values)?.map((item: any, idx: number) => (
                    <div
                      key={idx}
                      className={`rounded-xl p-4 border ${
                        service.highlight
                          ? "bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30"
                          : "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20"
                      }`}
                    >
                      {item.icon && <div className="text-2xl mb-2">{item.icon}</div>}
                      <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-sm font-bold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="mt-auto">
                  {service.link && (
                    <a href={service.linkUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-primary/50 hover:bg-primary/10 hover:border-primary bg-transparent"
                      >
                        {service.link}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  )}

                  {service.links && (
                    <div className="flex gap-3">
                      {service.links.map((link: any) => (
                        <a
                          key={link.text}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            className="w-full border-accent/50 hover:bg-accent/10 hover:border-accent bg-transparent font-semibold"
                          >
                            {link.text}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
