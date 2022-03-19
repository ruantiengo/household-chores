import styles from "./styles.module.scss";

import React, { useState } from "react";

function Work({ names }: any) {
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
      {nameSelected === "Ruan" ? "Ruan" : ""}
      {nameSelected === "Thiago" ? "Thiago" : ""}
      {nameSelected === "João" ? "João" : ""}
    </div>
  );
}

export default Work;
