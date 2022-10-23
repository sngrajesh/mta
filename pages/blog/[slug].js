import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Article = ({ post }) => {
  const router = useRouter();
  const { isError, setisError, loading, detetePostHandler, isAdmin } =
    useContext(AuthContext);

  function createMarkup(ctx) {
    return { __html: ctx };
  }
  const [totalLikes, setTotalLikes] = useState(post.likes);

  const likePost = async () => {
    if (typeof window === "undefined") return;
    const likedposts = localStorage.getItem("likedposts");
    if (likedposts) {
      const likedpostsArray = JSON.parse(likedposts);
      const likeSet = new Set(likedpostsArray.map((item) => item));
      likedpostsArray = [...likeSet];
      if (likedpostsArray.includes(post.slug)) {
        likedpostsArray = likedpostsArray.filter((item) => item !== post.slug);

        localStorage.setItem("likedposts", JSON.stringify(likedpostsArray));
        console.log("unliked");
        if (post.likes > 0) {
          const res = await fetch(
            `https:/blogspacedata.onrender.com/api/v1/post/liked/${post.slug}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
            }
          );
        }
        setTotalLikes(totalLikes - 1);
        return;
      } else {
        likedpostsArray.push(post.slug);
        localStorage.setItem("likedposts", JSON.stringify(likedpostsArray));
        const res = await fetch(
          `https:/blogspacedata.onrender.com/api/v1/post/likei/${post.slug}`,

          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
          }
        );
        setTotalLikes(totalLikes + 1);
        return;
      }
    } else {
      localStorage.setItem("likedposts", JSON.stringify([post.slug]));
      const res = await fetch(
        `https:/blogspacedata.onrender.com/api/v1/post/likei/${post.slug}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
      setTotalLikes(totalLikes + 1);
      return;
    }
  };

  const handleDelete = async () => {
    const res = await detetePostHandler(post._id);
    if (res === 200) {
      router.push("/");
    }
  };

  useEffect(() => {
    setisError(false);
  }, []);

  return (
    <>
      <Head>
        <title>{`${post.title} - BlogSpace`} </title>
        <meta property="og:type" content="website" />
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.categories} />
        <meta property="og:image" content={post.photo} />
      </Head>

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 mb-10 mt-10 md:mt-0">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-gray-900 font-bold text-center text-3xl mb-2">
            {post.title}
          </h1>
          <img
            className="lg:max-h-96 md:h-96 w-full object-cover object-center rounded-sm"
            src={post.thumbnail}
            alt={`${post.title} image`}
          />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div>
              <div className="flex justify-between">
                <p className="text-gray-700 text-xs ">
                  Written By:{" "}
                  <span className="text-purple-600 font-medium">
                    {post.username}
                  </span>
                </p>

                <div>
                  <span className="text-gray-400 inline-flex items-center leading-none text-sm ">
                    <svg
                      className="w-4 h-4 mr-1 hover:scale-110 hover:text-purple-700"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 32 32"
                      onClick={likePost}
                    >
                      <path
                        fill="none"
                        className="likesvg"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12s-12 12-12 12s-9-8-12-12Z"
                      />
                    </svg>
                    {totalLikes}
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <p className="text-gray-700 text-xs ">
                  Published At :{" "}
                  <span className="text-purple-600 font-medium">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-5 text-center">
              <span className="text-gray-900 font-bold text-xl mb-2">
                {post.excerpt}
              </span>
            </div>
            <div>
              <div
                className="show"
                dangerouslySetInnerHTML={createMarkup(post.description)}
              />
            </div>
          </div>
          {isAdmin && (
            <div className="flex justify-end">
              <button
                disabled={loading}
                onClick={handleDelete}
                className="flex text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg hover:drop-shadow-lg items-center"
              >
                {loading ? (
                  <span className="w-max">
                    <img
                      className="h-7 w-7"
                      src="/loading.gif"
                      alt="Loading..."
                    />
                  </span>
                ) : (
                  <span className="flex justify-center align-middle">
                    <svg
                      width="28"
                      height="28"
                      preserveAspectRatio="xMidYMid meet"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12ZM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6Zm12-1V5h-4l-1-1h-3L9 5H5v1h13ZM8 9h1v10H8V9Zm6 0h1v10h-1V9Z"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          )}

          {isError && (
            <p className="text-xs text-red-500 mt-3 text-center">
              There is an error while deleting the post. Please try again later.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://blogspacedata.onrender.com/api/v1/post/${context.params.slug}`
  );
  const posts = await res.json();
  return { props: { post: posts.result } };
}
export default Article;
