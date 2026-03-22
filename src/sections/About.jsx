import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import DownloadResumeButton from "../components/DownloadResumeButton";
import { Frameworks } from "../components/Frameworks";
import { education, experiences } from "../constants";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Aakash</p>
            <p className="subtext">
              Over the past year, I've developed full-stack web applications
              using the MERN stack, focusing on building scalable backend
              systems, efficient APIs, and responsive user interfaces.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="MongoDB"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="Express.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Node.js"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="MySQL"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="AWS"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{
                rotate: "-45deg",
                top: "70%",
                left: "25%",
                filter: "hue-rotate(210deg)",
              }}
              image="assets/logos/javascript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/cplusplus.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%] pr-4">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-white mb-4 tracking-wider">
                  EDUCATION
                </p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Computer Science Engineering (B.Tech)
                    </p>
                    <p className="text-xs text-neutral-400">
                      2023 – Present | 6th Semester
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Self-Driven Learning
                    </p>
                    <p className="text-xs text-neutral-400">
                      2021 – Present | AI • Web Development • System Design
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-600 pt-2">
                <p className="text-xs font-bold text-white mb-2 tracking-wider">
                  EXPERIENCE
                </p>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Full-Stack Developer
                  </p>
                  <p className="text-xs text-neutral-400 mb-2">
                    2025 – Present
                  </p>
                </div>
              </div>
            </div>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-6 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <CopyEmailButton />
              <DownloadResumeButton resumeFile="/resume.pdf" />
            </div>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              MongoDB, Express.js, React, Node.js, MySQL, AWS, Postman, HTML,
              CSS, JavaScript, C++, Data Structures & Algorithms
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
