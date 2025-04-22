import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Address */}
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span>📍</span>
            <p>
              H#000 (0th Floor), Road #00,
              <br />
              New DOHS, Mohakhali, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Submit Listing
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Quick Links
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Rentals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our blog
              </a>
            </li>
          </ul>
        </div>

        {/* About Us & Socials */}
        <div>
          <h4 className="font-bold mb-2">About us</h4>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <div className="flex gap-3 text-lg">
            <a href="#" className="hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
