import { ReactElement } from "react";
import Navbar from "../lib/components/layouts/Navbar";

export default function Blog() : ReactElement {
  return (
    <main className="bg-black h-screen">
      <Navbar />
    </main>
  );
};