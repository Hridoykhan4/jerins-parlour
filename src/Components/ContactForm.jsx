const ContactForm = () => {
  return (
    <div className="py-16 bg-pink-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Let us handle your project, professionally.
        </h2>
        <div className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Full Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Last Name"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-gray-700">Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-gray-700">Your Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full h-24"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button className="btn btn-primary bg-pink-500 border-pink-500 hover:bg-pink-600 hover:border-pink-600 text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
