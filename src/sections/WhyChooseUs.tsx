import { motion } from 'framer-motion';
import { Star, Truck, Shield } from 'lucide-react';

const features = [
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Every pair is crafted with top-grade materials. No compromises, no shortcuts — just pure quality you can see and feel.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'We deliver across Lagos quickly and reliably. Your sneakers arrive at your doorstep in perfect condition, ready to wear.',
  },
  {
    icon: Shield,
    title: 'Pay on Delivery',
    description: 'No risks. No upfront payment. Inspect your sneakers before you pay — available for all Lagos deliveries.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 px-4 md:px-12 bg-[#F5F5F5]">
      <div className="max-w-[1000px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C8A55C] text-sm font-medium tracking-[4px] uppercase mb-3">
            Why Kicks Premium
          </p>
          <h2 className="font-display text-[32px] md:text-[48px] font-bold text-[#0A0A0A]">
            Built for People Who Know Quality
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-3xl p-8 md:p-10 card-shadow text-center group hover:-translate-y-2 hover:elevated-shadow transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-[#C8A55C] mb-6 group-hover:scale-105 transition-transform">
                <feature.icon size={32} className="text-[#C8A55C]" />
              </div>

              <h3 className="font-body text-xl font-semibold text-[#0A0A0A] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#888] text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
