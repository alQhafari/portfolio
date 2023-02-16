import { useState, useEffect, useCallback } from "react";
import "./App.css";
import bg from "./assets/bg.png";
import igLogo from "./assets/instagram.png";
import linkedLogo from "./assets/linked.png";

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

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1500);
    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <div
      className="bg-bg h-screen w-screen bg-no-repeat bg-left lg:bg-right"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <nav class="px-2 lg:px-56 py-2.5 w-full fixed">
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
        <div className="px-2 sm:px-56 h-4/5 flex flex-col  justify-around">
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
              Contact Me
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
  );
}

export default App;
