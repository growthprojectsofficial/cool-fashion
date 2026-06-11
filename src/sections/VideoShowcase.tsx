import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const videos = [
  { id: 1, caption: 'Crafting Excellence', src: 'vipx/39k%20(1).mp4' },
  { id: 2, caption: 'Premium Materials', src: 'vipx/39k%20(2).mp4' },
  { id: 3, caption: 'Designed for Comfort', src: 'vipx/39k%5B3%5D.mp4' },
  { id: 4, caption: 'Street Ready Style', src: 'vipx/38k.mp4' },
  { id: 5, caption: 'The Making Of', src: 'vipx/38k%20(2).mp4' },
  { id: 6, caption: 'Walk the Talk', src: 'vipx/23%2C000%20glasses.mp4' },
  { id: 7, caption: 'Luxury in Every Step', src: 'vipx/watch.mp4' },
];

function VideoCard({ video, index, isLarge = false }: { video: typeof videos[0]; index: number; isLarge?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
          } else {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div ref={cardRef} className={`relative rounded-xl overflow-hidden flex-shrink-0 ${isLarge ? 'w-full' : 'w-[85vw] md:w-auto snap-center'}`} style={{ aspectRatio: '16/9' }}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}>
      <video ref={videoRef} src={video.src} muted loop playsInline preload="none" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.7)] via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4"><span className="text-white font-medium text-sm">{video.caption}</span></div>
    </motion.div>
  );
}

export default function VideoShowcase() {
  return (
    <section id="videos" className="py-16 md:py-24 px-4 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}>
          <p className="text-gold text-sm font-medium tracking-[4px] uppercase mb-3">Behind the Design</p>
          <h2 className="font-display text-[32px] md:text-[48px] font-bold text-white">See the Craftsmanship</h2>
        </motion.div>
        <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4">
          {videos.map((video, i) => (<VideoCard key={video.id} video={video} index={i} />))}
        </div>
        <div className="hidden md:grid gap-6">
          <VideoCard video={videos[0]} index={0} isLarge />
          <div className="grid grid-cols-3 gap-6">
            {videos.slice(1).map((video, i) => (<VideoCard key={video.id} video={video} index={i + 1} />))}
          </div>
        </div>
      </div>
    </section>
  );
}