import { GitCompareArrowsIcon } from "lucide-react";

const technologies = [
  { name: "JavaScript", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "TypeScript", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "Next.js", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "React.js", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "SCSS", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "MongoDB", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "MySQL", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "PostgreSQL", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "Node.js", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "Express.js", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "Nest.js", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "Flask", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "Django", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "AWS", icon: <GitCompareArrowsIcon className="w-4 h-4" /> },
  { name: "Netlify", icon: <GitCompareArrowsIcon className="w-4 h-4" /> }
];

const TechList = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex items-center p-2 gap-2 rounded cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          {tech.icon}
          <span className="text-sm">{tech.name}</span>
        </div>
      ))}
    </div>
  );
};

export default TechList;
