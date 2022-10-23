import React from "react";
import Link from "next/link";
const PostCard = ({ post }) => {
  return (
    <div className="container p-4 pt-8 md:w-80">
      <div className="flex flex-wrap -m-4 overflow-hidden">
        <div className="p-4 w-full ">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center  hover:scale-105 transition-all duration-300"
              src={post.thumbnail}
              alt="blog"
            />
            <div className="p-6 cursor-pointer">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {post.categories &&
                  post.categories.map((category) => (
                    <span className="pr-1" key={category}>
                      {category}
                    </span>
                  ))}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {post.title}
              </h1>
              <p className="text-ellipsis overflow-hidden leading-relaxed h-fit">
                {post.excerpt}
              </p>
              {"..."}

              <div className="flex items-center flex-wrap mt-3 justify-between">
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1 hover:scale-110 hover:text-purple-700"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16C1 12 2 6 7 4s8 2 9 4c1-2 5-6 10-4s5 8 2 12s-12 12-12 12s-9-8-12-12Z"
                    />
                  </svg>
                  {post.likes}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
