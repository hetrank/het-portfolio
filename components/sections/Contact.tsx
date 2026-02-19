"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_wpscoy4",
        "template_3xaz30q",
        form.current,
        "y2nzalvjvk8v62CVN"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setStatus("Something went wrong. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-semibold mb-8">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-12">
          I’m open to internships, collaborations, and interesting projects.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 text-left"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 outline-none"
          />
          
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-white/30 outline-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-white text-black font-medium hover:scale-[1.02] transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-6 text-gray-300">{status}</p>
        )}

      </div>
    </section>
  );
}
