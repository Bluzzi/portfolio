import type { NextPage } from "next";
import Navbar from "../lib/components/layouts/Navbar";

const Blog: NextPage = () => {
  return (
    <main className="bg-black h-screen">
      <Navbar />
    </main>
  );
};

export default Blog;
