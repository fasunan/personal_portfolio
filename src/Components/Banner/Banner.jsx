const Banner = () => {
  return (
    <div
      className="h-[400px] mb-10 flex justify-between"
      style={{
        background: "linear-gradient(to right, black 75%, #CC5500 25%)",
      }}
    >
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md mb-20 ml-12">
          <h1 className="mb-5 text-5xl font-bold text-orange-500">
            Welcome to My Creative Web Space
          </h1>
          <p className="mb-5 font-medium text-lg ">
            Explore my portfolio to see the simplicity and power of modern web
            development.
          </p>
        </div>
      </div>
      {/* Right side with image */}
      <div className="mr-8">
        <img
          src="https://i.ibb.co/QnvcWjz/sunan.jpg"
          alt="Your Image"
          className="object-cover rounded-2xl opacity-70"
          style={{ width: "80%", maxWidth: "400px" }}
        />
      </div>
    </div>
  );
};

export default Banner;
