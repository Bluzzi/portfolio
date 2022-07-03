import { ReactElement } from "react";
import Button from "../lib/components/elements/Button";
import Anchor from "../lib/components/elements/text/Anchor";
import Text from "../lib/components/elements/text/Text";
import Navbar from "../lib/components/layouts/navbar/Navbar";
import Particles from "../lib/components/specials/Particles";
import Image from "next/image";
// import CircleMenu from "../lib/components/elements/CircleMenu";

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

      <section id="about" className="h-screen bg-about flex items-center justify-center flex-col">
        <Text size="3xl" type="h2">Who I am ?</Text>

        <div className="w-3/4 flex">
          <div>
            <Text>Lorem ipsum dolor sit amet <Anchor href="#">consectetur adipisicing</Anchor> elit. Veniam autem perferendis iure cupiditate dolore tenetur molestias iusto quos deserunt facere. Quo aliquam ducimus laudantium minima asperiores ab possimus, incidunt veritatis.</Text>

            <Text>Lorem ipsum dolor sit amet <Anchor href="#">consectetur adipisicing</Anchor> elit. Veniam autem perferendis iure cupiditate dolore tenetur molestias iusto quos deserunt facere. Quo aliquam ducimus laudantium minima asperiores ab possimus, incidunt veritatis.</Text>

            <Text>Lorem ipsum dolor sit amet <Anchor href="#">consectetur adipisicing</Anchor> elit. Veniam autem perferendis iure cupiditate dolore tenetur molestias iusto quos deserunt facere. Quo aliquam ducimus laudantium minima asperiores ab possimus, incidunt veritatis.</Text>
          </div>

          <Image src="/images/profile-picture.jpg" alt="profile picture" height={400} width={400} className="rounded-full" />
        </div>
      </section>

      {/* <CircleMenu/> */}
    </main>
  );
}