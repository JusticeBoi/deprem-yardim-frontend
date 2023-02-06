import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";

import dynamic from "next/dynamic";
import Container from "@mui/material/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const LeafletMap = dynamic(() => import("@/components/Map"), { ssr: false });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <main className={styles.main}>
        <Container>
          <h2 className={inter.className}>
            Map <span>-&gt;</span>
          </h2>
          <LeafletMap />
        </Container>
      </main>
    </>
  );
}
