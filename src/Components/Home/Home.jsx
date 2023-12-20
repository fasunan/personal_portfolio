// import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Massage from "../Massage/Massage";
import Projects from "../Projects/Projects";

// import { CiDark } from "react-icons/ci";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";

const Home = () => {
  // const [theme, setTheme] = useState("light");
  // useEffect(() => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // const handleChangeTheme = () => {
  //   setTheme(theme === "dark" ? "light" : "dark");
  // };
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>

      <Massage></Massage>

      <div>
        <div className="dark:bg-black">
          <div className="-mt-14 absolute ml-8 ">
            {/* <button
              onClick={handleChangeTheme}
              className="btn btn-sm border-none rounded-3xl bg-transparent text-purple-400"
            >
              Dark Mode <CiDark className="text-lg"></CiDark>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
