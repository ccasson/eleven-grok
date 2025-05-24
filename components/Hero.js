import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <Image
        src="/images/hero.jpg"
        alt="Creator at laptop with ring light"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan/40 to-magenta/40" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Scale Your OnlyFans to Six Figures</h1>
        <p className="text-lg md:text-xl mb-8">Partner with Elevan to maximize your earnings and grow your brand.</p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Apply Now</button>
          <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-500">Learn More</button>
        </div>
      </div>
    </section>
  );
}
