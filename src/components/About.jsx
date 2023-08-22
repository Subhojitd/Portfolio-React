import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full ">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            -: &nbsp; About &nbsp; :-
          </p>
        </div>

        <p className="text-xl mt-15 text-center">
          Hey there! 👋 I'm <b><i>Subhajit Das</i></b>, a passionate MERN-Stack Web Developer with a track record of crafting exceptional web applications. My expertise lies in MongoDB for robust data handling, Express.js for a solid backend foundation, React.js for captivating user interfaces, and Node.js for powerful server-side operations  all coming together to create seamless, pixel-perfect experiences.
        </p>

        <br />

        <p className="text-xl text-center">
        Collaboration is at the heart of my process. I thrive in cross-functional teams, working alongside designers, UX/UI experts, and backend gurus to bring holistic projects to life. With an Agile approach and adept use of Git and Jira, I manage projects efficiently, maintaining version control while meeting deadlines.
        Quality is non-negotiable. I pride myself on writing clean, scalable code, fortified by rigorous testing with tools like Jest and Enzyme. Bugs stand no chance against my relentless code ninja skills! 🐱‍👤
        </p>
      </div>
    </div>
  );
};

export default About;
