import ContactForm from "@/app/pages/ContactForm";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-start w-full h-screen text-black bg-green-300"
    >
      <h2 className="mt-10 text-2xl font-semibold uppercase">Contact</h2>
      <span className="w-20 my-2 border-t-4 border-black"></span>

      <span className="flex items-center justify-start">
        <a href="https://github.com/JBlackburn94" target="_blank">
          <FaGithub size={50} className="my-4 mr-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/jason-blackburn-376597144/"
          target="_blank"
        >
          <FaLinkedin size={50} className="my-4" />
        </a>
      </span>
      <ContactForm />
    </section>
  );
}
