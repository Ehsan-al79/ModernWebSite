import picture from "/picture.png";
import { PiBagSimpleFill } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaPhoneAlt,
  FaCertificate,
  FaSuitcase,
  FaGithub,
} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

import { FaStarOfLife } from "react-icons/fa6";

export default function App() {
  return (
    <main className="bg-[#202124] flex max-md:flex-col max-md:gap-y-2 sm:px-20 md:px-0 w-full font-ubunto">
      {/* Left Side */}
      <section className="bg-[#303134] m-2.5 max-md:m-0 max-lg:w-1/2 w-1/4 max-md:w-full  rounded-md">
        <aside>
          <div className="w-full relative">
            <img
              src={picture}
              className="w-full"
              alt="Ehsan Alimardani"
            />
            <h1 className="absolute bottom-0 w-full bg-[rgba(0,0,0,0.5)]  text-center text-white text-2xl py-2 ">
              Ehsan Alimardani
            </h1>
          </div>
          <div className="w-full p-3">
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <PiBagSimpleFill className="size-6 -mb-[1px] fill-[#BB86FC]" />
                <p className="text-white text-[18px]">Software Engineer</p>
              </li>
              <li className="flex items-center space-x-2">
                <AiFillHome className="size-6  fill-[#BB86FC]" />
                <p className="text-white text-[18px]">Mashad, Iran</p>
              </li>
              <li className="flex items-center space-x-2">
                <BiLogoGmail className="size-6 -mb-[1px] fill-[#BB86FC]" />
                <p className="text-white text-[18px]">
                  e.alimardani1379@gmail.com
                </p>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="size-5 -mb-[1px] fill-[#BB86FC]" />
                <p className="text-white text-[18px]">+98 901 140 6900</p>
              </li>
            </ul>
            <hr className="mt-5 mb-5 border border-slate-300 h-[3px]" />
            <div className="w-full">
              <h2 className="flex items-center space-x-2 my-5">
                <FaStarOfLife className="size-4  fill-[#BB86FC]" />
                <h3 className="text-white text-3xl font-bold">Skills</h3>
              </h2>
              <div className="text-white text-2xl font-bold gap-y-3 flex flex-col pl-[1px]">
                <p className="bg-[rgba(0,0,0,0.3)] py-3 rounded-xl pl-2 word-spacing-md">
                  - React Js
                </p>
                <p className="bg-[rgba(0,0,0,0.3)] py-3 rounded-xl pl-2 word-spacing-md">
                  - JavaScript
                </p>
                <p className="bg-[rgba(0,0,0,0.3)] py-3 rounded-xl pl-2 word-spacing-md">
                  - Tailwind Css
                </p>
              </div>
              <hr className="mt-5 mb-5 border border-slate-300 h-[3px]" />
              <h2 className="flex items-center space-x-2 my-5">
                <FaGlobe className="size-5  fill-[#BB86FC]" />
                <h3 className="text-white text-3xl font-bold">Languages</h3>
              </h2>
              <div className="text-white text-2xl font-bold gap-y-3 flex flex-col pl-[1px]">
                <p className="bg-[rgba(0,0,0,0.3)] py-3 rounded-xl pl-2 word-spacing-md">
                  - Persian
                </p>
                <p className="bg-[rgba(0,0,0,0.3)] py-3 rounded-xl pl-2 word-spacing-md">
                  - English
                </p>
              </div>
              <hr className="mt-5 mb-5 border border-slate-300 h-[3px]" />
              <h2 className="flex items-center space-x-2 my-5">
                <FaCertificate className="size-5  fill-[#BB86FC]" />
                <h3 className="text-white text-3xl font-bold">Education</h3>
              </h2>
              <div className="text-white  gap-y-3 flex flex-col pl-[1px]">
                <h5 className="text-xl">Azad University, Mashad,Iran</h5>
                <div className="flex items-center gap-x-2 font-semibold">
                  <FaCalendar className="size-4  fill-[#BB86FC]" />
                  <span>2022</span> -{" "}
                  <span className="bg-[#BB86FC] rounded-sm p-1">Currnet</span>
                </div>
                <p className=" leading-9 text-[18px]">
                  Bachelor of Software Engineering at Azad University, Mashhad,
                  Iran. Focused on software development, algorithms, data
                  structures, and web application development with hands-on
                  projects in React, JavaScript, and modern frontend frameworks.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Right Side */}
      <section className="m-[10px] w-[70%] max-md:w-full max-lg:w-1/2 max-md:m-0 flex flex-col max-md:flex-col-reverse gap-y-5 ">
        {/* first child */}
        <section className="bg-[#303134] max-md:p-3 p-6">
          <div className="flex flex-col gap-y-14">
            <div>
              <h2 className="flex items-center space-x-3 my-5">
                <FaSuitcase className="size-7  fill-[#BB86FC]" />
                <h3 className="text-white text-[28px] font-bold">
                  Work Experience
                </h3>
              </h2>
              <div className="text-white  gap-y-6 flex flex-col pl-[1px]">
                <h5 className="text-[24px]">
                  Frontend Developer (Personal Projects)
                </h5>
                <div className="flex items-center gap-x-2 font-semibold">
                  <FaCalendar className="size-4  fill-[#BB86FC]" />
                  <span>2023</span> -
                  <span className="bg-[#BB86FC] rounded-sm p-1">Present</span>
                </div>
                <p className="leading-10 text-[18px]">
                  Developed multiple React projects including an e-commerce
                  template, cryptocurrency dashboard, and interactive landing
                  pages. Gained hands-on experience with{" "}
                  <b>
                    React.js, Tailwind CSS, API integration, responsive design,
                    and component-based architecture.
                  </b>
                </p>
              </div>
              <hr className="border mt-12 border-slate-300 h-[3px]" />
            </div>

            <div>
              <div className="text-white  gap-y-6 flex flex-col pl-[1px]">
                <h5 className="text-[24px]">React Capstone Project</h5>
                <div className="flex items-center gap-x-2 font-semibold">
                  <FaCalendar className="size-4  fill-[#BB86FC]" />
                  <span>2022</span> -<span>2023</span>
                </div>
                <p className="leading-8 text-[18px]">
                  Built a responsive web application as a university capstone
                  project using React.js and Tailwind CSS, implementing
                  interactive UI, state management, and API integration.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        {/* second child */}
        <section className="bg-[#303134] max-md:p-3 p-6">
          <div className="flex flex-col gap-y-14">
            <div>
              <h2 className="flex items-center space-x-3 my-5">
                <FaCode className="size-7  fill-[#ffcc23]" />
                <h3 className="text-white text-[28px] font-bold">Projects</h3>
              </h2>
              <div className="text-white  gap-y-3 flex flex-col pl-[1px]">
                <h5 className="text-[22px] text-blue-400">
                  CodeFlow AI – SaaS Landing Page
                </h5>
                <p className="leading-10 text-[18px]">
                  A modern developer-focused landing page built with React,
                  featuring interactive UI elements, animated sections, and live
                  code previews with syntax highlighting.
                </p>
                <div className="flex flex-col justify-start gap-y-3">
                  <p className="bg-clip-text">
                    <span className="text-xl font-semibold">Features : </span>
                    Interactive hero, live code preview, reusable components,
                    animated UI
                  </p>
                  <p>
                    <span className="text-xl font-semibold bg-clip-text">
                      Tech :
                    </span>
                    React, Tailwind CSS, JavaScript, react-icons,
                    react-syntax-highlighter
                  </p>
                  <div className="flex gap-x-5 pl-1  text-xl mt-5 relative">
                    <a
                      className=" flex pl-7 gap-x-2 underline decoration-2 decoration-[#D4AF37] underline-offset-6"
                      href="https://github.com/Ehsan-al79/ModernWebSite"
                      target="_blank"
                    >
                      <FaGithub className="size-6 absolute left-0 bottom-[2px]" />
                      GitHub
                    </a>
                    |
                    <a
                      className=" underline decoration-2 decoration-[#D4AF37] underline-offset-6"
                      href="https://modern-web-site.vercel.app"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <hr className="border mt-12 border-slate-300 h-[3px]" />
            </div>

            <div>
              <div className="text-white  gap-y-3 flex flex-col pl-[1px]">
                <h5 className="text-[22px] text-blue-400 text-nowrap">
                  CryptoTracker – Crypto Dashboard
                </h5>
                <p className="leading-10 text-[18px]">
                  A sleek and responsive React application providing real-time
                  cryptocurrency market data with interactive charts and
                  detailed analytics.
                </p>
                <div className="flex flex-col justify-start gap-y-3">
                  <p className="bg-clip-text">
                    <span className="text-xl font-semibold">Features : </span>
                    Live prices, interactive charts, detailed analytics, search,
                    pagination
                  </p>
                  <p>
                    <span className="text-xl font-semibold bg-clip-text">
                      Tech :
                    </span>
                    React, Recharts, REST API (CoinGecko)
                  </p>
                  <div className="flex gap-x-5 pl-1 text-xl mt-5 relative">
                    <a
                      className=" flex gap-x-2 pl-7 underline decoration-2 decoration-[#D4AF37] underline-offset-6"
                      href="https://github.com/Ehsan-al79/CryptoApp"
                      target="_blank"
                    >
                      <FaGithub className="size-6 absolute left-0 bottom-[2px]" />
                      GitHub
                    </a>
                    |
                    <a
                      className=" underline decoration-2 decoration-[#D4AF37] underline-offset-6"
                      href="https://crypto-app-chi-jet.vercel.app"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <hr className="border mt-12 border-slate-300 h-[3px]" />
            </div>

            <div>
              <div className="text-white  gap-y-3 flex flex-col pl-[1px]">
                <h5 className="text-[22px] text-blue-400">
                  BootApp – React E-commerce
                </h5>
                <p className="leading-10 text-[18px]">
                  A clean and modern e-commerce template built with React +
                  Vite, optimized for performance, scalability, and full mobile
                  responsiveness.
                </p>
                <div className="flex flex-col justify-start gap-y-3">
                  <p className="bg-clip-text">
                    <span className="text-xl font-semibold">Features : </span>
                    Cart management, category filtering, product search,
                    responsive UI
                  </p>
                  <p>
                    <span className="text-xl font-semibold bg-clip-text">
                      Tech :
                    </span>
                    React, Vite, Tailwind CSS v4, JavaScript
                  </p>
                  <div className="flex gap-x-5 pl-1 text-xl mt-5 relative">
                    <a
                      className=" flex gap-x-2 pl-7 underline decoration-2 decoration-[#D4AF37] underline-offset-6"
                      href="https://github.com/Ehsan-al79/BootApp"
                      target="_blank"
                    >
                      <FaGithub className="size-6 absolute left-0 bottom-[2px]" />
                      GitHub
                    </a>
                    |
                    <a
                      className=" underline decoration-2 decoration-[#D4AF37] underline-offset-6"
                      href="https://boot-app-bzip.vercel.app"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
