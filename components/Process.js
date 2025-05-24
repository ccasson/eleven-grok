import { PencilSquareIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Process() {
  const steps = [
    {
      title: 'Apply',
      description: 'Fill out our simple application form to get started.',
      icon: <PencilSquareIcon className="h-16 w-16 text-white" />,
    },
    {
      title: 'Onboard',
      description: 'Our team will guide you through the setup process.',
      icon: <UserGroupIcon className="h-16 w-16 text-white" />,
    },
    {
      title: 'Scale',
      description: 'Watch your earnings grow with our expert management.',
      icon: <ChartBarIcon className="h-16 w-16 text-white" />,
    },
  ];

  return (
    <section id="process" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
