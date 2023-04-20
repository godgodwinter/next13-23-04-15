import Layout from "@/components/layout";
import Image from "next/image";

function About() {
  return (
    <Layout>
      <div class="hero min-h-screen ">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">Hello there</h1>
            <Image
              src="/img/rust-wpp.png"
              alt="Picture of the author"
              width={500}
              height={500}
              priority
              quality={50}
            />
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class="btn btn-primary">Get Started</button>
            <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
              <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span class="relative text-black group-hover:text-white">
                Hover me!
              </span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
