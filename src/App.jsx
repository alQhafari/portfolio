import { useState, useEffect, useCallback } from "react";
import "./App.css";
import bg from "./assets/bg.png";
import profile from "./assets/profile.png";
import igLogo from "./assets/instagram.png";
import linkedLogo from "./assets/linked.png";
import igLogoBlack from "./assets/instagram_black.png";
import linkedLogoBlack from "./assets/linked_black.png";
import frontEndLogo from "./assets/bg-coding.jpg";
import photographyLogo from "./assets/bg-photography.jpg";
import gallery_1 from "./assets/gallery.jpg";
import gallery_2 from "./assets/gallery-2.jpg";
import gallery_3 from "./assets/gallery-3.jpg";
import gallery_4 from "./assets/gallery-4.jpg";

function App() {
  const skills = [
    "Frontend Developer",
    "Photographer",
    "Mountaineer",
    "Videographer",
  ];

  const [newSkills, setNewSkills] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * skills.length);
    setNewSkills(skills[index]);
  }, []);

  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 120) {
        if (scrollState !== "amir") setScrollState("amir");
      } else {
        if (scrollState !== "top") setScrollState("top");
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1500);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <div>
      <div
        className="bg-bg h-screen w-full bg-no-repeat bg-left lg:bg-right bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <nav
          class={`px-2 lg:px-56 py-2.5 w-full fixed z-50 duration-300 ${
            scrollState == `amir` ? `bg-bg/70` : `bg-transparent`
          }`}
        >
          <div class="flex flex-wrap items-center justify-between">
            <a href="/" class="flex items-center">
              <p className="text-white font-extrabold text-2xl lg:text-3xl">
                <span className="text-secondary">AL </span>QHAFARI
              </p>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul class="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
                <li>
                  <a
                    href="https://www.linkedin.com/in/abi-al-qhafari-a7800a245/"
                    class="block py-2 pl-3 pr-4 text-white bg-bg/50 lg:bg-bg text-center text-lg lg:border-2  border-bg hover:bg-transparent hover:text-bg transition-all"
                    aria-current="page"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="h-full flex flex-col justify-end">
          <div className="px-2 sm:px-16 lg:px-56 h-4/5 flex flex-col  justify-around">
            <div className="text-white flex flex-col gap-4">
              <p className="text-xl lg:text-3xl">Hi, I'm</p>
              <h1 className="text-4xl lg:text-7xl font-extrabold text-secondary">
                ABI
              </h1>
              <h1 className="text-4xl  lg:text-7xl font-extrabold ">
                AL QHAFARI
              </h1>
              <div className="border-l  border-white pl-4">
                <p className="lg:text-xl transition-all">{newSkills}</p>
              </div>
              <a
                href="https://www.linkedin.com/in/abi-al-qhafari-a7800a245/"
                className="bg-transparent w-fit border border-white py-2 px-4 hover:bg-white hover:text-bg transition-all"
              >
                Hire me
              </a>
            </div>
            <div className="flex flex-row gap-8 opacity-20 w-[100px] lg:w-[150px]">
              <a href="https://www.instagram.com/qhaf18/">
                <img src={igLogo}></img>
              </a>
              <a href="https://www.linkedin.com/in/abi-al-qhafari-a7800a245/">
                <img src={linkedLogo}></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white pt-4 lg:pt-16 px-2 sm:px-16 lg:px-56 ">
        <div className="w-full h-full flex flex-col lg:flex-row justify-between gap-4">
          <img src={profile}></img>
          <div className="w-full h-fill flex flex-col items-end justify-center gap-8">
            <h2 className="font-bold lg:text-xl lg:text-end">
              Hi, I’m Abi Al Qhafari, Junior Frontend Developer from Indonesia
            </h2>
            <p className="lg:text-end">
              Currently, i am an undergraduated student at Faculty of Computer
              Science Brawijaya University. I’ve some experience at campus
              organization specially at web development division.
            </p>
            <p className="lg:text-end">
              Besides web development, i have some interesting at Photography
              specially street photography. I’m doing photography just for fun
              when i’m tired of my web project.
            </p>
            <a
              href="https://www.linkedin.com/in/abi-al-qhafari-a7800a245/"
              className="bg-transparent w-fit border border-black py-2 px-4 hover:bg-white hover:text-bg transition-all"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black py-32 px-2 sm:px-16 lg:px-56">
        <h2 className="text-secondary text-center lg:text-2xl font-semibold">
          My Skills
        </h2>
        <div className="w-full h-full flex lg:flex-row flex-col justify-between gap-16 mt-16">
          <div className="group relative w-full h-96">
            <img
              className="w-full h-full object-cover"
              src={frontEndLogo}
            ></img>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-bg opacity-0 group-hover:opacity-75 duration-500">
              <p className="text-2xl font-semibold text-center text-white group-hover:opacity-100">
                Frontend
                <br />
                Web Developer
              </p>
              <a href="" className="bg-white/50 px-6 py-2 font-semibold">
                Hire Me
              </a>
            </div>
          </div>
          <div className="group relative w-full h-96">
            <img
              className="w-full h-full object-cover"
              src={photographyLogo}
            ></img>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4 bg-bg opacity-0 group-hover:opacity-75 duration-500">
              <p className="text-2xl font-semibold text-center text-white group-hover:opacity-100">
                Photography
              </p>
              <a href="" className="bg-white/50 px-6 py-2 font-semibold">
                Hire Me
              </a>
            </div>
          </div>
        </div>
        <h2 className="text-secondary text-center lg:text-2xl font-semibold mt-56">
          Gallery
        </h2>
        <div className="w-full h-full flex flex-col justify-between gap-8 mt-32">
          <div className="w-full lg:h-[600px] flex lg:flex-row flex-col gap-8 justify-between">
            <div className="basis-2/3 w-full h-full">
              <img
                className=" w-full h-full object-cover"
                src={gallery_1}
              ></img>
            </div>
            <div className="basis-1/3 w-full h-full">
              <img className="w-full h-full object-cover" src={gallery_2}></img>
            </div>
          </div>
          <div className="w-full lg:h-[600px] flex lg:flex-row flex-col gap-8 justify-between">
            <div className="basis-1/3 w-full h-full">
              <img
                className=" w-full h-full object-cover"
                src={gallery_3}
              ></img>
            </div>
            <div className="basis-2/3 w-full h-full">
              <img className="w-full h-full object-cover" src={gallery_4}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white py-4 lg:py-16 px-2 sm:px-16 lg:px-56 ">
        <div className="w-full h-full flex flex-col justify-center gap-4 items-center">
          <h2 className="font-bold lg:text-xl lg:text-end">Contact</h2>
          <p>qhafari123@gmail.com</p>
          <div className="flex flex-row gap-8 w-[100px] lg:w-[150px] text-black">
            <a href="https://www.instagram.com/qhaf18/">
              <img className="" src={igLogoBlack}></img>
            </a>
            <a href="https://www.linkedin.com/in/abi-al-qhafari-a7800a245/">
              <img src={linkedLogoBlack}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
