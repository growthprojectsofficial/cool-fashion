import { motion } from 'framer-motion';
import { ShoppingBag, MessageCircle, ChevronDown } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/2348104353300?text=Hello, I%27m interested in ordering a pair of sneakers';
const staggerDelay = 0.2;

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(200,165,92,0.08)] via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-[0.08] bg-cover bg-center" style={{ backgroundImage: 'url(kix/sneakers 1.jpg)' }} />
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.p className="text-gold text-sm font-medium tracking-[6px] uppercase mb-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 2.6 + staggerDelay }}>Step Into Luxury</motion.p>
        <motion.h1 className="font-display text-[40px] md:text-[72px] font-bold text-white leading-[1.1] mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.6 + staggerDelay * 2 }}>
          Premium Sneakers<br /><span className="text-gold">Delivered to You</span>
        </motion.h1>
        <motion.p className="text-[#888] text-base md:text-lg max-w-[560px] mx-auto mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.6 + staggerDelay * 3 }}>
          Luxury Quality Sneakers / Delivery Available / Pay On Delivery Within Lagos Only
        </motion.p>
        <motion.div className="mb-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.6 + staggerDelay * 4 }}>
          <span className="font-display text-2xl md:text-[28px] font-bold text-gold">₦35,000</span>
          <span className="text-[#888] text-sm ml-2">per pair</span>
        </motion.div>
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.6 + staggerDelay * 5 }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#C8A55C] hover:bg-[#B8944F] text-[#0A0A0A] font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto justify-center">
            <MessageCircle size={18} /><ShoppingBag size={18} />Order on WhatsApp
          </a>
          <a href="#collection" className="flex items-center gap-2 border border-[#C8A55C] text-[#C8A55C] hover:bg-[#C8A55C] hover:text-[#0A0A0A] font-semibold px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto justify-center">
            View Collection
          </a>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.0, duration: 0.6 }}>
        <span className="text-[#888] text-xs">Scroll to explore</span>
        <ChevronDown size={20} className="text-gold animate-bounce-slow" />
      </motion.div>
    </section>
  );
}
