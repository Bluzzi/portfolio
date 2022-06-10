import type { NextPage } from "next";
import Button from "../lib/components/elements/Button";
import Navbar from "../lib/components/layouts/Navbar";
import Particles from "../lib/components/specials/Particles";

const Home: NextPage = () => {
  return (
    <main>
      <header className="h-screen bg-header relative">
        <Particles configUrl="/particles/header.json" />

        <div className="relative z-10 h-navbar-adjust">
          <Navbar />

          <div className="flex justify-center flex-col gap-7 h-full w-7/12 m-auto">
            <p className="text-gray text-lg">Hello there! I am</p>
            <h1 className="text-white text-7xl">Camille Dugas,</h1>
            <h1 className="text-gray text-7xl">a Web Developer.</h1>

            <p className="text-gray text-lg w-1/2">I{"'"}m a passionate full-stack web developer since 2016. I mainly work with the technologies proposed by the NodeJS universe to create modern web applications.</p>

            <Button href="/#about" large>Discover me</Button>
          </div>
        </div>
      </header>

      <section id="about" className="h-screen bg-about flex items-center justify-center">
        <p className="text-white w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam autem perferendis iure cupiditate dolore tenetur molestias iusto quos deserunt facere. Quo aliquam ducimus laudantium minima asperiores ab possimus, incidunt veritatis.</p>
      </section>
    </main>
  );
};

export default Home;
