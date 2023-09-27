"use client";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="min-h-screen mx-auto lg:px-10 px-3 py-5 bg-black text-white">
      <div className="flex mb-5 font-montreal lg:text-xl md:text-sm uppercase justify-between lg:space-x-10 space-x-1 lg:gap-6">
        <div className="flex font-montreal uppercase lg:space-x-20 space-x-5">
          <div className="">
            <p>v1.0.0.1</p>
          </div>
          <div className="">
            <p>basement — a digital studio who make cool shit that performs</p>
          </div>
        </div>
        <div className="">
          <p className="lg:visible md:visible sm:visible invisible">
            &copy; 2023
          </p>
        </div>
      </div>

      {/* border */}
      <div className="my-5 footer-img border-y border-background">
        <div className=" my-5">
          <p className="lg:text-9xl text-4xl -leading-loose -tracking-wide font-display">
            Any
            <br />
            project
            <br />
            in mind?
            <br />
            <a
              href="#"
              className="group w-full text-oranged transition duration-300"
            >
              drop a line
              <span className="block w-auto justify-center items-center group-hover:px-10 max-w-0 group-hover:max-w-full group-hover: transition-all duration-500 h-2 w-auto bg-oranged"></span>
            </a>
          </p>
        </div>
      </div>

      <footer className="flex font-montreal uppercase text-lg tracking-normal justify-between items-center bg-black">
        <div>
          <h3>social media</h3>
          <ul className="flex">
            <li className="hover:text-oranged">
              <Link href="https://">Instragram</Link>
            </li>
            {"—"}
            <li className="hover:text-oranged">
              <Link href="https://">Twitter</Link>
            </li>
            {"—"}
            <li className="hover:text-oranged">
              <Link href="https://">Github</Link>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h3>get in touch</h3>
          <p className="hover:text-oranged">
            <Link href="">hello@basement.studio</Link>
          </p>
        </div>
        <div className="text-right">
          <h3>copyright &copy; 2023</h3>
          <p>basement studio</p>
        </div>
      </footer>
    </div>
  );
};
