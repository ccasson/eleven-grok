import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Elevan helped me double my earnings in just three months. Their team is amazing!',
      name: 'Jane D.',
      avatar: '/images/avatar1.jpg',
    },
    {
      quote: 'I was struggling to manage my OnlyFans, but Elevan took care of everything. Highly recommend!',
      name: 'Sarah K.',
      avatar: '/images/avatar2.jpg',
    },
    {
      quote: 'The growth marketing strategies they implemented were game-changers for my account.',
      name: 'Emily R.',
      avatar: '/images/avatar3.jpg',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
