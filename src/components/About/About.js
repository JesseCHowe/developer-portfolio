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
      title: "Data Tech / mySidewalk",
      active: "May 2019 - October 2019",
      desc:
        "I was tasked with working with the lead designer on documenting design systems related to the company’s dashboard products. This included research around the accessibility of chart types and appropriate use cases, along with color palettes and orientations based around user feedback and cognitive load concerns.",
    },
    {
      title: "Digital Marketing Associate / National Building Museum",
      active: "December 2017 - May 2019",
      desc:
        "I collaborated with the museum’s curators to bring new digital experiences including video content for exhibitions. I was also tasked with managing the museum’s WordPress site and print calendar designs.",
    },
    {
      title: "Data Reporter / Kansas City Public Television",
      active: "March 2016 - November 2017",
      desc:
        "I worked with journalists, food writers, and video producers to create charts and graphics for print, web, and television. This included launching the first interactive web projects for the company’s digital magazine Flatland.",
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
                <h3>{d.title}</h3>
                <span>{d.active}</span>
                <p>{d.desc}</p>
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

          <h2>SKILLS</h2>
          <div className={styles.role}>
            <h3>Design</h3>
            <span>Illustration & UI graphics</span> &bull;{" "}
            <span>Adobe Suite</span>
          </div>
          <div className={styles.role}>
            <h3>PROGRAMMING</h3>
            <span>HTML & CSS(SCSS)</span> &bull; <span>Javascript</span> &bull;{" "}
            <span>React & React Native</span> &bull; <span>D3.js</span>
          </div>
          <div className={styles.role}>
            <h3>PROGRAMMING</h3>
            <span>Collabrotation</span> &bull; <span>Self-starter</span> &bull;{" "}
            <span>Flexible</span> &bull;{" "}
            <span>
              Responsive to delegating, and being delegated tasks of a larger
              project
            </span>{" "}
            &bull;{" "}
            <span>
              Open to feedback and iteration from multiple stakeholders.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
