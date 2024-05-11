import { Book } from "lucide-react";
import { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experienceData = [
  {
    company: "Nigeria Meteorological Agency (NIMET)",
    position: "Student Intern",
    description: [
      "Collaborated with senior colleagues at Nimet Agency to establish effective communication channels with neighboring agencies, facilitating the exchange of vital meteorological information through metar messages.",
      "Conducted regular observations around the aerodrome to monitor and record weather conditions, ensuring accurate and up-to-date data for aviation and meteorological purposes.",
      "Transitioned into the forecasting department to expand my knowledge and skills in synoptic analysis and interpretation of weather patterns at various scales.",
      "Participated in briefings on observed weather phenomena, providing insightful analyses and contributing to the understanding of atmospheric dynamics.",
      "Actively engaged in ongoing learning and professional development, staying updated on the latest advancements in meteorological techniques and technologies.",
      "Actively engaged in ongoing learning and professional development, staying updated on the latest advancements in meteorological techniques and technologies."
    ],
    icon: <Book className="w-6 h-6 text-black" />,
    date: "05-21 | 10-21"
  },
  {
    company: "Udacity",
    position: "Student Member",
    description: [
      "Received a scholarship from Udacity to participate in the ALX-T full-stack program, showcasing a commitment to continuous learning and professional growth.",
      "Demonstrated proficiency in backend development through the implementation of robust API endpoints, following industry best practices for database management and MVC architecture using Flask.",
      "Developed an API backend for the Fyyur musical app, successfully creating models and views to enable seamless interaction between the frontend and backend components.",
      "Integrated Auth0 authentication into a coffee shop app, ensuring secure user authentication and authorization for enhanced user experience and data protection.",
      "Established a comprehensive documentation process for a bookstore app, highlighting the importance of clear and concise documentation for developers and stakeholders."
    ],
    icon: <Book className="w-6 h-6 text-black" />,
    date: "05-22 | 09-22"
  },
  {
    company: "R&I Software",
    position: "Software Engineer",
    description: [
      "Worked as a Full-stack developer at R&I Software, contributing to both backend and frontend development.",
      "Created new features for the backend using Flask, a Python web framework. Implemented functionalities such as registration and login through the development of APIs.",
      "Implemented the backend functionalities on the frontend.",
      "Collaborated with the frontend team to create a seamless flow between the backend and frontend, ensuring a smooth user experience.",
      "Developed new features for generating and styling the navigation bar.",
      "Promoted code reusability by breaking down complex components into smaller, reusable ones."
    ],
    icon: <Book className="w-6 h-6 text-black" />,
    date: "10-22 | 03-23"
  },
  {
    company: "Ajioz Limited",
    position: "Software Engineer",
    description: [
      "Collaborated as a full-stack engineer at Ajiozi Ltd, working closely with yeager_ai team on the development of a web application for their ongoing success AI researched model output.",
      "Developed both the backend and frontend components of the application using Django.",
      "Leveraged the Metronic Bootstrap 5 framework to create visually appealing and user-friendly interfaces, ensuring a seamless user experience.",
      "Implemented performance optimization techniques using Cookiecutter to enhance the speed and efficiency of the application, delivering a smooth and responsive user interface.",
      "Integrated advanced features such as WebSocket connections using tools like Celery and Django Channels, enabling real-time communication and updates within the Django application.",
      "Collaborated effectively with the team, adhering to best practices, and participating in code reviews, bug fixing, and feature enhancements to ensure the stability and usability of the product."
    ],
    icon: <Book className="w-6 h-6 text-black" />,
    date: "2023"
  },
  {
    company: "MagicPitch AI",
    position: "Software Developer",
    description: [
      "Collaborated with the MagicPitch team on a wide range of LLM tasks and automation.",
      "Implemented desktop application automation using pywinauto for efficient workflow automation which solved manual labor tasks.",
      "Conducted web scraping tasks using tools such as Scrapy and Beautiful Soup (bs4) to gather valuable data.",
      "Contributed to the development of frontend interfaces using modern technologies like React (Next.js) and Tailwind CSS, ensuring a seamless user experience.",
      "Engaged in API integration processes by interacting with Python-based API requests, leveraging frameworks like LangChain and various AI resources."
    ],
    icon: <Book className="w-6 h-6 text-black" />,
    date: "09-23 | 12-23"
  }
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="text-black w-full h-full">
      <VerticalTimeline lineColor="rgb(55, 65, 81)" className="!m-0 !w-full md:!w-[55vw]">
        {experienceData
          .slice()
          .reverse()
          .map((exp, index) => (
            <VerticalTimelineElement
            
           
              key={index}
              className="!w-full md:w-1/2"
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                textAlign: "left",
                border: "1px solid rgba(0,0,0,0.05)",
                padding: "1rem"
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af"
              }}
              date={exp.date}
              dateClassName="text-white text-sm text-red-400 font-semibold w-fit"
              icon={exp.icon}
              iconClassName="!w-10 !h-10 ring-4 ring-red-400 bg-white lg:!m-0 lg:!left-1/2 lg:!top-8 lg:!-translate-x-1/2 lg:!-translate-y-1/2"
            >
              <h3 className="font-bold capitalize bg-white rounded-b-lg rounded-s-lg p-3 tracking-wider">
                {exp.position}
              </h3>

              {exp.description.length > 3 ? (
                <>
                  {exp.description.slice(0, 3).map((bullet, bulletIndex) => (
                    <ul
                      key={bulletIndex}
                      className="!mt-1 !text-xs !text-gray-700 p-2"
                    >
                      <li
                        className={`!list-disc text-sm ${
                          expandedIndex === index ? "" : "truncate ..."
                        }`}
                      >
                        {bullet}
                      </li>
                    </ul>
                  ))}
                  {expandedIndex === index ? (
                    exp.description.slice(3).map((bullet, bulletIndex) => (
                      <ul
                        key={bulletIndex}
                        className="!mt-1 !text-xs !text-gray-700 p-2"
                      >
                        <li className="!list-disc text-sm">{bullet}</li>
                      </ul>
                    ))
                  ) : (
                    <button
                      className="text-blue-500 cursor-pointer pl-2"
                      onClick={() => setExpandedIndex(index)}
                    >
                      Read more
                    </button>
                  )}
                </>
              ) : (
                exp.description.map((bullet, bulletIndex) => (
                  <ul
                    key={bulletIndex}
                    className="!mt-1 !text-xs !text-gray-700 p-2"
                  >
                    <li className="!list-disc text-sm">{bullet}</li>
                  </ul>
                ))
              )}

              <p className="font-semibold bg-white rounded-b-lg rounded-s-lg p-2 !text-sm w-fit">{exp.company}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
