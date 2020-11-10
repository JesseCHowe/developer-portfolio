import React from "react";
import styles from "./Project.module.css";
import projectData from "../../assets/projectData";

const Project = ({ match }) => {
  console.log(match.params.projectId);
  const data = projectData[match.params.projectId];
  return (
    <div className={styles.content}>
      <div>
        <div className={styles.desc}>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
          <a href={data.site}>Project Site</a>
          <div className={styles.tools}>
            <p>Tools:</p>
            {data.tools.map((tool) => {
              return <span key={tool}>{tool}</span>;
            })}
          </div>
        </div>
      </div>
      <div className={styles.images}>
        {data.images.map((image, i) => {
          return (
            <img
              className={image.boxShadow ? styles.boxShadow : null}
              key={`${image}-${i}`}
              src={
                require(`../../assets/images/${match.params.projectId}/${image.src}`)
                  .default
              }
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
