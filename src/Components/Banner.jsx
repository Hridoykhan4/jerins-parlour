import { Link } from "react-router-dom";
import banner from "../assets/images/banner-main.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center flex-col gap-7 lg:flex-row-reverse">
        <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h1>
          <p className="py-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Purus <br />
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <Link to="" className="btn btn-secondary">Get An Appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
