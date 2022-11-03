/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { antennas } from "../../public/antennas";
import Link from "next/link";

const Antenna = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [antenna, setAntenna] = useState({});
  useEffect(() => {
    if (slug) {
      const ant = antennas.find((antenna) => antenna.slug === slug);
      if (!ant) {
        router.push("/404");
      } else {
        setAntenna(ant);
      }
    }
  }, [antenna, router, slug]);

  return (
    <div className="w-full flex items-center justify-center mx-0 px-2 py-12">
      <Head>
        <title> {antenna.title} </title>
        <meta
          name="description"
          content=" Publish blog in your way. Whether you’d like to share your knowledge, We will help you to create a unique and beautiful blog."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="pb-8">
          <h1 className="text-2xl cool-link w-fit cursor-pointer">
            {" "}
            {antenna.title}{" "}
          </h1>
          {antenna.detail &&
            antenna.detail.map((info) => {
              return (
                <div key={info.description}>
                  {info.image && (
                    <img
                      className="object-fill w-full overflow-hidden "
                      src={info.image}
                      alt="antenna image"
                    />
                  )}
                  <br />
                  <p>{`-> ${info.description}`}</p>
                </div>
              );
            })}

          {antenna.subAntennas && (
            <div>
              <br />
              <h2 className="text-lg w-fit border-b-2 border-gray-400 mb-2">Types :</h2>
              <div className="flex flex-col justify-start flex-wrap w-full gap-6">
                {antenna.subAntennas.map((subAntenna) => {
                  return (
                    <div
                      key={subAntenna.title}
                      className="flex flex-row justify-start w-fit gap-3"
                    >
                      <img
                        className="h-36 w-1/3  object-fill overflow-hidden shadow-lg"
                        src={subAntenna.detail[0].image}
                        alt="sub antenna image"
                      />
                      <div className="flex flex-col w-2/3">
                        <Link href={`/antenna/type/${subAntenna.slug}`}>
                          <h2 className="text-sm text-center cool-link w-fit cursor-pointer">
                            {subAntenna.title}
                          </h2>
                        </Link>
                        <p className="text-sm text-left w-fit">
                          {subAntenna.detail[0].description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {antenna.advantages && (
            <div>
              <br />
              <h2 className="text-lg w-fit border-b-2 border-gray-400">Advantages :</h2>
              <ul className="flex justify-start flex-wrap flex-col w-full list-disc">
                {antenna.advantages.map((adv) => {
                  return (
                    <li key={adv}>
                      <p>{adv}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {antenna.disadvantages && (
            <div>
              <br />
              <h2 className="text-lg w-fit border-b-2 border-gray-400">Disadvantages :</h2>
              <ul className="flex justify-start flex-wrap flex-col w-full list-disc">
                {antenna.disadvantages.map((adv) => {
                  return (
                    <li key={adv}>
                      <p>{adv}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Antenna;
