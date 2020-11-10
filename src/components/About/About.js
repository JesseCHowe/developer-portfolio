import React from "react";
import styles from "./About.module.css";

const About = () => {
  const dummyData = [
    {
      title: "Freelance Information Designer",
      active: "May 2015 - Present",
      desc:
        "Currently, I work as a contract information designer for many different journalism outlets across the United States. I’m consulted on design decisions around interactive graphics and visualizations along with building custom graphics in javascript and D3.js.",
    },
    {
      title: "Freelance Information Designer",
      active: "May 2015 - Present",
      desc:
        "Currently, I work as a contract information designer for many different journalism outlets across the United States. I’m consulted on design decisions around interactive graphics and visualizations along with building custom graphics in javascript and D3.js.",
    },
    {
      title: "Freelance Information Designer",
      active: "May 2015 - Present",
      desc:
        "Currently, I work as a contract information designer for many different journalism outlets across the United States. I’m consulted on design decisions around interactive graphics and visualizations along with building custom graphics in javascript and D3.js.",
    },
    {
      title: "Freelance Information Designer",
      active: "May 2015 - Present",
      desc:
        "Currently, I work as a contract information designer for many different journalism outlets across the United States. I’m consulted on design decisions around interactive graphics and visualizations along with building custom graphics in javascript and D3.js.",
    },
  ];
  return (
    <div className={styles.resumePage}>
      <div className={styles.aboutMe}>
        <span className={styles.im}>I'm</span>
        <span className={styles.jessehowe}>Jesse Howe</span>
        <p>
          A front end developer with a background in data visualization,
          animation, and journalism. I've worked on graphics and interactive
          projects for{" "}
          <a href="https://www.theinformation.com/">The Information</a>,{" "}
          <a href="https://fivethirtyeight.com/">FiveThirtyEight</a>,{" "}
          <a href="https://oklahomawatch.org/">Oklahoma Watch</a>, and{" "}
          <a href="https://www.nbm.org/">The National Building Museum.</a> You
          can view my résumé below.
        </p>
        <p>
          You can also contact me at{" "}
          <span className={styles.hl}>jchowe93@gmail.com</span>
        </p>
      </div>
      <div className={styles.resume}>
        <div>
          <h2>Experience</h2>
          {dummyData.map((d, i) => {
            return (
              <div key={`resume${i}`} className={styles.role}>
                <h3>Freelance Information Designer</h3>
                <span>May 2015 - Present</span>
                <p>
                  Currently, I work as a contract information designer for many
                  different journalism outlets across the United States. I’m
                  consulted on design decisions around interactive graphics and
                  visualizations along with building custom graphics in
                  javascript and D3.js.
                </p>
              </div>
            );
          })}
        </div>
        <div>
          <h2>Education</h2>
          <div>
            <h3>University of Kansas City Missouri / B.S. Geography</h3>
            <span>August 2011 - May 2015</span>
            <p>
              Participated in many urban planning research studies with a focus
              on disaster preparedness post-hurricane sandy. Trained in the use
              of GIS software and satellite imagery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
