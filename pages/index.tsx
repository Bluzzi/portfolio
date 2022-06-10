import type { NextPage } from "next";
import Button from "../lib/components/elements/Button";
import Anchor from "../lib/components/elements/text/Anchor";
import Text from "../lib/components/elements/text/Text";
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
            <Text color="gray" size="large">Hello there! I am</Text>
            <Text type="h1" color="white" size="3xl">Camille Dugas,</Text>
            <Text type="h1" color="gray" size="3xl">a Web Developer.</Text>

            <div className="w-1/2">
              <Text color="gray" size="large">I{"'"}m a passionate full-stack web developer since 2016. I mainly work with the technologies proposed by the NodeJS universe to create modern web applications.</Text>
            </div>

            <Button href="/#about" large>Discover me</Button>
          </div>
        </div>
      </header>

      <section id="about" className="h-screen bg-about flex items-center justify-center">
        <Text>Lorem ipsum dolor sit amet <Anchor href="#">consectetur adipisicing</Anchor> elit. Veniam autem perferendis iure cupiditate dolore tenetur molestias iusto quos deserunt facere. Quo aliquam ducimus laudantium minima asperiores ab possimus, incidunt veritatis.</Text>
      </section>
    </main>
  );
};

export default Home;
