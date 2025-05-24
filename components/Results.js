import CountUp from 'react-countup';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Results() {
  const stats = [
    { label: 'Average Revenue Increase', value: 87, suffix: '%' },
    { label: 'Clients Managed', value: 50, suffix: '+' },
    { label: 'Total Earnings Generated', value: 1, suffix: 'M+' },
  ];

  const payouts = [
    { image: '/images/of-pay-1.png', date: 'Nov 2024' },
    { image: '/images/of-pay-2.png', date: 'Feb 2025' },
    { image: '/images/of-pay-3.png', date: 'Apr 2025' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <section id="results" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Proven Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <CountUp end={stat.value} duration={2} suffix={stat.suffix} className="text-5xl font-bold" />
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="max-w-2xl mx-auto">
          <Slider {...settings}>
            {payouts.map((payout, index) => (
              <div key={index}>
                <img src={payout.image} alt={`Payout screenshot ${index + 1}`} className="w-full" />
                <p className="text-center mt-2">{payout.date}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
