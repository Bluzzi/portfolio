import type { NextPage } from "next";
import Button from "../lib/components/elements/Button";
import Navbar from "../lib/components/layouts/Navbar";
import Particles from "../lib/components/specials/Particles";

const Home: NextPage = () => {
  return (
    <main>
      <header className="h-screen bg-header-gradiant relative">
        <Particles configUrl="/particles/header.json" />

        <div className="relative z-10 h-navbar-adjust">
          <Navbar />

          <div className="flex justify-center flex-col gap-7 h-full w-7/12 m-auto">
            <p className="text-primary-normal">Hello, my name is</p>
            <h1 className="text-white-normal text-7xl">Camille Dugas,</h1>
            <h1 className="text-gray text-7xl">I{"'"}m a Web Developer.</h1>

            <p className="text-gray w-1/2">I{"'"}m a passionate full-stack web developer since 2016. I mainly work with the technologies proposed by the NodeJS universe to create modern web applications.</p>

            <Button large>Discover me</Button>
          </div>
        </div>
      </header>

      <section className="h-screen bg-white-normal">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam autem perferendis iure cupiditate dolore tenetur molestias iusto quos deserunt facere. Quo aliquam ducimus laudantium minima asperiores ab possimus, incidunt veritatis.</p>
      </section>
    </main>
  );
};

export default Home;
