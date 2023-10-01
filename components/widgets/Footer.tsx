"use client";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="min-h-screen mx-auto w-full lg:px-10 px-5 pb-5 lg:pt-20 bg-black text-white">
      <div className="flex mb-5 font-montreal lg:text-xl text-md uppercase lg:justify-between justify-end lg:space-x-10 lg:gap-6 gap-3">
        <div className="flex font-montreal uppercase lg:space-x-20 space-x-4">
          <div className="flex whitespace-nowrap">
            <p>v 1.0.0.1</p>
          </div>
          <div className="tracking-normal whitespace-pre-wrap">
            <p>
              basement — Sometimes size doesn&apos;t matter. we work for BIG &
              SMALL NON-stoppable visionarIES.
            </p>
          </div>
        </div>
        <div className="whitespace-nowrap hidden md:block">
          <p className="">&copy; 2023</p>
        </div>
      </div>

      {/* border */}
      <div className="my-5 lg:py-10 footer-img border-y-2 border-background">
        <div className="my-5">
          <p className="lg:text-10xl text-4xl text-4xl -leading-loose -tracking-wide font-display">
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
              get in touch
              <span className="block w-auto justify-center items-center group-hover:px-10 max-w-0 group-hover:max-w-full group-hover: transition-all duration-500 h-2 w-auto bg-oranged"></span>
            </a>
          </p>
        </div>
      </div>

      <footer className="lg:flex md:space-y-0 space-y-5 font-montreal uppercase text-lg tracking-wide justify-between items-center bg-black">
        <div className="">
          <h3>social media</h3>
          <ul className="flex">
            <li className="hover:text-oranged">
              <Link href="https://">GITEA</Link>
            </li>
            {"—"}
            <li className="hover:text-oranged">
              <Link href="https://">DISCORD</Link>
            </li>
            {"—"}
            <li className="hover:text-oranged">
              <Link href="https://">Github</Link>
            </li>
          </ul>
        </div>
        <div className="lg:text-center">
          <h3>get in touch</h3>
          <p className="hover:text-oranged">
            <Link href="">hello@bsmnt.co</Link>
          </p>
        </div>
        <div className="lg:text-right">
          <h3>copyright &copy; 2023</h3>
          <p>basement</p>
        </div>
      </footer>
    </div>
  );
};
