import Layout from "@/components/layout";
import Image from "next/image";
import { motion } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};
import bg from "public/img/rust-wpp.png";

export default function Showcase() {
  return (
    <div>
      <Layout>
        <div className="w-full  flex justify-center">
          <div className="prose prose-xl text-center py-10">
            <h1 className="capitalize">Showcase</h1>
            <h5>
              Step into our world of creativity and innovation. Our showcase
              page features a variety of projects that demonstrate our expertise
              and passion for delivering exceptional results
            </h5>
          </div>
        </div>
        <div className="px-10 flex justify-center">
          <div className="w-full">
            <div className="grid  grid-cols-1 md:grid-cols-3  space-x-3">
              <div className="grid-cols-1 border-2 border-slate-100 rounded-lg p-10 ">
                <div className="prose flex flex-col justify-between">
                  <div>
                    {" "}
                    <Image
                      src="/img/rust-wpp.png"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      priority
                      quality={50}
                    />
                  </div>
                  <div>
                    <h3>Project 1</h3>
                    <p>Desc project 1</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-1 border-2 border-slate-100 rounded-lg p-10 ">
                <div className="prose flex flex-col justify-between">
                  <div>
                    {" "}
                    <Image
                      src="/img/rust-wpp.png"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      priority
                      quality={50}
                    />
                  </div>
                  <div>
                    <h3>Project 1</h3>
                    <p>Desc project 1</p>
                  </div>
                </div>
              </div>
              <div className="grid-cols-1 border-2 border-slate-100 rounded-lg p-10 ">
                <div className="prose flex flex-col justify-between">
                  <div>
                    {" "}
                    <Image
                      src="/img/rust-wpp.png"
                      alt="Picture of the author"
                      width={500}
                      height={500}
                      priority
                      quality={50}
                    />
                  </div>
                  <div>
                    <h3>Project 1</h3>
                    <p>Desc project 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 flex justify-center">
          <div className="w-10/12">
            <div className="grid  grid-cols-1 md:grid-cols-3  space-x-1">
              <div className="grid-cols-1">
                <div>
                  <div className="py-4">
                    <div
                      className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div"
                      style={{
                        backgroundImage: `url(${bg.src})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div>
                        <div
                          className="w-full image-cover rounded-t-md"
                          style={{ height: `260px` }}
                        >
                          <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                            <span className="text-base tracking-wide  font-bold border-b border-white font-sans">
                              {" "}
                              12
                            </span>
                            <span className="text-xs tracking-wide font-bold uppercase block font-sans">
                              April
                            </span>
                          </div>
                        </div>
                        <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                          <span className="block text-lg text-gray-800 font-bold tracking-wide">
                            Project 1
                          </span>
                          <span className="block text-gray-600 text-sm">
                            Vivamus ac ligula sit amet erat luctus laoreet ac
                            quis ligula. Donec bibendum faucibus purus eget
                            cursus. Proin enim ante, scelerisque vel sem sit
                            amet, ultrices mollis risus. Praesent justo felis,
                            ullamcorper a cursus sed, condimentum at dui.
                          </span>
                        </div>
                      </div>
                      <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
                        <div className="h-full w-full flex-col justify-end ">
                          <div>
                            <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans  w-full">
                              Project 1
                            </span>
                            <div className="pt-8 text-center space-x-4">
                              <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-slate-400">
                                Preview
                              </button>
                              <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-slate-400">
                                Source Code
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-cols-1">
                <div>
                  <div className="py-4">
                    <div
                      className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div"
                      style={{
                        backgroundImage: `url(${bg.src})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div>
                        <div
                          className="w-full image-cover rounded-t-md"
                          style={{ height: `260px` }}
                        >
                          <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                            <span className="text-base tracking-wide  font-bold border-b border-white font-sans">
                              {" "}
                              12
                            </span>
                            <span className="text-xs tracking-wide font-bold uppercase block font-sans">
                              April
                            </span>
                          </div>
                        </div>
                        <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                          <span className="block text-lg text-gray-800 font-bold tracking-wide">
                            Project 1
                          </span>
                          <span className="block text-gray-600 text-sm">
                            Vivamus ac ligula sit amet erat luctus laoreet ac
                            quis ligula. Donec bibendum faucibus purus eget
                            cursus. Proin enim ante, scelerisque vel sem sit
                            amet, ultrices mollis risus. Praesent justo felis,
                            ullamcorper a cursus sed, condimentum at dui.
                          </span>
                        </div>
                      </div>
                      <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
                        <div className="h-full w-full flex-col justify-end ">
                          <div>
                            <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans  w-full">
                              Project 1
                            </span>
                            <div className="pt-8 text-center space-x-4">
                              <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-slate-400">
                                Preview
                              </button>
                              <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-slate-400">
                                Source Code
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-cols-1">
                <div>
                  <div className="py-4">
                    <div
                      className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div"
                      style={{
                        backgroundImage: `url(${bg.src})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <div>
                        <div
                          className="w-full image-cover rounded-t-md"
                          style={{ height: `260px` }}
                        >
                          <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                            <span className="text-base tracking-wide  font-bold border-b border-white font-sans">
                              {" "}
                              12
                            </span>
                            <span className="text-xs tracking-wide font-bold uppercase block font-sans">
                              April
                            </span>
                          </div>
                        </div>
                        <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                          <span className="block text-lg text-gray-800 font-bold tracking-wide">
                            Project 1
                          </span>
                          <span className="block text-gray-600 text-sm">
                            Vivamus ac ligula sit amet erat luctus laoreet ac
                            quis ligula. Donec bibendum faucibus purus eget
                            cursus. Proin enim ante, scelerisque vel sem sit
                            amet, ultrices mollis risus. Praesent justo felis,
                            ullamcorper a cursus sed, condimentum at dui.
                          </span>
                        </div>
                      </div>
                      <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
                        <div className="h-full w-full flex-col justify-end ">
                          <div>
                            <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans  w-full">
                              Project 1
                            </span>
                            <div className="pt-8 text-center space-x-4">
                              <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-slate-400">
                                Preview
                              </button>
                              <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-slate-400">
                                Source Code
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="py-4">
            <div
              className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div"
              style={{
                backgroundImage: `url(${bg.src})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                width: "100%",
                height: "100%",
              }}
            >
              <div>
                <div
                  className="w-full image-cover rounded-t-md"
                  style={{ height: `260px` }}
                >
                  <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                    <span className="text-base tracking-wide  font-bold border-b border-white font-sans">
                      {" "}
                      12
                    </span>
                    <span className="text-xs tracking-wide font-bold uppercase block font-sans">
                      April
                    </span>
                  </div>
                </div>
                <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                  <span className="block text-lg text-gray-800 font-bold tracking-wide">
                    Project 1
                  </span>
                  <span className="block text-gray-600 text-sm">
                    Vivamus ac ligula sit amet erat luctus laoreet ac quis
                    ligula. Donec bibendum faucibus purus eget cursus. Proin
                    enim ante, scelerisque vel sem sit amet, ultrices mollis
                    risus. Praesent justo felis, ullamcorper a cursus sed,
                    condimentum at dui.
                  </span>
                </div>
              </div>
              <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
                <div className="h-full w-full flex-col justify-end ">
                  <div>
                    <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans  w-full">
                      Project 1
                    </span>
                    <div className="pt-8 text-center space-x-4">
                      <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-slate-400">
                        Preview
                      </button>
                      <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-slate-400">
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4">
          {" "}
          <div className="bg-gray-100  flex justify-center border-t-2 border-b-2 border-slate-200">
            <div className=" grid grid-cols-1 md:grid-cols-3 space-x-10 py-10 text-center">
              <div className="grid grid-cols-1 w-96">
                <h3 className="font-bold text-2xl">14th</h3>
                <h3 className="font-bold">Largest</h3>
                <div className="flex space-x-2 justify-center">
                  {" "}
                  <h3 className="font-light">on Github</h3>{" "}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className={`h-5 w-5`}
                  >
                    <motion.path
                      className={`fill-current text-slate-500 `}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                      variants={icon}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        default: { duration: 3, ease: "easeInOut" },
                        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                      }}
                    />
                  </motion.svg>
                </div>
              </div>
              <div className="grid grid-cols-1 w-96">
                <h3 className="font-bold text-2xl ">#1</h3>
                <h3 className="font-bold">React</h3>
                <div className="flex space-x-2 justify-center">
                  {" "}
                  <h3 className="font-light">Framework</h3>{" "}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className={`h-5 w-5`}
                  >
                    <motion.path
                      className={`fill-current text-slate-500 `}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                      variants={icon}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        default: { duration: 3, ease: "easeInOut" },
                        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                      }}
                    />
                  </motion.svg>
                </div>
              </div>
              <div className="grid grid-cols-1 w-96">
                <h3 className="font-bold text-2xl">100.000</h3>
                <h3 className="font-bold">Star</h3>
                <div className="flex space-x-2 justify-center">
                  {" "}
                  <h3 className="font-light">on Github</h3>{" "}
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    className={`h-5 w-5`}
                  >
                    <motion.path
                      className={`fill-current text-slate-500 `}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                      variants={icon}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        default: { duration: 3, ease: "easeInOut" },
                        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                      }}
                    />
                  </motion.svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-4">
          <div className="prose-xl  text-center">
            <h3 className="font-bold">
              Meet thousands of beautiful <br></br>websites built with Next.js
              by Vercel
            </h3>
          </div>
        </div>
      </Layout>
    </div>
  );
}
