/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mx-0 px-2 py-12">
       <Head>
        <title> About </title>
        <meta
          name="description"
          content=" Publish blog in your way. Whether you’d like to share your knowledge, We will help you to create a unique and beautiful blog."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/about.jpg" alt="about page picture" className="w-full" />
      <h1 className="ml-3 text-xl">About Website</h1>
      <p className="text-center">
        This website is created for only for personal project.
        <br /> Content and resources are freely available and we prefer to keep
        it that way to encourage our readers acquire as many skills as they
        would like to.
        <br />
        We have established a Digital Content Marketplace for eBooks.
      </p>

      <small>Rajesh Singh</small>
    </div>
  );
};

export default index;
