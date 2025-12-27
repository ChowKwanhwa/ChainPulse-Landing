"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const investments = [
    {
        name: "CryptoLife",
        logo: "/logos/cryptoLife.png",
        link: "#", // Add links if available
        scale: 2.0,
    },
    {
        name: "Gala",
        logo: "/logos/gala.png",
        link: "#",
    },
    {
        name: "Jupiter",
        logo: "/logos/jupiter.png",
        link: "#",
    },
    {
        name: "Superverse",
        logo: "/logos/superverse.png",
        link: "#",
    },
]

export function InvestmentPortfolioSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-background/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Investment Portfolio</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">Proudly backing the future of Web3</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {investments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.1,
                                    filter: "brightness(1.2)",
                                }}
                                className="relative w-full h-24 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300"
                            >
                                <div className="relative w-full h-full px-4">
                                    <Image
                                        src={item.logo}
                                        alt={item.name}
                                        fill
                                        className="object-contain"
                                        style={{ transform: `scale(${item.scale || 1})` }}
                                    />
                                </div>
                            </motion.div>
                            <span className="text-lg font-medium text-muted-foreground group-hover:text-primary transition-colors">
                                {item.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
