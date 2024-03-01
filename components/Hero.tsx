import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center h-100">
      <div className="flex flex-col gap-7">
        <h1 className="text-lg md:text-2xl font-semibold md:tracking-wide">
          Hi, I'm Neeraj, a{" "}
          <span className="bg-gradient-to-r from-[#fa543a] to-[#f2ba96] text-transparent bg-clip-text">
            Full Stack Developer{" "}
          </span>{" "}
          <br />
          with a passion for building web apps.
        </h1>
        <p className="text-gray-400 md:tracking-wide">
          Previously worked with{" "}
          <span>
            <Link
              href="https://www.secpod.com/about-us/"
              className="text-black underline"
              target="_blank"
            >
              Secpod
            </Link>
          </span>
          <br />
          {/* Graduated from{" "} */}
          Studying in {" "}
          {/* <span>
            <Link
              href="https://www.secpod.com/about-us/"
              className="text-black"
            >
              Dayananda Sagar University
            </Link>
            {" & "}
          </span>{" "} */}
          <span>
            <Link
              href="https://www.conestogac.on.ca/about"
              className="text-black underline"
              target="_blank"
            >
              Conestoga College
            </Link>
          </span>
        </p>
      </div>
      <div className="">
        <Image src="/join.png" height="400" width="400" alt="Profile Image" />
      </div>
    </section>
  );
};

export default Hero;
