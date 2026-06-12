import { motion } from 'framer-motion';
import { Star, Truck, Shield } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/2348104353300?text=Hello%2C%20I%27m%20interested%20in%20ordering%20the%20Urban%20Glide%20Elite';

export default function FeaturedCollection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
          <p className="text-[#C8A55C] text-sm font-medium tracking-[4px] uppercase mb-3">Featured</p>
          <h2 className="font-display text-[32px] md:text-[48px] font-bold text-[#0A0A0A]">This Week&apos;s Top Pick</h2>
        </motion.div>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          <motion.div className="w-full lg:w-[55%]" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
            <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
              <img src="kix/sneakers%202.jpg" alt="Urban Glide Elite" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgba(200,165,92,0.3)] to-transparent" />
            </div>
          </motion.div>
          <motion.div className="w-full lg:w-[45%] lg:-ml-16 z-10" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="glass rounded-3xl p-6 md:p-8 lg:p-10">
              <motion.span className="inline-block bg-[#C8A55C] text-[#0A0A0A] text-xs font-semibold px-4 py-1.5 rounded-full mb-4" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>BESTSELLER</motion.span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Urban Glide Elite</h3>
              <p className="text-[#888] text-base md:text-lg mb-6 leading-relaxed">Our most popular sneaker. Premium materials, unmatched comfort, and a design that turns heads everywhere you go.</p>
              <p className="font-display text-3xl md:text-4xl font-bold text-gold mb-6">₦35,000</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3"><Star size={20} className="text-[#C8A55C]" /><span className="text-white/90 text-sm md:text-base">Premium Quality Materials</span></div>
                <div className="flex items-center gap-3"><Truck size={20} className="text-[#C8A55C]" /><span className="text-white/90 text-sm md:text-base">Free Delivery in Lagos</span></div>
                <div className="flex items-center gap-3"><Shield size={20} className="text-[#C8A55C]" /><span className="text-white/90 text-sm md:text-base">Pay on Delivery Available</span></div>
              </div>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-[#C8A55C] hover:bg-[#B8944F] text-[#0A0A0A] font-semibold py-4 rounded-full transition-all duration-300 hover:scale-[1.02]">Order Now on WhatsApp</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
