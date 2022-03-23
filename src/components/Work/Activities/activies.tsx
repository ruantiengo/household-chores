import React from "react";
import styles from "./styles.module.scss";

const Activies = ({ name, tasks }: any) => {
  return (
    <>
      <section
        className={styles.container}
        style={{
          boxShadow: "10px 5px 5px black",
        }}
      >
        <h1>{name}</h1>
        <section className={styles.content}>
          <h3>Tarefas da semana</h3>
          <ul>
            {tasks.map((task: any) => {
              return <li>{task}</li>;
            })}
          </ul>
        </section>
      </section>
      <button className={`${styles.nextWeek} ${styles.ease}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={35}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </>
  );
};

export default Activies;
