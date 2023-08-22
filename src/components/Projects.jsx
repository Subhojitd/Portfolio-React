import React from "react";
import bengalifood from "../assets/portfolio/bengalifood.png";
import gitHub from "../assets/portfolio/gitHub.png";
import GroceryApp from "../assets/portfolio/GroceryApp.png";
import nexusApp from "../assets/portfolio/nexusApp.png";
import QuizApp_2 from "../assets/portfolio/QuizApp_2.png";
import TextAnalyzer from "../assets/portfolio/TextAnalyzer.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: bengalifood,
      demo:'https://bong-appetite.netlify.app/',
      code:'https://github.com/Subhojitd/CodeClauseInternship_Landing-Page'
    },
    {
      id: 2,
      src: TextAnalyzer,
      demo:'https://text-counterr.netlify.app/',
      code:'https://github.com/Subhojitd/TextAnalyzer'
    },
    {
      id: 3,
      src: nexusApp,
      demo:'https://nexus-image-finder.netlify.app/',
      code:'https://github.com/Subhojitd/ImageFinderApp'
    },
    {
      id: 4,
      src: gitHub,
      demo:'https://github-user-finderr.netlify.app/',
      code:'https://github.com/Subhojitd/github-user-finder'
    },
    {
      id: 5,
      src: QuizApp_2,
      demo:'https://bong-appetite.netlify.app/',
      code:'https://github.com/Subhojitd/CodeClauseInternship_Landing-Page'
    },
    {
      id: 6,
      src: GroceryApp,
      demo:'https://bong-appetite.netlify.app/',
      code:'https://github.com/Subhojitd/CodeClauseInternship_Landing-Page'
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            -: &nbsp; Projects   &nbsp;   :-
          </p>
          <p className="py-6 text-xl">Check out some of my work here..</p>
        </div>

        {/* Projects */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {portfolios.map(({ id, src, demo,code}) => (
            // Projects starts here....
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-110"
              />
              <div className="flex items-center justify-center">
                <a href={demo} target='_blank' rel='noreferrer'  className="w-1/2 px-6 py-3 m-4 mx-6  duration-200 hover:scale-105">
                  Demo
                </a>
                <a href={code} target='_blank' rel='noreferrer'  className="w-1/2 px-6 py-3 m-4 mx-6 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
