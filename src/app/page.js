"use client";
import Hero from "./pages/hero/page";
import About from "./pages/about/page";
import Portfolio from "./pages/portfolio/page";
import Contact from "./pages/contact/page";
import Hobbies from "./pages/hobbies/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <Hobbies />
      <Contact />
    </main>
  );
}
