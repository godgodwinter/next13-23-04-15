import Layout from "@/components/layout";

import bg from "public/img/rust-wpp.png";
export default function BookIndex() {
  return (
    <div>
      <Layout>
        <div className="w-full  flex justify-center">
          <div className="prose prose-xl text-center py-10">
            <h1 className="capitalize pt-10 pb-5">THE BOOKS</h1>
            <h5>
              It has been an absolute pleasure to push myself to new heights in
              my journey of continuous learning
            </h5>
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
                            RUST
                          </span>
                          <span className="block text-gray-600 text-sm w-full">
                            Lang for Fun. Rust is blazingly fast and
                            memory-efficient: with no runtime or garbage
                            collector, it can power performance-critical
                            services, run on embedded devices, and easily
                            integrate with other languages.
                          </span>
                        </div>
                      </div>
                      <div className="absolute opacity-0 fd-sh group-hover:opacity-100 ">
                        <div className="h-full w-full flex-col justify-end ">
                          <div>
                            {" "}
                            <button className="mx-auto text-3xl font-extrabold underline border-2 bg-white w-full  py-2 px-4 rounded-md hover:bg-orange-300">
                              # RUST
                            </button>
                            <span className=" text-sky-600 tracking-wider leading-relaxed font-sans  w-full"></span>
                            <div className="pt-8 text-center space-x-4">
                              <a
                                href="https://troubled-kick-222.notion.site/BASIC-4192642e927d46f49c227832607d5e19"
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
              {/* <div className="grid-cols-1">
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
              </div> */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
