import Head from "next/head";
import React from "react";
import { Properties } from "./../../public/antenna_properties";
const Charactristics = () => {
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
        <div className="mb-6">
          <h1 className="text-xl cool-link w-fit cursor-default">
            Fundamental Parameters of Antennas (Characteristics)
          </h1>
          <p className="mb-4">
            By now, we have a basic understanding of an antenna and how it is an
            essential component in a Wireless Communication system.
            <br /> The next important thing to understand is that the
            characteristics of a typical wireless communication system are
            dependent on the characteristics of the antenna used in the system.{" "}
            <br /> For example, the operational characteristics of a
            communication system find back its roots to the directional
            characteristics of the antenna. Irrespective of the application that
            an antenna is used in, all the antennas are associated with a few
            fundamental parameters. <br /> These parameters are sometimes also
            called as Properties of Antenna or Characteristics of Antenna.
            <br /> Certain basic characteristics of antenna are listed below:
            The different properties of types of antennas include the follwoing.
          </p>
          <ul >
            {Properties.map((property, index) => {
              return (
                <a key={index} href={`#${property.id}`} className="flex justify-start">
                    {"->"}
                  <li className="list-none list-inside cool-link w-fit mx-2">
                    {property.name}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
        {Properties.map((property) => {
          return (
            <div
              className="flex flex-col mb-3"
              key={property.id}
              id={property.id}
            >
              <h1 className="text-xl border-b-2 border-gray-400 w-fit cursor-default">
                {property.name}
              </h1>
              <div className="flex flex-col">
                {property.description.map((desc) => {
                  return (
                    <div key={desc}>
                      <p className="text-md text-left w-fit">{`-> ${desc}`}</p>
                      <br />
                    </div>
                  );
                })}
              </div>
              <hr className="mt-3" />
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Charactristics;
