"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CaseStudySection() {
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
            <span className="gradient-text">成功案例</span>
          </h2>
          <p className="text-muted-foreground text-lg">我们的客户成功故事</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 md:p-12 border-primary/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 gradient-text">ECO Protocol</h3>
              <p className="text-muted-foreground text-lg mb-8">全球首个AI+环保+区块链+RWA融合生态</p>

              <Link href="/case-study/eco-protocol">
                <Button
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10 hover:border-primary bg-transparent"
                >
                  查看完整案例
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-6 border border-primary/30"
              >
                <div className="text-4xl font-bold gradient-text mb-2">150,000+</div>
                <div className="text-muted-foreground">字专业内容</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl p-6 border border-secondary/30"
              >
                <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                <div className="text-muted-foreground">设计作品</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl p-6 border border-accent/30"
              >
                <div className="text-4xl font-bold gradient-text mb-2">3部</div>
                <div className="text-muted-foreground">完整视频</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-6 border border-primary/30"
              >
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <div className="text-muted-foreground">社群运营体系</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
