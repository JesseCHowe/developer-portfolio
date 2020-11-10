import React from "react";
import styles from "./Project.module.css";
import projectData from "../../assets/projectData";

const Project = () => {
  const data = projectData["myjslibrary"];
  return (
    <div className={styles.content}>
      <div>
        <div className={styles.desc}>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
          <div className={styles.tools}>
            <p>Tools:</p>
            {data.tools.map((tool) => {
              return <span key={tool}>{tool}</span>;
            })}
          </div>
        </div>
      </div>
      <div className={styles.images}>
        <img src={require("../../assets/images/shakespeare.jpg")} alt="test" />
      </div>
    </div>
  );
};

export default Project;
