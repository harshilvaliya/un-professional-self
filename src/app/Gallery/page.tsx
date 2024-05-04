"use client";
import React, { useState } from "react";
import Image from "next/image";
import { imageSources } from "@/lib/Data";
type Props = {};

const Gallery = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex justify-center items-center my-10 text-7xl">
        Gallery
      </div>
      <div className="container w-100dvw h-full flex justify-center items-center">
        <div className="box columns-3 p-8">
          {imageSources.map((src, index) => (
            <div
              key={index}
              className="w-full h-full m-5 rounded-xl hover:scale-105 duration-500 transition-transform"
              onClick={() => openImage(src)}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                key={index}
                width={1000}
                height={1000}
                className="rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80 flex justify-center items-center z-50">
          <div className="max-w-screen-lg w-full">
            <div className="relative">
              <button
                onClick={closeImage}
                className="absolute top-0 right-0 m-4 text-white text-3xl cursor-pointer"
              >
                &times;
              </button>
              <div className="p-4">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="mx-auto h-[85dvh]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
