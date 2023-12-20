import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">
          My Projects!
        </h2>
        <p>See some of my creation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* link 1 */}
        <div className="card bg-black text-white" data-aos="flip-right">
          <div className="avatar flex justify-center mt-5">
            <div className="w-24 rounded-full">
              <img src=" https://i.ibb.co/T4KySfh/4275092-2199147.jpg" />
            </div>
          </div>
          <div
            className="card-body"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="card-title justify-center  text-3xl font-bold text-orange-500">
              Al moun Library
            </h2>
            <p>Discover a literary sanctuary with Al-Moun Library</p>

            <div className="card-actions justify-center">
              <a
                href="https://sage-lolly-8dc3c5.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red hover:before:bg-red p-[10px] relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10">See Project</span>
              </a>
            </div>
          </div>
        </div>
        {/* link 2 */}
        <div className="card bg-black text-white" data-aos="flip-right">
          <div className="avatar flex justify-center mt-5">
            <div className="w-24 rounded-full">
              <img src=" https://i.ibb.co/DKt4k1h/10258959-4410738.jpg" />
            </div>
          </div>
          {/* <figure>
            <img src=" " alt="" />
          </figure> */}
          <div
            className="card-body"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="card-title justify-center text-3xl font-bold text-orange-500">
              Teach Land
            </h2>
            <p>
              Tech-Land is a sleek and user-friendly e-commerce platform
              offering a diverse range of products, from electronics to gadgets.
            </p>

            <div className="card-actions justify-center">
              <a
                href="https://mellifluous-speculoos-ebe7ec.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red hover:before:bg-red p-[10px] relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10">See Project</span>
              </a>
            </div>
          </div>
        </div>
        {/* link 3 */}
        <div className="card bg-black text-white " data-aos="flip-right">
          <div className="avatar flex justify-center mt-5">
            <div className="w-24 rounded-full">
              <img src=" https://i.ibb.co/k0G2xJV/4275084-2169592.jpg" />
            </div>
          </div>

          <div
            className="card-body"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <h2 className="card-title justify-center text-3xl font-bold text-orange-500">
              Fashion House
            </h2>
            <p>
              Effortless inventory control with a touch of elegance. This system
              empowers admins and managers, offering a experience from product
              creation to checkout.
            </p>

            <div className="card-actions justify-center">
              <a
                href="https://lucent-starburst-c5b65e.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red hover:before:bg-red p-[10px] relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10">See Project</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
