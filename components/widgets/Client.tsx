"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Customer from "../Customer";

export const Client: React.FC = () => {
  return (
    <>
      <div className="bg-black px-10 pb-10 pt-20">
        <p className="text-white mb-20 font-montreal uppercase text-center lg:text-md text-sm">
          Sometimes size doesn&apos;t matter. we work for BIG & SMALL
          NON-stoppable visionarIES.
          <br />
          There&apos;s love for them all.
        </p>
        <div className="my-10 relative text-white">
          <Marquee
            gradient={true}
            loop={0}
            gradientColor="black"
            autoFill={true}
            speed={15}
          >
            <Customer />
          </Marquee>
        </div>
      </div>
    </>
  );
};
