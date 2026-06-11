import { motion } from 'framer-motion';
import { Facebook, Users, ThumbsUp } from 'lucide-react';

const FACEBOOK_LINK = 'https://www.facebook.com/profile.php?id=100091653068289';

export default function FacebookSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div className="w-full lg:w-1/2 text-center lg:text-left" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
            <p className="text-[#C8A55C] text-sm font-medium tracking-[4px] uppercase mb-3">Join the Community</p>
            <h2 className="font-display text-[32px] md:text-[48px] font-bold text-[#0A0A0A] mb-4">Follow Us on Facebook</h2>
            <p className="text-[#888] text-base md:text-lg mb-8 leading-relaxed">Get exclusive updates, see new arrivals first, and join thousands of sneaker lovers in our growing community.</p>
            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
              <Facebook size={18} /> Visit Our Facebook Page
            </a>
          </motion.div>
          <motion.div className="w-full lg:w-1/2 flex justify-center" initial={{ opacity: 0, x: 30, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-sm w-full border border-[#E0E0E0]">
              <div className="h-24 bg-gradient-to-r from-[#0A0A0A] to-[#1A1A1A]" />
              <div className="px-6 pb-6">
                <div className="flex items-end -mt-10 mb-4">
                  <div className="w-20 h-20 rounded-full bg-[#0A0A0A] border-4 border-white flex items-center justify-center">
                    <span className="font-display text-gold text-xl font-bold">C</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-[#0A0A0A] mb-1">Cool Fashion Store</h3>
                <p className="text-[#888] text-sm mb-4">@coolfashionstore</p>
                <div className="flex items-center gap-4 text-sm text-[#888] mb-4">
                  <span className="flex items-center gap-1"><Users size={14} />2.4k followers</span>
                  <span className="flex items-center gap-1"><ThumbsUp size={14} />1.8k likes</span>
                </div>
                <p className="text-[#0A0A0A] text-sm leading-relaxed mb-4">Premium quality sneakers delivered to your doorstep in Lagos. Pay on delivery available!</p>
                <div className="bg-[#F5F5F5] rounded-xl p-3">
                  <p className="text-xs text-[#888] mb-1">Recent post</p>
                  <p className="text-sm text-[#0A0A0A]">New arrivals just dropped! Check out our latest collection — now available for ₦35,000 with free delivery.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}