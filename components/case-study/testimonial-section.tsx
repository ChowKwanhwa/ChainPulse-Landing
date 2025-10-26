"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function TestimonialSection() {
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
            <span className="gradient-text">客户评价</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto glass rounded-2xl p-12 border-2 border-primary/30 glow-primary relative"
          >
            <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/20" />
            <Quote className="absolute bottom-8 right-8 h-12 w-12 text-primary/20 rotate-180" />

            <p className="text-lg md:text-xl leading-relaxed text-center mb-8 relative z-10">
              "链动资本为ECO Protocol提供了从品牌策略到内容创作的全方位支持。
              最令人印象深刻的是他们对复杂技术概念的准确把握和专业表达能力。
              在短时间内交付了超过150,000字的高质量内容，涵盖白皮书、宣传材料、社交媒体内容等多个维度。
              特别是他们自主研发的自动化运营工具，帮助我们快速建立了活跃的社群氛围，为项目的成功启动奠定了坚实基础。"
            </p>

            <div className="text-center">
              <p className="font-bold text-lg gradient-text">— ECO Protocol 项目方</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
