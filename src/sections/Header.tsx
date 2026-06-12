import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collection', href: '#collection' },
  { label: 'Videos', href: '#videos' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const WHATSAPP_LINK = 'https://wa.me/2348104353300?text=Hello, I%27m interested in ordering a pair of sneakers';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong border-b border-[rgba(200,165,92,0.15)]' : 'bg-transparent'}`} initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 2.6, ease: 'easeOut' }}>
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex flex-col items-start leading-tight">
            <span className="font-display text-[22px] font-bold text-white tracking-tight">COOL</span>
            <span className="text-[10px] md:text-xs text-gold font-light tracking-[4px] -mt-1">FASHION STORE</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="relative text-sm font-medium text-white/90 hover:text-[#C8A55C] transition-colors duration-300 group">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#C8A55C] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 bg-[#C8A55C] hover:bg-[#B8944F] text-[#0A0A0A] font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02]">
            <ShoppingBag size={16} /> Order Now
          </a>
          <button onClick={() => setMobileOpen(true)} className="lg:hidden text-white p-2" aria-label="Open menu"><Menu size={24} /></button>
        </div>
      </motion.header>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div className="fixed inset-0 bg-black/60 z-[60]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} />
            <motion.div className="fixed top-0 right-0 bottom-0 w-[280px] glass-strong z-[70] flex flex-col p-6" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}>
              <button onClick={() => setMobileOpen(false)} className="self-end text-white p-2 mb-8" aria-label="Close menu"><X size={24} /></button>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="text-white/90 hover:text-[#C8A55C] font-medium text-lg py-3 border-b border-[#2A2A2A] transition-colors" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>{link.label}</motion.a>
                ))}
              </nav>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center justify-center gap-2 bg-[#C8A55C] text-[#0A0A0A] font-semibold py-3 rounded-full" onClick={() => setMobileOpen(false)}>
                <ShoppingBag size={18} /> Order Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
