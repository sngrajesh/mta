import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PostCard from "./../../components/PostCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/Loader";

const Category = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [postinfo, setPostinfo] = useState({
    totalLength: 0,
    page: 1,
    loading: false,
  });

  const fetchPosts = async () => {
    try {
      setPostinfo({ ...postinfo, loading: true });
      const res = await fetch(
        `https://blogspacedata.onrender.com/api/v1/post?cat=${router.query.catname}&page=${postinfo.page}&limit=6&sort=new`
      );
      const data = await res.json();
      setPosts(posts.concat(data.results));
      setPostinfo({
        page: postinfo.page + 1,
        loading: false,
        totalLength: data.totalPost,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Head>
        <title>{`${router.query.catname} - BlogSpace`}</title>
      </Head>
      <div className=" w-full flex flex-col justify-center items-center mx-0 px-2 py-12 ">
        <main className="flex justify-center flex-col-reverse md:flex-row lg:md:flex-row  w-full max-w-7xl">
          <InfiniteScroll
            dataLength={posts.length}
            next={fetchPosts}
            hasMore={posts.length < postinfo.totalLength}
            loader={<Loader />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <span>Yay! You have seen it all</span>
              </p>
            }
          >
            <section className="w-full text-gray-600 body-font grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  overflow-hidden px-2">
              {posts.map((post) => (
                <PostCard post={post} key={post.slug} />
              ))}
            </section>
          </InfiniteScroll>
        </main>
      </div>
    </>
  );
};

export default Category;
