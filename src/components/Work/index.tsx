import styles from "./styles.module.scss";

import React, { useState } from "react";
import Activies from "./Activities/activies";

function Work({ names, tasks }: any) {
  const [nameSelected, setNameSelected] = useState("");
  return (
    <div className={styles.container}>
      <div>
        {names.map((name: string) => {
          return (
            <button
              onClick={() => {
                setNameSelected(name);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              {name}
            </button>
          );
        })}
      </div>
      {nameSelected === "Ruan" ? (
        <Activies name={nameSelected} tasks={tasks[0]} />
      ) : (
        ""
      )}
      {nameSelected === "Thiago" ? (
        <Activies name={nameSelected} tasks={tasks[1]} />
      ) : (
        ""
      )}
      {nameSelected === "João" ? (
        <Activies name={nameSelected} tasks={tasks[2]} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Work;
