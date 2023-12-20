/* eslint-disable react/no-unescaped-entities */
const AboutMe = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src="https://i.ibb.co/Wyt12Yk/14979247-SL-060521-43530-09.jpg"
            className="w-3/4 h-96 rounded-lg shadow-2xl"
          />
          <img
            src="https://i.ibb.co/9ttzwwQ/839.jpg"
            className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5 p-4">
          <h3 className="text-3xl text-orange-500 font-bold">About Me</h3>
          <h1 className="text-4xl font-bold">MD. FAHAD AL-SUNAN</h1>
          <p>Frontend Developer</p>
          <p className="py-3">
            Crafting dynamic web applications with JavaScript, React, HTML, and
            CSS. On the backend, I navigate the Node.js and Express.js and
            MongoDB for efficient data storage. Excited about building the next
            generation of web applications and always open to collaborative
            opportunities!
          </p>
          <p className="py-6">
            Exploring new frontend and backend technologies. <br /> Continuous
            learning and staying updated with the latest industry trends. <br />{" "}
            I’m currently learning Next.js working on a project with Next.js{" "}
            <br /> Also interested in Python
          </p>

          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="text-red p-[10px] hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10">Education</span>
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <div className="card w-96 bg-black shadow-xl text-white mb-8">
                <div className="card-body">
                  <h2 className="card-title">
                    Masters Of Social Science{" "}
                    <span className="text-sm">(MSS)</span>
                  </h2>
                  <p className="text-orange-500">Jagannath University</p>
                  <p>2016-2017</p>
                  <p>Department of Political Science</p>
                </div>
              </div>
              <div className="card w-96 bg-black shadow-xl text-white">
                <div className="card-body">
                  <h2 className="card-title">
                    Bachelor of Social Science{" "}
                    <span className="text-sm">(BSS)</span>
                  </h2>
                  <p className="text-orange-500">Jagannath University</p>
                  <p>2011-2015</p>
                  <p>Department of Political Science</p>
                </div>
              </div>
              <div className="card w-96 bg-black shadow-xl text-white mt-8">
                <div className="card-body">
                  <h2 className="card-title">
                    Higher Secondary Certificate{" "}
                    <span className="text-sm">(HSC)</span>
                  </h2>
                  <p className="text-orange-500">
                    Can't Public School & Collage, Bogura
                  </p>
                  <p>2008-2010</p>
                </div>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-500">
                    ✕
                  </button>
                </form>
              </div>
            </div>
          </dialog>

          <button
            onClick={() => document.getElementById("my_modal_6").showModal()}
            className="text-red p-[10px] hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10">Experience</span>

            <dialog
              id="my_modal_6"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <div className="card w-96 bg-black shadow-xl text-white mb-8 text-left">
                  <div className="card-body">
                    <h2 className="card-title">Sr. Monitoring Executive</h2>
                    <p className="text-orange-500 text-lg">
                      GuardVision Monitoring <br />
                      <span className="text-sm">(An American Company)</span>
                    </p>

                    <p>2022-Continue</p>
                    <p>Uttara, Dhaka (Branch)</p>
                  </div>
                </div>
                <div className="card w-96 bg-black shadow-xl text-white">
                  <div className="card-body">
                    <h2 className="card-title">Founder</h2>
                    <p className="text-orange-500">Grammen Argo Farm</p>
                    <p>2019-2021</p>
                    <p>Location: Gaibandha</p>
                  </div>
                </div>

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-500">
                      ✕
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </button>

          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="text-red p-[10px] hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10">More Info</span>

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-500">
                    ✕
                  </button>
                </form>
                <div className="card w-96 bg-black shadow-xl text-white mb-8 text-left">
                  <div className="card-body">
                    <h2 className="card-title text-center font-bold text-2xl">
                      Personal Information
                    </h2>
                    <p className="text-orange-500 text-lg">
                      Blood Group:{" "}
                      <span className="text-white text-base">
                        AB+(Positive)
                      </span>
                    </p>
                    <p className="text-orange-500 text-lg">
                      Present Address:{" "}
                      <span className="text-white text-base">
                        AjamPur Kachabajar, Uttara, Dhaka
                      </span>
                    </p>
                    <p className="text-orange-500 text-lg">
                      Permanent Address:{" "}
                      <span className="text-white text-base">
                        Dhopadangga, Sundarganj, Gaibandha
                      </span>
                    </p>
                    <p className="text-orange-500 text-lg">
                      Contact Info:{" "}
                      <span className="text-white text-base">
                        email: fasunan@gmail.com
                      </span>
                      <br />
                      <span className="text-white text-base">
                        Phone: 01672146794, 01716428540
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </dialog>
          </button>
          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
            className="text-red p-[10px] hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-red-500 bg-white px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10">See my Resume</span>

            <dialog id="my_modal_4" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-500">
                    ✕
                  </button>
                </form>
                <div className="card w-96 bg-black shadow-xl text-white mb-8 text-left">
                  <div className="card-body">
                    <h2 className="card-title text-center font-bold text-2xl">
                      Resume
                    </h2>
                    <section>
                      <iframe
                        title="Resume"
                        src="../../../public/Fahad's Resume.pdf"
                        className="w-full h-96"
                      ></iframe>
                    </section>
                    <div className="mt-4">
                      <p className="text-lg">Download my resume:</p>
                      <a
                        href="../../../public/Fahad's Resume.pdf"
                        download="Sunan_Resume.pdf"
                        className="text-blue-500 hover:underline"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
