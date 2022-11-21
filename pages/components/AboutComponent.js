import styles from "../../styles/HomePage.module.css";
import { useState } from "react";

import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";

export default function AboutComponent({ click }) {
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
        <h1>About Us</h1>
      </div>
    </div>
  );
}
