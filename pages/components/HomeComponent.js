import styles from "../../styles/HomePage.module.css";
import { useState } from "react";

import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";

export default function HomeComponent({ click }) {
  const [isLoading, setIsLoading] = useState(false);
  function handleTrackClick() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={styles.homeComponent}>
      <div className={styles.subContainer}>
        <div className={styles.topContainer}>
          <div className={styles.textHolder}>
            <p>Enter Your Username</p>
          </div>
          <input className={styles.input} placeholder="Username" />
        </div>

        <div onClick={() => handleTrackClick()} className={styles.h2}>
          {isLoading ? <Spinner size={20} /> : <h3>Track</h3>}
        </div>
      </div>
    </div>
  );
}
