"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact/route", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Err", error);
    }
  };

  return (
    <form className="w-3/4 md:w-1/2 lg:w-1/4">
      <div className="flex flex-col my-4">
        <label htmlFor="name">Name</label>
        <input
          className="px-4 py-2 bg-white rounded"
          type="text"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col my-4">
        <label htmlFor="email">Email</label>
        <input
          className="px-4 py-2 bg-white rounded"
          type="email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col my-4">
        <label htmlFor="message">Message</label>
        <textarea
          className="px-4 py-2 bg-white rounded"
          type="text"
          value={message}
          rows={4}
          cols={40}
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <input
        className="px-4 py-2 my-2 text-white bg-black rounded"
        type="submit"
        onClick={onSubmit}
      />
    </form>
  );
}
