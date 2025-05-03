import icons1 from "../assets/icons/Group 1372.png";
import icons2 from "../assets/icons/Group 1373.png";
import icons3 from "../assets/icons/Group 1374.png";
const OurServices = () => {
  return (
    <div className="py-12 bg-base-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-8">
          Our Awesome Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card shadow-md p-6 rounded-lg">
            <div className="flex justify-center text-4xl text-pink-500 mb-4">
              <img className="w-24" src={icons1} alt="" />
            </div>
            <h3 className="card-title justify-center text-xl font-semibold text-gray-800">
              Anti Age Face Treatment
            </h3>
            <p className="text-center text-gray-600 mb-2">
              <span className="font-bold text-primary">$199</span>
            </p>
            <p className="text-sm text-gray-500">
              We craft stunning and amazing web UI, using a well drafted UX to
              fit your product.
            </p>
          </div>

          <div className="card shadow-md p-6 rounded-lg">
            <div className="flex justify-center text-4xl text-pink-500 mb-4">
              <img className="w-24" src={icons2} alt="" />
            </div>
            <h3 className="card-title justify-center text-xl font-semibold text-gray-800">
              Hair Color & Styling
            </h3>
            <p className="text-center text-gray-600 mb-2">
              <span className="font-bold text-primary">$99</span>
            </p>
            <p className="text-sm text-gray-500">
              Amazing flyers, social media posts and brand representations that
              would make your brand stand out.
            </p>
          </div>

          <div className="card shadow-md p-6 rounded-lg">
            <div className="flex justify-center text-4xl text-pink-500 mb-4">
              <img className="w-24" src={icons3} alt="" />
            </div>
            <h3 className="card-title justify-center text-xl font-semibold text-gray-800">
              Skin Care Treatment
            </h3>
            <p className="text-center text-gray-600 mb-2">
              <span className="font-bold text-primary">$299</span>
            </p>
            <p className="text-sm text-gray-500">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <button className="btn bg-[#F6339A] text-white">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
