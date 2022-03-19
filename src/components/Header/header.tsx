import React from "react";
import styles from "./styles.module.scss";
function Header({ currentView, setCurrentView }: any) {
  return (
    <header className={styles.nav}>
      <div className={styles.content}>
        <a href="#" onClick={() => setCurrentView(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            xHeight={50}
            viewBox="0 0 24 24"
            stroke={currentView == 1 ? "white" : "currentColor"}
            stroke-width="2"
            height={30}
            width={30}
          >
            <path
              stroke-linejoin="round"
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              stroke-linecap="round"
            />
          </svg>
        </a>
        <a href="#" onClick={() => setCurrentView(2)}>
          <svg
            height={40}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke={currentView == 2 ? "white" : "currentColor"}
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </a>
        <a href="#" onClick={() => setCurrentView(3)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="none"
            viewBox="0 0 24 24"
            stroke={currentView == 3 ? "white" : "currentColor"}
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
