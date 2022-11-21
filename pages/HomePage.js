import Head from "next/head";
import styles from "../styles/HomePage.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";

export default function HomePage() {
  const [selected, setSelected] = useState("home");
  const [trackClick, setTrackClick] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Unfollower Tracker</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <Image src="/../public/logo.png" alt="logo" width={50} height={50} />
        </div>
        <h1 className={styles.h1}>Unfollower Tracker</h1>
        <div className={styles.navbar}>
          <Link
            onClick={() => {
              setSelected("home");
            }}
            href="#"
            className={styles.navBarItem}
            style={selected == "home" ? { color: "#00acee" } : null}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setSelected("about");
            }}
            style={selected == "about" ? { color: "#00acee" } : null}
            href="#"
            className={styles.navBarItem}
          >
            About Us
          </Link>
        </div>
      </header>
      {selected == "home" ? (
        <HomeComponent click={setTrackClick} />
      ) : (
        <AboutComponent />
      )}
    </div>
  );
}
