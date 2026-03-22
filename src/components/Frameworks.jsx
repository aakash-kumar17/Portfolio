import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "react",
    "javascript",
    "git",
    "github",
    "visualstudiocode",
    "cplusplus",
  ];

  const textSkills = ["Node.js", "Express.js", "MongoDB", "Postman"];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
        {textSkills.map((skill, index) => (
          <div
            key={`text-${index}`}
            className="flex items-center justify-center w-10 h-10 text-xs font-bold text-white bg-gradient-to-r from-orange to-coral rounded-lg"
          >
            {skill}
          </div>
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
        {textSkills.map((skill, index) => (
          <div
            key={`text-reverse-${index}`}
            className="flex items-center justify-center w-8 h-8 text-xs font-bold text-white bg-gradient-to-r from-orange to-coral rounded-lg"
          >
            {skill.split(".")[0]}
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
