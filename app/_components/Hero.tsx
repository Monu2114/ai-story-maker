import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
const Hero = () => {
  return (
    //md - medium size
    <div className="px-10 md:px-28 lg:px-44 mt-10 h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-10 mt-10">
          <h2 className="text-[70px] text-secondary-300 font-extrabold">
            Craft Magical Stories for kids in Minutes
          </h2>
          <p className="text-2xl font-light text-gray-500">
            Create fun Stories and Enjoy
          </p>
          <div className="">
            <Button color="secondary" className="text-xl font-light p-7">
              Create Story
            </Button>
          </div>
        </div>
        <div>
          <Image
            alt="pic"
            src="/polar.png"
            width={600}
            height={300}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
