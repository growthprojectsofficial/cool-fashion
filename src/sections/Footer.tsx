import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag, Phone, Facebook } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/08104353300?text=Hello%2C%20I%27m%20interested%20in%20ordering%20a%20pair%20of%20sneakers';
const FACEBOOK_LINK = 'https://www.facebook.com/profile.php?id=100091653068289';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'Videos', href: '#videos' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

const supportLinks = [
  { label: 'Order Status', href: WHATSAPP_LINK },
  { label: 'Size Guide', href: WHATSAPP_LINK },
  { label: 'Returns Policy', href: WHATSAPP_LINK },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer id="contact" className="pt-16 md:pt-24 pb-12 px-4 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-[32px] md:text-[48px] font-bold text-white mb-4">
            Ready to Upgrade Your Kicks?
          </h2>
          <p className="text-[#888] text-base md:text-lg mb-8 max-w-lg mx-auto">
            Message us on WhatsApp and get your pair delivered today.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8A55C] hover:bg-[#B8944F] text-[#0A0A0A] font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] mb-4"
          >
            <MessageCircle size={20} />
            <ShoppingBag size={20} />
            Order on WhatsApp Now
          </a>
          <div className="flex items-center justify-center gap-2 text-gold">
            <Phone size={16} />
            <span className="font-medium text-lg">0810 435 3300</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#2A2A2A] pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <div className="flex flex-col leading-tight mb-4">
              <span className="font-display text-xl font-bold text-white">COOL</span>
              <span className="text-[10px] text-gold font-light tracking-[4px]">FASHION STORE</span>
            </div>
            <p className="text-[#888] text-sm leading-relaxed">
              Premium quality sneakers delivered to your doorstep in Lagos.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#888] hover:text-[#C8A55C] text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-base mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-[#888] hover:text-[#C8A55C] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-base mb-4">Connect</h4>
            <div className="space-y-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gold hover:text-[#B8944F] text-sm transition-colors">
                <MessageCircle size={16} />
                08104353300
              </a>
              <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gold hover:text-[#B8944F] text-sm transition-colors">
                <Facebook size={16} />
                Cool Fashion Store
              </a>
              <p className="text-[#888] text-xs">We typically reply within minutes</p>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-[#2A2A2A] mt-8 pt-6 text-center">
          <p className="text-[#888] text-sm mb-1">© 2025 Cool Fashion Store. All rights reserved.</p>
          <p className="text-[#888] text-xs">Crafted with passion in Lagos</p>
        </div>
      </div>
    </footer>
  );
}