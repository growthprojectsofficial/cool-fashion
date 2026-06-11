import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/08104353300?text=Hello%2C%20I%27m%20interested%20in%20ordering%20a%20pair%20of%20sneakers';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3.0, duration: 0.5, type: 'spring' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  );
}
