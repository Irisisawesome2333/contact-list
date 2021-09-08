import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Contact List | Home</title>
        <meta name="keywords" content="contacts" />
      </Head>

      <div>
        <h1 className={styles.title}> HomePage </h1>
        <p className={styles.text}>
          Organize your contacts, create long lasting bondings
        </p>
        <Link href="/contacts">
          <a className={styles.btn}>view all the contacts</a>
        </Link>
      </div>
    </>
  );
}
