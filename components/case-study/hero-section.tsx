"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CaseStudyHero() {
  return (
    <section className="pt-32 pb-16 relative">
      <div className="container mx-auto px-4">
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" className="mb-8 hover:bg-primary/10 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回首页
            </Button>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {["环保科技", "区块链", "AI"].map((tag, index) => (
              <motion.span
                key={tag}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`glass px-4 py-2 rounded-full text-sm border cursor-default ${
                  index === 0 ? "border-primary/30" : index === 1 ? "border-secondary/30" : "border-accent/30"
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial="hidden" animate="visible">
            <motion.span
              className="gradient-text inline-block"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.03,
                  },
                },
              }}
            >
              {"ECO Protocol".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
            <br />
            品牌内容与社群运营案例研究
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            全球首个AI+环保+区块链+RWA融合生态系统
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}
            className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20 transition-shadow"
          >
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { label: "客户", value: "ECO Protocol (PulseEco)" },
                { label: "服务类型", value: "Web3品牌内容创作 + 社群运营 + 营销策划" },
                { label: "服务周期", value: "2025年 - 至今" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                  <div className="text-lg font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
