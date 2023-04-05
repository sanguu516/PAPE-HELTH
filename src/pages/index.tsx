import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-main-color conta h-full w-full flex justify-center">
        <div className="w-[1000px] h-[320px] flex justify-center border-solid border-2 "></div>
      </section>
    </>
  );
}
