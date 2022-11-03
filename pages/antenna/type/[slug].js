/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { antennas } from "../../../public/antennas";
import Head from "next/head";
import { useRouter } from "next/router";

const SubAntenna = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [subantenna, setSubantenna] = useState({});
  useEffect(() => {
    antennas.forEach((antenna) => {
      if (antenna.subAntennas) {
        const ant = antenna.subAntennas.find(
          (subantenna) => subantenna.slug === slug
        );
        if (ant) {
          setSubantenna(ant);
        }
      }
    });
  }, [slug]);

  return (
    <div className="w-full flex items-center justify-center mx-0 px-2 py-12">
      <Head>
        <title> {subantenna.title} </title>
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
            {subantenna.title}{" "}
          </h1>
          {subantenna.detail &&
            subantenna.detail.map((info) => {
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
          {subantenna.advantages && (
            <div>
              <br />
              <h2 className="text-lg w-fit border-b-2 border-gray-400">
                Advantages :
              </h2>
              <ul className="flex justify-start flex-wrap flex-col w-full list-disc">
                {subantenna.advantages.map((adv) => {
                  return (
                    <li key={adv}>
                      <p>{adv}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {subantenna.disadvantages && (
            <div>
              <br />
              <h2 className="text-lg w-fit border-b-2 border-gray-400">
                Disadvantages :
              </h2>
              <ul className="flex justify-start flex-wrap flex-col w-full list-disc">
                {subantenna.disadvantages.map((adv) => {
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

export default SubAntenna;
