import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import github from "../assets/github.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: reactImg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next Js",
      style: "shadow-white",
    },
    {
      id: 7,
      src: node,
      title: "Node Js",
      style: "shadow-green-500",
    },
    {
      id: 1,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen lg:h-full"
    >
      <div className="max-w-screen-lg mx-auto my-auto p-8 pt-10 flex flex-col justify-center w-full h-full text-white ">
        <div className=" pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500">
            {" "}
            -: &nbsp;Skills &nbsp; :-
          </p>
          <p className="py-6 text-xl">
            These are the technologies I've worked with...
          </p>
        </div>

        {/* Skills Picture */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

        {techs.map(({id,src,title,style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
