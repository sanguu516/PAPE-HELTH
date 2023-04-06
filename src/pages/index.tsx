import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "./header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Header />
      <section className=" bg-main-color w-full h-full flex justify-center">
        <div className="w-[300px] h-[320px] mx-[20px] mb-[20px]	bg-white drop-shadow-xl"></div>
        <div className="flex flex-col w-[880px] h-[320px]">
          <div className="w-full h-full mb-[20px] border-solid border-2"></div>
          <div className="w-full h-full  border-solid border-2"></div>
        </div>
      </section>
    </div>
  );
}
