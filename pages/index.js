import React from "react";
import Head from "next/head";
import { antennas } from "../public/antennas";
import AntennaCard from "../components/AntennaCard";
import CardCarousel from "../components/CardCarousel";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-0 px-2 py-12">
      <Head>
        <title> Microwave Theory & Antennas</title>
        <meta
          name="description"
          content=" Publish blog in your way. Whether you’d like to share your knowledge, We will help you to create a unique and beautiful blog."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CardCarousel />
        {antennas.map((antenna) => {
          return <AntennaCard key={antenna.id} antenna={antenna} />;
        })}
      </main>
    </div>
  );
}
