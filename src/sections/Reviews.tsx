import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "The quality is insane! I've bought sneakers online before and been disappointed — not this time. These look even better in person.",
    name: 'Chinedu O.',
    location: 'Lagos Island',
  },
  {
    text: 'Pay on delivery gave me peace of mind. The delivery was fast and the sneakers are top notch. Already ordered my second pair!',
    name: 'Ada M.',
    location: 'Ikeja',
  },
  {
    text: 'Best sneaker plug in Lagos, period. Great communication, fast response on WhatsApp, and the shoes are fire.',
    name: 'Tunde K.',
    location: 'Yaba',
  },
  {
    text: 'I was skeptical about ordering footwear online but Kicks Premium exceeded my expectations. The fit is perfect and they look premium.',
    name: 'Ngozi E.',
    location: 'Lekki',
  },
  {
    text: 'My go-to store for fresh kicks. Every time I wear them out, people ask where I got them. 10/10 would recommend.',
    name: 'Femi A.',
    location: 'Surulere',
  },
  {
    text: 'Customer service is excellent. They helped me pick the right size and my sneakers arrived the next day. Quality is unmatched!',
    name: 'Blessing R.',
    location: 'Victoria Island',
  },
];

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  return (
    <motion.div
      className="bg-white rounded-3xl p-8 card-shadow"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="text-[#C8A55C] fill-[#C8A55C]" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#0A0A0A] text-base italic leading-relaxed mb-6">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div>
        <p className="font-semibold text-[#0A0A0A] text-base">{review.name}</p>
        <p className="text-[#888] text-sm">{review.location}</p>
      </div>
    </motion.div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24 px-4 md:px-12 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#C8A55C] text-sm font-medium tracking-[4px] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="font-display text-[32px] md:text-[48px] font-bold text-[#0A0A0A]">
            What Our Customers Say
          </h2>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
