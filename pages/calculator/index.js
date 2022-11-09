import Head from "next/head";
import React, { useState } from "react";

const Calculatro = () => {
  const [frequency, setFrequency] = useState(0);
  return (
    <section className="text-gray-600 body-font py-12">
      <Head>
        <title> About </title>
        <meta
          name="description"
          content=" Publish blog in your way. Whether you’d like to share your knowledge, We will help you to create a unique and beautiful blog."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl text-center text-gray-900 font-medium title-font">
        Yagi-Uda antenna
      </h1>
      <div className="container px-5 py-4 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full h-fit mb-10 lg:mb-0 rounded-lg overflow-hidden flex">
          <div className="w-14 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-3">
            <svg
              fill="none"
              stroke="#9333ea"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="relative mb-4 w-fit">
            <label
              htmlFor="frequency"
              className="text-gray-900 text-lg title-font font-medium  text-left"
            >
              Frequency (Mhz)
            </label>
            <input
              id="frequency"
              name="frequency"
              type="number"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              min={0}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap lg:py-0 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-3">
              <svg
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g >
                  <path
                    fill="#9333ea"
                    stroke="#9333ea"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 4v8m-4-7.5v7M12 5v16M8 5.5v5M4 6v4m16-2H4"
                  />
                </g>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium  text-left">
                Reflector-Length (m)
              </h2>
              <p className="leading-relaxed text-base text-left px-2">
                {frequency === 0 ? " " : 152 / frequency}
              </p>
            </div>
          </div>
          <div className="flex  mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-3">
              <svg
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g transform="rotate(90 12 12) translate(24 0) scale(-1 1)">
                  <path
                    fill="#9333ea"
                    stroke="#9333ea"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 22V2m0 20l-4-4m4 4l4-4M12 2L8 6m4-4l4 4"
                  />
                </g>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium  text-left">
                dipole-Length ( m)
              </h2>
              <p className="leading-relaxed text-base text-left px-2">
                {frequency === 0 ? " " : 143 / frequency}
              </p>
            </div>
          </div>
          <div className="flex  mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-3">
              <svg
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g>
                  <path
                    fill="#9333ea"
                    d="m23 12l-4 4v-3H6.83A2.99 2.99 0 0 1 4 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H19V8l4 4Z"
                  />
                </g>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium  text-left">
                first-director-Length ( m)
              </h2>
              <p className="leading-relaxed text-base text-left px-2">
                {frequency === 0 ? " " : 137 / frequency}
              </p>
            </div>
          </div>
          <div className="flex mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-3">
              <svg
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g transform="translate(24 0) scale(-1 1)">
                  <path
                    fill="#9333ea"
                    d="M19 16v-3h4v-2h-4V8l-4 4l4 4M5 8v3H1v2h4v3l4-4l-4-4m6 12h2V4h-2v16Z"
                  />
                </g>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium  text-left">
                Space between director-director (m)
              </h2>
              <p className="leading-relaxed text-base text-left px-2">
                {frequency === 0 ? " " : 39 / frequency}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculatro;

// screen_sh1.value =(152) /eval(screenValue);
// screen_sh2.value =(143) /eval(screenValue);
// screen_sh3.value =(137) /eval(screenValue);
// screen_sh4.value =(39) /eval(screenValue);
