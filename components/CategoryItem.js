import React from "react";
import Link from "next/link";
const CategoryItem = ({ cat }) => {
  return (
    <Link href={`/category/${cat.name}`}>
      <li className="p-1 w-fit h-fit px-1 hover:drop-shadow-lg cursor-pointer list-none">
        <div className="bg-gray-100 rounded flex p-1 h-full w-full items-center">
          <span className="p-2 w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-400 overflow-hidden">
            <img
              src={cat.thumbnail}
              alt={cat.name}
              className=" flex-shrink-0 object-cover object-center"
            />
          </span>
          <span className="p-2 text-base font-medium">{cat.name}</span>
        </div>
      </li>
    </Link>
  );
};

export default CategoryItem;
