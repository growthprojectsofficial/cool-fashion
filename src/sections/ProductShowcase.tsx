import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const products = [
  { id: 1, name: 'Royal Runner Pro', image: 'kix/sneakers 1.jpg' },
  { id: 2, name: 'Urban Glide Elite', image: 'kix/sneakers 2.jpg' },
  { id: 3, name: 'Street King Supreme', image: 'kix/sneakers 3.jpg' },
  { id: 4, name: 'Velocity Boost X', image: 'kix/sneakers 4.jpg' },
  { id: 5, name: 'Metro Flex Premium', image: 'kix/sneakers 5.jpg' },
  { id: 6, name: 'Crown Step Luxe', image: 'kix/sneakers 6.jpg' },
  { id: 7, name: 'Titan Walk Pro', image: 'kix/sneakers 7.jpg' },
  { id: 8, name: 'Apex Runner V2', image: 'kix/sneakers 8.jpg' },
  { id: 9, name: 'Noble Stride Elite', image: 'kix/sneakers 9.jpg' },
  { id: 10, name: 'Legacy Air Supreme', image: 'kix/sneakers 10.jpg' },
  { id: 11, name: 'Prime Motion Lux', image: 'kix/sneakers 11.jpg' },
  { id: 12, name: 'Sovereign Step Pro', image: 'kix/sneakers 12.jpg' },
];

function getWhatsappLink() {
  return `https://wa.me/2348104353300?text=${encodeURIComponent("Hello, I am interested in this product. Is it still available?")}`;
}

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:elevated-shadow hover:border-[rgba(200,165,92,0.2)] hover:gold-glow"
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <div className="aspect-square overflow-hidden bg-[#111]">
        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="font-body text-white font-semibold text-base md:text-lg mb-1 truncate">{product.name}</h3>
        <p className="font-display text-gold text-xl md:text-2xl font-bold mb-3">₦35,000</p>
        <a href={getWhatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full border border-[#C8A55C] text-[#C8A55C] hover:bg-[#C8A55C] hover:text-[#0A0A0A] font-medium text-sm py-2.5 rounded-lg transition-all duration-300">
          <MessageCircle size={15} /> Order This Pair
        </a>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section id="collection" className="py-16 md:py-24 px-4 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto" ref={ref}>
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <p className="text-gold text-sm font-medium tracking-[4px] uppercase mb-3">The Collection</p>
          <h2 className="font-display text-[32px] md:text-[48px] font-bold text-white mb-4">Find Your Perfect Pair</h2>
          <p className="text-[#888] text-base md:text-lg max-w-xl mx-auto">All sneakers are ₦35,000 with free delivery in Lagos</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (<ProductCard key={product.id} product={product} index={i} />))}
        </div>
      </div>
    </section>
  );
}
