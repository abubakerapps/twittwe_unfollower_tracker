import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  function toNavigate() {
    window.location.href = "/HomePage";
  }
  useEffect(() => {
    setTimeout(toNavigate, 3000);
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Loading</title>
        <meta name="description" content="Loading" />
      </Head>
      <Image src="/../public/logo.png" alt="logo" width={150} height={150} />
    </div>
  );
}
