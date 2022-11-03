/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef, useEffect } from "react";
const images = [
  "https://coolstockphoto.com/wp-content/uploads/2022/08/Antenna-Tower-Art-Background-with-Copy-Space.jpg",
  "https://static1.bigstockphoto.com/8/5/2/large1500/258093196.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqodObW46e9TIvfQG5wuVzaN-Zsd9zXSAZkw&usqp=CAU",
  "https://media.wired.com/photos/5f247a75ce3451c46354188f/191:100/w_2291,h_1199,c_limit/Sec_groundstation_498384831.jpg",
];

const CardCarousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="my-0 mx-auto mt-4 rounded-md overflow-hidden">
      <div
        className="transition duration-1000 ease whitespace-nowrap"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div
            className="inline-block h-56 md:h-72 lg:h-80 w-full rounded-md bg-no-repeat bg-left-top"
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "100% 100%",
            }}
          >
            {" "}
          </div>
        ))}
      </div>

      <div className="text-center">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={
              "inline-block h-3 w-3 rounded-md cursor-pointer mt-4 mx-1 bg-gray-300 "
            }
            style={{
              backgroundColor: index === idx ? "#686868" : "rgb(209  213 219)",
            }}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
