import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

const Upload = () => {
  const { isAdmin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  //Post that will request to the server
  const [post, setPost] = useState({
    title: "",
    slug: "",
    excerpt: "",
    category1: "",
    category2: "",
    thumbnail: "",
    description: "",
    username: "",
    userid: "",
  });

  const [categoryreq, setCategoryreq] = useState({
    category: "",
    catthumbnail: "",
  });

  //Function verifies that only admin can access this page
  const router = useRouter();

  React.useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, []);

  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetch("https://blogspacedata.onrender.com/api/v1/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  //Function to handle the change of the input fields
  const postHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const categoryHandler = (e) => {
    setCategoryreq({ ...categoryreq, [e.target.name]: e.target.value });
  };

  //Function to upload the post
  const submitHandler = (e) => {
    e.preventDefault();
    setPost({ ...post, slug: post.title.replace(/\s+/g, "-").trim() });
    setLoading(true);
    setTimeout(async () => {
      const res = await fetch(
        "https://blogspacedata.onrender.com/api/v1/post",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${
              JSON.parse(localStorage.getItem("bsuser")).accessToken
            }`,
          },
          body: JSON.stringify({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            thumbnail: post.thumbnail,
            description: post.description,
            catimage: categoryreq.catthumbnail,
            username: JSON.parse(localStorage.getItem("bsuser")).username,
            user_id: JSON.parse(localStorage.getItem("bsuser"))._id,
            categories: [post.category1, post.category2],
          }),
        }
      );
      const data = await res.json();

      if (res.status === 200) {
        alert("Post uploaded successfully");
      } else {
        alert("Post upload failed");
      }
    }, 1000);
    setLoading(false);
  };

  const categorySubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(
      "https://blogspacedata.onrender.com/api/v1/category",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: `Bearer ${
            JSON.parse(localStorage.getItem("bsuser")).accessToken
          }`,
        },
        body: JSON.stringify({
          name: categoryreq.category,
          thumbnail: categoryreq.catthumbnail,
        }),
      }
    );
    const data = await res.json();

    if (res.status === 200) {
      alert("Category Added");
    } else {
      alert("Failed to add category");
    }
    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Upload - BlogSpace</title>
        <meta
          name="description"
          content="Upload your blogs on BlogSpace. We will help you to create a unique and beautiful blog."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex-col -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="user"
                    className="leading-7 text-sm text-gray-600"
                  >
                    User Name :&nbsp;
                  </label>
                  <span className="text-sm border-b-2 border-purple-500">
                    {"UserName"}
                  </span>
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="title"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={postHandler}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="excerpt"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Excerpt
                  </label>
                  <input
                    type="text"
                    id="excerpt"
                    name="excerpt"
                    onChange={postHandler}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <label
                  htmlFor="category1"
                  className="leading-7 text-sm text-gray-600"
                >
                  First Category
                </label>
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-400"
                  id="file_input_help"
                >
                  Select your first category from the list
                </p>
                <select
                  className="w-full rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10"
                  name="category1"
                  onChange={postHandler}
                  id="category1"
                >
                  {categories &&
                    categories.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="p-2 w-full">
                <label
                  htmlFor="category2"
                  className="leading-7 text-sm text-gray-600"
                >
                  Second Category
                </label>
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-400"
                  id="file_input_help"
                >
                  Select your second category from the list
                </p>
                <select
                  className="w-full rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 text-base pl-3 pr-10"
                  name="category2"
                  onChange={postHandler}
                  id="category2"
                >
                  {categories &&
                    categories.map((cat) => (
                      <option key={cat._id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="p-2 w-full">
                <label
                  className="leading-7 text-sm text-gray-600"
                  htmlFor="thumbnail"
                >
                  Thumbnail
                </label>{" "}
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-400"
                  id="file_input_help"
                >
                  e.g. https://example.com/image.jpg
                </p>
                <input
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  id="thumbnail"
                  name="thumbnail"
                  type="text"
                  onChange={postHandler}
                />
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="description"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Descripton
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    onChange={postHandler}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-52 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <button
                  disabled={loading}
                  className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg hover:drop-shadow-lg"
                  onClick={submitHandler}
                >
                  {loading ? (
                    <span>
                      <img
                        className="h-7 w-7"
                        src="/loading.gif"
                        alt="Loading..."
                      />
                    </span>
                  ) : (
                    <span>Submit Post</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="category"
                  className="leading-7 text-sm text-gray-600"
                >
                  Category Name
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={categoryreq.category}
                  onChange={categoryHandler}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <label
                className="leading-7 text-sm text-gray-600"
                htmlFor="catthumbnail"
              >
                Category Thumbnail
              </label>{" "}
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-400"
                id="file_input_help"
              >
                e.g. https://example.com/image.jpg
              </p>
              <input
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="catthumbnail"
                name="catthumbnail"
                type="text"
                value={categoryreq.catthumbnail}
                onChange={categoryHandler}
              />
            </div>

            <div className="p-2 w-full">
              <button
                disabled={loading}
                className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg hover:drop-shadow-lg"
                onClick={categorySubmitHandler}
              >
                {loading ? (
                  <span>
                    <img
                      className="h-7 w-7"
                      src="/loading.gif"
                      alt="Loading..."
                    />
                  </span>
                ) : (
                  <span>Submit Category</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upload;
