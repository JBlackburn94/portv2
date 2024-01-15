import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center w-full bg-green-300 text-black"
    >
      <h2 className="font-semibold uppercase text-2xl mt-4">Contact</h2>
      <span className="border-t-4 border-black w-20 my-2"></span>
      <div className="p-4 m-4 text-black">
        <p className="text-xl font-semibold">Email:</p>
        <p className="text-xl">blackburnjason1994@gmail.com</p>
        <span className="flex justify-start items-center">
          <a href="#">
            <FaGithub size={50} className="my-4 mr-4" />
          </a>
          <a href="#">
            <FaLinkedin size={50} className="my-4" />
          </a>
        </span>
      </div>
    </section>
  );
}
