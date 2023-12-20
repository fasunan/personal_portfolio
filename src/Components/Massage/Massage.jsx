import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa";

const Massage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Thank you for your message!");
      e.target.reset();
    }, 1000);
  };

  return (
    <div className="mt-10 mb-10 py-5">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">
          Send me a Message!
        </h2>
        <p className="font-semibold">
          Got a question or proposal, or just want to say hello?
          <br /> Please Just Send It.
        </p>
      </div>
      <div>
        <div className="hero py-6">
          <div className="hero-content">
            <div className="card">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-between gap-40 mb-12">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-orange-500">
                        Your Name
                      </span>
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      className="outline-none border-b border-pink-600"
                    />
                  </div>
                  <div className="form-control flex flex-col">
                    <label className="label">
                      <span className="label-text text-orange-500">
                        Your Email
                      </span>
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      className="outline-none border-b border-pink-600"
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-orange-500">
                      Your Message
                    </span>
                  </label>
                  <input
                    required
                    type="text"
                    name="message"
                    placeholder="Whatever You want to say to me"
                    className="outline-none border-b border-pink-600"
                  />
                </div>
                <div className="form-control mt-6">
                  <SendMessageButton isLoading={isLoading} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SendMessageButton = ({ isLoading }) => {
  return (
    <button
      className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
      type="submit"
      disabled={isLoading}
    >
      {isLoading && (
        <div className="absolute inset-3 flex items-end justify-end">
          <FaSpinner className="animate-spin" />
        </div>
      )}
      <span className="relative z-10">
        {isLoading ? "Sending..." : "Send ->"}
      </span>
    </button>
  );
};

export default Massage;
