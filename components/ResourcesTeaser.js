export default function ResourcesTeaser() {
  const resources = [
    {
      title: 'Top 5 Tips for OnlyFans Success',
      date: 'May 20, 2025',
      excerpt: 'Learn the essential strategies to boost your OnlyFans earnings.',
      image: '/images/article1.jpg',
      link: '/resources/top-5-tips',
    },
    {
      title: 'How to Engage Your Fans',
      date: 'May 15, 2025',
      excerpt: 'Discover effective ways to keep your subscribers coming back for more.',
      image: '/images/article2.jpg',
      link: '/resources/engage-fans',
    },
    {
      title: 'Maximizing Your Content Strategy',
      date: 'May 10, 2025',
      excerpt: 'Plan your content like a pro with these expert tips.',
      image: '/images/article3.jpg',
      link: '/resources/content-strategy',
    },
  ];

  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{resource.date}</p>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-700 mb-4">{resource.excerpt}</p>
                <a href={resource.link} className="text-blue-500 hover:underline">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
