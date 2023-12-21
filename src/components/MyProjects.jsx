import React from "react";
import web1 from "../public/web1.png";

const MyProjects = () => {
  return (
    <section>
      <div>
        <h3 className="text-xl pt-4 font-medium">My Projects</h3>
      </div>
      <div>
        <div>
          <img src={web1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
