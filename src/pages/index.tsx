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
      <section className=" bg-main-color h-screen w-screen   h-full w-full flex justify-center">
        <div className="w-[300px] h-[320px] max-w-md    mx-[20px] mb-[20px]	bg-white"></div>
        <div className="flex flex-col">
          <div className="w-[880px] h-[150px] mb-[20px] border-solid border-2"></div>
          <div className="w-[880px] h-[150px]  border-solid border-2"></div>
        </div>
      </section>
    </div>
  );
}
