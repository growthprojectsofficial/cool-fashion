import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/2348104353300?text=Hello, I%27d like to chat with you about your sneakers';

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
            <p className="text-gold text-sm font-medium tracking-[4px] uppercase mb-3">Our Story</p>
            <h2 className="font-display text-[32px] md:text-[48px] font-bold text-white mb-6 leading-tight">More Than Just Sneakers</h2>
            <div className="space-y-4 mb-8">
              <p className="text-[#888] text-base md:text-lg leading-relaxed">At Cool Fashion Store, we believe everyone deserves to walk with confidence. That&apos;s why we source only the finest quality sneakers — stylish, durable, and comfortable.</p>
              <p className="text-[#888] text-base md:text-lg leading-relaxed">Based in Lagos, we&apos;ve built our reputation on trust. Thousands of happy customers. Zero compromises. And a simple promise: you get exactly what you see.</p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#C8A55C] text-[#C8A55C] hover:bg-[#C8A55C] hover:text-[#0A0A0A] font-semibold px-8 py-3 rounded-full transition-all duration-300">
              <MessageCircle size={18} /> Chat With Us on WhatsApp
            </a>
          </motion.div>
          <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="rounded-3xl overflow-hidden border border-[rgba(200,165,92,0.2)] aspect-[4/3]">
              <img src="kix/sneakers 3.jpg" alt="Premium sneakers collection" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
