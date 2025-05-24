import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      percentage: 25,
      features: [
        'Basic account management',
        'Content scheduling',
        'Monthly performance report',
      ],
    },
    {
      name: 'Growth',
      percentage: 35,
      features: [
        'All Starter features',
        'Advanced marketing strategies',
        'Bi-weekly consultations',
      ],
      highlighted: true,
    },
    {
      name: 'Elite',
      percentage: 50,
      features: [
        'All Growth features',
        '24/7 support',
        'Custom content creation',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <p className="text-center mb-12">We take a percentage of your tips and messages revenue only. You keep 100% of subscription revenue.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md text-center ${plan.highlighted ? 'border-2 border-blue-500' : ''}`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-4">{plan.percentage}%</p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Apply Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
