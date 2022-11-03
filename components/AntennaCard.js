/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const AntennaCard = ({ antenna }) => {
  return (
    <div className="pb-8 px-3 md:px-0">
      <Link href={`/antenna/${antenna.slug}`}>
        <h1 className="text-2xl cool-link w-fit cursor-pointer">
          {" "}
          {antenna.title}{" "}
        </h1>
      </Link>

      <div>
        {antenna.detail[0].image && (
          <img
            className="object-fill w-full md:w-3/6 overflow-hidden hover:md:scale-105 transition duration-300 ease-in-out md:shadow-xl hover:md:shadow-2xl"
            src={antenna.detail[0].image}
            alt="antenna image"
          />
        )}
        <br />
        <p>{antenna.detail[0].description}</p>
      </div>
      {antenna.subAntennas && (
        <div>
          <br />
          <h2 className="text-lg">Types :</h2>
          <div className="flex justify-start flex-wrap w-full gap-6">
            {antenna.subAntennas.map((subAntenna) => {
              return (
                <div
                  key={subAntenna.title}
                  className="flex flex-col justify-start w-fit"
                >
                  <img
                    className="h-32 w-40 object-fill overflow-hidden shadow-lg"
                    src={subAntenna.detail[0].image}
                    alt="sub antenna image"
                  />
                  <Link href={`/antenna/type/${subAntenna.slug}`}>
                    <h2 className="text-sm text-center cool-link w-fit cursor-pointer">
                      {subAntenna.title}
                    </h2>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
      <br />
      <br />
      <hr />
    </div>
  );
};

export default AntennaCard;
