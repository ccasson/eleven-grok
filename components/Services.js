import { ChatBubbleLeftRightIcon, LightBulbIcon, ChartBarIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      title: 'Chat Management',
      description: 'We handle all your fan interactions, ensuring engagement and satisfaction.',
      icon: <ChatBubbleLeftRightIcon className="h-12 w-12 text-blue-500" />,
    },
    {
      title: 'Content Strategy',
      description: 'Develop a winning content plan to attract and retain subscribers.',
      icon: <LightBulbIcon className="h-12 w-12 text-blue-500" />,
    },
    {
      title: 'Growth Marketing',
      description: 'Leverage data-driven marketing strategies to expand your reach.',
      icon: <ChartBarIcon className="h-12 w-12 text-blue-500" />,
    },
    {
      title: 'Revenue Optimization',
      description: 'Maximize your earnings with optimized pricing and promotional tactics.',
      icon: <CurrencyDollarIcon className="h-12 w-12 text-blue-500" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
