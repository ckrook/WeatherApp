import Head from "next/head";
import Image from "next/image";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Sidebar />
        <Center />
      </main>
    </div>
  );
}
