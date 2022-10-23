import React, { useEffect, useState } from "react";
import Head from "next/head";
import Loader from "./../components/Loader";
import SideBar from "./../components/SideBar";
import PostCard from "./../components/PostCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [page, setPage] = useState(1);

  const fetchPosts = async () => {
    try {
      const res = await fetch(
        `https://blogspacedata.onrender.com/api/v1/post?page=${page}&limit=8&sort=new`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setPosts(posts.concat(data.results));
      setTotalLength(data.totalPost);
      setPage(page + 1);
      false;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className=" w-full flex items-center justify-center mx-0 px-2 py-12">
      <Head>
        <title>BlogSpace</title>
        <meta
          name="description"
          content=" Publish blog in your way. Whether you’d like to share your knowledge, We will help you to create a unique and beautiful blog."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-between flex-col-reverse md:flex-row lg:md:flex-row  w-full max-w-7xl">
        <section className="w-full md:w-3/4 lg:w-3/4 text-gray-600 body-font   overflow-hidden px-2">
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchPosts}
            hasMore={posts.length < totalLength}
            loader={<Loader />}
          >
            <section className="grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              {posts &&
                posts.map((post) => <PostCard post={post} key={post.title} />)}
            </section>
          </InfiniteScroll>
        </section>
        <section className="w-full md:w-1/4 lg:w-1/4 text-gray-600 body-font flex flex-row flex-wrap overflow-hidden px-2">
          <SideBar />
        </section>
      </main>
    </div>
  );
}
