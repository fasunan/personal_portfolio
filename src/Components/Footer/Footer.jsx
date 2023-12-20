import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer
      className="footer h-72"
      style={{
        background: "linear-gradient(to right, black 75%, #CC5500 25%)",
      }}
    >
      <aside className="p-12 flex">
        <div className="ml-10">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-orange-500 ring-offset-orange-500 ring-offset-2">
              <img src="https://i.ibb.co/QnvcWjz/sunan.jpg" />
            </div>
          </div>
          <p className="text-orange-500 font-bold text-2xl">
            Md. Fahad Al-Sunan
            <br />
            <span className="text-white text-xl"> Frontend Developer</span>
          </p>
        </div>
        <div className="ml-32 mt-20 space-y-3">
          <h1 className="text-orange-500 font-bold text-2xl">Contact Info</h1>
          <div className="text-white font-semibold space-y-2">
            <p>Email: fasunan@gmail.com</p>
            <p>Phone:01672146794</p>
            <p>Address: Uttara, Dhaka, Bangladesh</p>
          </div>
        </div>
      </aside>
      <div>
        <div className="p-12 -ml-30 mt-20">
          <header className="footer-title text-xl text-black">
            Social Info
          </header>
          <div className="grid grid-flow-col gap-4 font-bold text-xl">
            <a>
              <FaLinkedin></FaLinkedin>
            </a>
            <a>
              <FaGithub></FaGithub>
            </a>
            <a>
              <FaFacebook></FaFacebook>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
