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
                if (nameSelected != '') {

                  setNameSelected("");
                } else {
                  setNameSelected(name);
                }


              }}
            >


              <span></span>
              <span></span>
              {nameSelected == '' ? (
                <img src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg" alt="avatar"></img >
              ) : ("")}

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
