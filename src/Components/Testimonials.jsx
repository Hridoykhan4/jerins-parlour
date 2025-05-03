import { FaStar } from "react-icons/fa";
import img1 from '../assets/images/Ellipse 90.png'
import img2 from '../assets/images/Ellipse 91.png'
import img3 from '../assets/images/Ellipse 92.png'
const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Nash Patrik",
      title: "CEO, Manpol",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas feugiat.",
      rating: 3.5,
      image: img1,
    },
    {
      name: "Miriam Barron",
      title: "CEO, Manpol",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas feugiat.",
      rating: 4,
      image: img2,
    },
    {
      name: "Bria Malone",
      title: "CEO, Manpol",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas feugiat.",
      rating: 5,
      image: img3,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={` ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
        />
      );
    }
    return <div className="flex gap-3 pl-3">{stars}</div>;
  };

  return (
    <div className="py-12 bg-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="card shadow-md p-6 rounded-lg text-center"
            >
              <div className="avatar justify-center mb-4">
                <div className="w-20 rounded-full">
    
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
              </div>
              <h3 className="font-semibold text-lg text-gray-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{testimonial.title}</p>
              <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
              <span className="">{renderStars(testimonial.rating)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300 mr-2"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
