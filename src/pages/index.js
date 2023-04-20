import Image from "next/image";
import { Inter } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });
const fn_twoSum = (a, b) => {
  return a + b;
};

const notify = () => toast.success("Successfully toasted!");
import { motion } from "framer-motion";
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

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

export default function Home() {
  return (
    <Layout>
      <div className="w-full flex justify-center ">
        <div className="hero-content px-4 text-center md:px-0 ">
          <div>
            <h2 className="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">
              KUKUH SETYA NUGRAHA
            </h2>{" "}
            <h3 className="mb-5 text-3xl font-bold">Fullstack web developer</h3>{" "}
            <p className="mx-auto mb-5 w-full max-w-lg">
              This web made with NextJS 13 <br />
              Feel free to use just get it on my &nbsp;
              <a
                href="https://github.com/godgodwinter/next13-23-04-15"
                target={`_blank`}
              >
                <span className="badge badge-outline">GITHUB</span>
              </a>
              . Some example on this project : Toast, Routing, State Management
              (Recoil), Styling with Tailwindcss and daisyUI, Momentjs etc.
            </p>{" "}
            <p className="mx-auto mt-20 w-full max-w-lg"></p>{" "}
            <div className="font-bold">Creating a button</div> using only
            utility classes vs using daisyUI component classes <p></p>{" "}
            <div className="mt-10 mb-20 flex flex-col lg:flex-row">
              <div className="flex w-full flex-col text-left">
                <div className="mockup-code mx-auto w-full max-w-xs flex-grow shadow-lg sm:max-w-md">
                  <pre>
                    <code>
                      &lt;a className=&quot;
                      <span className="text-amber-400">
                        inline-block px-4 py-3 text-sm font-semibold text-center{" "}
                        <br />
                        text-white uppercase transition duration-200 ease-in-out{" "}
                        <br />
                        bg-indigo-600 rounded-md cursor-pointer <br />
                        hover:bg-indigo-700 <br />
                      </span>
                      &quot;&gt;Button&lt;/a&gt;
                    </code>
                  </pre>
                </div>{" "}
                <div className="mt-4 flex h-16 items-start justify-center space-x-2">
                  <button className="inline-block cursor-pointer rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-indigo-700">
                    Button
                  </button>

                  <div>
                    <button
                      onClick={notify}
                      className="btn btn-ghost border-2 border-slate-300 rounded-lg font-bold gap-4 flex bg-gradient-to-b from-white to-toast-200 shadow-button text-center py-4 px-6 active:translate-y-0.5 active:shadow-button-active active:bg-gray-100 transform focus:outline-none focus:ring-4"
                    >
                      <div>🛎 </div>
                      <span className="flex-1 mr-2">Make me a toast</span>
                    </button>
                    <Toaster position="top-right" reverseOrder={false} />
                  </div>
                </div>
              </div>{" "}
              <div className="divider text-base-content/50 lg:divider-horizontal uppercase">
                OR
              </div>{" "}
              <div className="flex w-full flex-col text-left">
                <div className="mockup-code mx-auto w-full max-w-xs flex-grow shadow-lg sm:max-w-md">
                  <pre>
                    <code>
                      &lt;a className=&quot;
                      <span className="text-teal-500">btn btn-primary</span>
                      &quot;&gt;Button&lt;/a&gt;
                    </code>
                  </pre>
                </div>{" "}
                <div className="mt-4 flex h-16 items-start justify-center">
                  <button className="btn btn-primary">Button</button>
                </div>
              </div>
            </div>{" "}
            <p className="mx-auto mt-20 w-full max-w-lg"></p>{" "}
            <div className="font-bold">Creating a toggle</div> using only
            utility classes vs using daisyUI component classes <p></p>{" "}
            <div className="mt-10 mb-20 flex flex-col lg:flex-row">
              <div className="flex w-full flex-col text-left">
                <div className="mockup-code mx-auto w-full max-w-xs flex-grow shadow-lg sm:max-w-md">
                  <pre>
                    <code>
                      &lt;div className=&quot;
                      <span className="text-amber-400">relative</span>&quot;&gt;
                      &lt;input type=&quot;checkbox&quot; className=&quot;
                      <span className="text-amber-400">
                        peer appearance-none cursor-pointer border
                        border-gray-300 rounded-full checked:border-gray-900
                        w-12 h-6
                      </span>
                      &quot;/&gt; &lt;span className=&quot;
                      <span className="text-amber-400">
                        peer-checked:left-7 peer-checked:bg-gray-900
                        transition-all duration-200 pointer-events-none w-4 h-4
                        block absolute top-1 left-1 rounded-full bg-gray-300
                      </span>
                      &quot;&gt;&lt;/span&gt; &lt;/div&gt;
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-600">
        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0055"
            variants={draw}
            custom={1}
          />
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#00cc88"
            variants={draw}
            custom={2.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#0099ff"
            variants={draw}
            custom={3}
          />
          <motion.circle
            cx="100"
            cy="300"
            r="80"
            stroke="#0099ff"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="230"
            x2="360"
            y2="370"
            stroke="#ff0055"
            custom={3}
            variants={draw}
          />
          <motion.line
            x1="220"
            y1="370"
            x2="360"
            y2="230"
            stroke="#ff0055"
            custom={3.5}
            variants={draw}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="230"
            rx="20"
            stroke="#00cc88"
            custom={4}
            variants={draw}
          />
          <motion.circle
            cx="100"
            cy="500"
            r="80"
            stroke="#00cc88"
            variants={draw}
            custom={3}
          />
          <motion.line
            x1="220"
            y1="430"
            x2="360"
            y2="570"
            stroke="#0099ff"
            variants={draw}
            custom={4}
          />
          <motion.line
            x1="220"
            y1="570"
            x2="360"
            y2="430"
            stroke="#0099ff"
            variants={draw}
            custom={4.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="430"
            rx="20"
            stroke="#ff0055"
            variants={draw}
            custom={5}
          />
        </motion.svg>
      </div>
      <div className="bg-red-300 h-96 flex justify-center w-full">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="item"
        >
          <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="item"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
          />
        </motion.svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
</svg> */}

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="item"
        >
          <motion.path
            stroke-linecap="round"
            stroke-linejoin="round"
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
    </Layout>
  );
}
