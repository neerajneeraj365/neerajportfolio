import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | NN.",
  description: "I am Full Stack Developer",
};

const About = () => {
  return (
    <section>
      <div className="flex flex-col  lg:flex-row justify-between items-center">
        <div className="flex flex-1 flex-col gap-7">
          <h1 className="text-lg md:text-2xl font-semibold md:tracking-wide">
            Get to know about{" "}
            <span className="bg-gradient-to-r from-[#fa543a] to-[#f2ba96] text-transparent bg-clip-text">
              Neeraj{" "}
            </span>{" "}
            <br />
          </h1>
          <p>
            I am still studying in the{" "}
            <span>
              <Link
                href="https://www.conestogac.on.ca/about"
                className="text-black underline"
                target="_blank"
              >
                Conestoga College
              </Link>
            </span>{" "}
            PGDM in Cloud Data Management and learning new technologies.
            {/* I recently graduated from the Conestoga collge PGDM in Cloud Data Management and learning new technologies. */}
          </p>
          <p className="md:tracking-wide">
            I am a highly motivated and enthusiastic Full Stack Developer with a
            strong passion for React/Next. I enjoy building web apps with
            different technologies.
          </p>
          <p>
            {/* I have experience developing visionary concepts, conducting user
          research, and establishing product frameworks through the use of
          animated and interactive prototypes. Possessing a positive attitude
          and a growth-oriented mindset, I am constantly seeking opportunities
          to expand my knowledge and skills as a designer. */}
            I will study your business requirements, build them, and bring them
            into the real world. With six months of hands-on experience, I
            bring enthusiasm and a solid foundation in both front-end and
            back-end technologies to the table. Also, with a fresh perspective
            and a robust understanding of design principles, my commitment
            extends to translating your business requirements into compelling,
            real-world user experiences.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/certificate.png"
            height="400"
            width="400"
            alt="Profile Image"
          />
        </div>
      </div>
      <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col my-2 md:my-6 lg:my-8">
        <div className="">
          <span className="text-lg md:text-xl font-semibold">
            🖥️ Area of Expertise
          </span>
          <p className="md:tracking-wide">
            UI/UX Design <br />
            Responsive Web Development <br />
            Front-end and back-end Development <br />
            API Development and Integration <br />
            Databases <br />
            Deployment <br />
          </p>
        </div>
        <div>
          <span className="text-lg md:text-xl font-semibold">
            💼 Technical Skills
          </span>
          <p className="md:tracking-wide">
            Design tools:- Figma, Adobe XD <br />
            Languages:- HTML, CSS, JavaScript <br />
            Frameworks:- Front-end: React, Next, - Back-end: Node, Express{" "}
            <br />
            Databases:- MongoDB, SQL, Firebase <br />
            Libraries:- Material UI, Shadcn UI, Ant Design <br />
            Version control:- Git <br />
            Deployment:- Vercel, AWS, Azure <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
