import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How do I place an order?',
    answer: "Simply click any 'Order on WhatsApp' button on our site. It will open a chat with us on WhatsApp with your product pre-selected. We'll confirm your order and arrange delivery.",
  },
  {
    question: 'How much is delivery?',
    answer: 'Delivery is completely FREE within Lagos! We handle the shipping so you only pay for the sneakers.',
  },
  {
    question: 'Can I pay on delivery?',
    answer: 'Yes! Pay on Delivery is available for all orders within Lagos. For other locations, we may require a small commitment fee.',
  },
  {
    question: 'What sizes do you have?',
    answer: "We stock sizes 40–46 for most styles. Send us a message on WhatsApp and we'll confirm availability for your specific size.",
  },
  {
    question: 'How long does delivery take?',
    answer: "Within Lagos, you can expect your sneakers within 24–48 hours after order confirmation. We'll keep you updated via WhatsApp.",
  },
  {
    question: 'Can I see the sneakers before buying?',
    answer: "We share detailed photos and videos of each pair on WhatsApp before delivery. You can inspect them fully before paying — no surprises.",
  },
  {
    question: "What if the sneakers don't fit?",
    answer: 'We offer size exchanges within 7 days, provided the sneakers are unworn and in original condition. Just reach out to us on WhatsApp.',
  },
  {
    question: 'Do you deliver outside Lagos?',
    answer: "Currently we focus on Lagos for pay-on-delivery orders. For interstate delivery, contact us on WhatsApp and we'll work something out.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-[800px] mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-sm font-medium tracking-[4px] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-display text-[32px] md:text-[48px] font-bold text-white">
            Questions? Answered.
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 md:px-6 data-[state=open]:border-[rgba(200,165,92,0.2)] transition-colors"
              >
                <AccordionTrigger className="text-white font-medium text-base hover:text-[#C8A55C] hover:no-underline py-5 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#888] text-base leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
