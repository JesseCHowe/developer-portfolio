import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  const dummyData = [0, 1, 2, 3, 4];

  return (
    <div className={styles.projectList}>
      {dummyData.map((d) => {
        return (
          <Link key={d} to={`/${d}`}>
            <img
              alt="test"
              src="https://images.squarespace-cdn.com/content/v1/51217827e4b0dce195c53752/1581646790198-PRBBFE4FKHMRQHPFCRO3/ke17ZwdGBToddI8pDm48kPAYLZwXCk8Zy5Hm3O9EMdtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI5DNXNWK6zXslJGdvaBOi9RmwAX1LJ6RFXCuNB6nnX0M/jordan-gif.gif?format=1500w"
            />
            <div className={styles.title}>
              <div>
                <span>Front End</span>
                <h2>Triple Triad</h2>
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
