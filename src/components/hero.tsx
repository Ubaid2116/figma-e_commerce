import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          layout="fill"
          objectFit="cover"
          alt="hero"
          className="z-0"
        />
      </div>
      <div className="relative z-10 p-12 flex flex-col items-start justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-6xl font-extrabold leading-tight text-black drop-shadow-2xl tracking-wide">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="mt-6 text-lg text-gray-200 drop-shadow-md leading-relaxed max-w-2xl">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <button className="mt-8 px-10 py-4 bg-black text-white font-semibold rounded-full shadow-xl transform hover:scale-110 hover:bg-gray-800 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-400">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
