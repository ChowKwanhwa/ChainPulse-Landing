"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const stats = [
  { value: 150000, suffix: "+", label: "字专业内容" },
  { value: 30, suffix: "+", label: "设计作品" },
  { value: 3, suffix: "部", label: "完整视频" },
  { value: 100, suffix: "%", label: "社群运营体系" },
]

function CountingNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function OverviewStats() {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">项目概览</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.08,
                y: -5,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="glass rounded-xl p-6 border border-primary/20 text-center cursor-default transition-shadow"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CountingNumber target={stat.value} suffix={stat.suffix} />
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
