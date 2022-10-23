import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";

const SideBar = () => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    fetch("https://blogspacedata.onrender.com/api/v1/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-8 mx-auto">
        <span className=" text-base text-gray-900">Categories</span>
        <ul className="flex overflow-x-scroll md:overflow-x-hidden overflow-y-hidden  flex-nowrap md:flex-wrap w-screen  md:w-full sm:mx-auto sm:mb-2 -mx-2 max-h-fit pr-10 md:pr-0">
          {categories &&
            categories.map((category) => (
              <CategoryItem key={category._id} cat={category} />
            ))}
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
