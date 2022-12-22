import { ReactElement } from "react";
import Button from "../lib/components/elements/Button";
import Text from "../lib/components/elements/text/Text";
import Navbar from "../lib/components/layouts/navbar/Navbar";
import Particles from "../lib/components/specials/Particles";

export default function Home() : ReactElement {
  return (
    <main>
      <header className="h-screen bg-header relative">
        <Particles configUrl="/particles.json" />

        <div className="relative z-10 h-navbar-adjust">
          <Navbar />

          <div className="flex justify-center flex-col gap-7 h-full w-7/12 m-auto">
            <Text color="gray" size="large">Hello there! I am</Text>
            <Text type="h1" color="white" size="3xl">Camille Dugas,</Text>
            <Text type="h1" color="gray" size="3xl">a Web Developer.</Text>

            <div className="w-1/2">
              <Text color="gray" size="large" type="h2">I{"'"}m a passionate full-stack web developer since 2016. I mainly work with the technologies proposed by the NodeJS universe to create modern web applications.</Text>
            </div>

            <Button href="/#about" large>Discover me</Button>
          </div>
        </div>
      </header>
    </main>
  );
}