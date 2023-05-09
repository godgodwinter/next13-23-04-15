import Layout from "@/components/layout";
import Image from "next/image";
import bg from "public/img/rust-wpp.png";

function About() {
  return (
    <Layout>
      <div className="w-full  flex justify-center">
        <div className="prose prose-xl text-center py-10">
          <h1 className="capitalize pt-10 pb-5">ABOUT</h1>
          <h5>Know little more about me here</h5>
        </div>
      </div>

      <div className="px-10 flex justify-center">
        <div className="w-6/12">
          <div className="grid grid-cols-1 md:grid-cols-2 space-x-1">
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
                            #
                          </span>
                          <span className="text-xs tracking-wide font-bold uppercase block font-sans">
                            1
                          </span>
                        </div>
                      </div>
                      <div className="py-8 px-4 bg-white   rounded-b-md fd-cl group-hover:opacity-25">
                        <span className="block text-lg text-gray-800 font-bold tracking-wide">
                          GITHUB : @godgodwinter
                        </span>
                        <span className="block text-gray-600 text-sm w-full">
                          some code.
                        </span>
                      </div>
                    </div>
                    <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
                      <div className="h-full w-full flex-col justify-end ">
                        <div>
                          {" "}
                          <button className="mx-auto text-3xl font-extrabold underline border-2 bg-white w-full  py-2 px-4 rounded-md hover:bg-orange-300">
                            # GITHUB
                          </button>
                          <span className=" text-sky-600 tracking-wider leading-relaxed font-sans  w-full"></span>
                          <div className="pt-8 text-center space-x-4">
                            <a
                              href="https://github.com/godgodwinter"
                              target="_blank"
                            >
                              <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-orange-300">
                                Preview
                              </button>
                            </a>
                            {/* <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-orange-300">
                                Source Code
                              </button> */}
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
                            #
                          </span>
                          <span className="text-xs tracking-wide font-bold uppercase block font-sans">
                            2
                          </span>
                        </div>
                      </div>
                      <div className="py-8 px-4 bg-white   rounded-b-md fd-cl group-hover:opacity-25">
                        <span className="block text-lg text-gray-800 font-bold tracking-wide">
                          BLOG : @babeng
                        </span>
                        <span className="block text-gray-600 text-sm w-full">
                          Just typing some text about programming or tech.
                        </span>
                      </div>
                    </div>
                    <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
                      <div className="h-full w-full flex-col justify-end ">
                        <div>
                          {" "}
                          <button className="mx-auto text-3xl font-extrabold underline border-2 bg-white w-full  py-2 px-4 rounded-md hover:bg-orange-300">
                            # BLOG
                          </button>
                          <span className=" text-sky-600 tracking-wider leading-relaxed font-sans  w-full"></span>
                          <div className="pt-8 text-center space-x-4">
                            <a href="https://dev.to/babeng/" target="_blank">
                              <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-orange-300">
                                Preview
                              </button>
                            </a>
                            {/* <button className="border-2 bg-white border-slate-200 py-2 px-4 rounded-md hover:bg-orange-300">
                                Source Code
                              </button> */}
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
      {/* <div className="hero min-h-screen ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <Image
              src="/img/rust-wpp.png"
              alt="Picture of the author"
              width={500}
              height={500}
              priority
              quality={50}
            />
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">
                Hover me!
              </span>
            </button>
          </div>
        </div>
      </div> */}
    </Layout>
  );
}

export default About;
