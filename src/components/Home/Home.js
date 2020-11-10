import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import homeData from "../../assets/homeData";

const Home = () => {
  return (
    <div className={styles.projectList}>
      {homeData.map((d) => {
        return (
          <Link key={d.page} to={`/${d.page}`}>
            <img
              alt="test"
              src={require(`../../assets/images/covers/${d.cover}`).default}
            />
            <div className={styles.title}>
              <div>
                <span>{d.type}</span>
                <h2>{d.title}</h2>
                <span>— View —</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
