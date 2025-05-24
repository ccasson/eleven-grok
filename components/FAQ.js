import { useState } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'We offer chat management, content strategy, growth marketing, and revenue optimization to help you maximize your OnlyFans earnings.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Our pricing is based on a percentage of your tips and messages revenue, starting at 25%. You keep 100% of your subscription revenue.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply fill out our application form, and our team will contact you to begin the onboarding process.',
  },
  {
    question: 'What percentage do you take?',
    answer: 'Depending on the plan you choose, we take between 25% and 50% of your tips and messages revenue. See our pricing section for details.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel our services at any time with a 30-day notice.',
  },
  {
    question: 'Do you work with new creators?',
    answer: 'Absolutely! We work with creators at all stages, from beginners to established stars.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-6 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{faq.question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          className="px-6 pb-4"
        >
          <p>{faq.answer}</p>
        </motion.div>
      )}
    </div>
  );
}
