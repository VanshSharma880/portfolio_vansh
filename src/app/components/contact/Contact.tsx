"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error(result.message || "Failed to send the message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong! Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans w-full dark:bg-[#0A0A0A] py-10 px-6 mx-auto relative overflow-hidden">
      {/* Heading */}
      <h1 className="py-6 text-center text-3xl font-bold text-[#d946ef]">
        Let’s Talk
      </h1>

      <div className="grid md:grid-cols-2 gap-10 pt-4 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/contact.jpg"
            alt="Illustration of contacting someone"
            width={500}
            height={500}
            className="w-5/6 rounded-xl"
            priority
          />
        </motion.div>

        {/* Form Section */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#0A0A0A] p-6 rounded-2xl max-w-lg mx-auto space-y-4"
        >
          <h2 className="text-xl font-bold text-purple-600 text-center mb-4">
            Drop Me a Line
          </h2>
          <div className="flex justify-evenly">
            <div className="flex items-center gap-2.5">
              <FaPhoneAlt className=" text-lg mt-1 text-[#d946ef]" />
              <p className="text-base font-normal text-gray-400 select-all">
                +91 9511869329
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdMail className="text-xl mt-1 text-[#d946ef]" />
              <p className="text-base font-normal text-gray-400 select-all">
                vanshsharma9511@gmail.com
              </p>
            </div>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-gray-100 dark:text-slate-800  rounded-md py-3 px-4 text-sm outline-blue-600 focus:bg-white"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-gray-100 dark:text-slate-800  rounded-md py-3 px-4 text-sm outline-blue-600 focus:bg-white"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone No."
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-gray-100 dark:text-slate-800  rounded-md py-3 px-4 text-sm outline-blue-600 focus:bg-white"
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number."
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-gray-100 dark:text-slate-800 rounded-md px-4 py-3 outline-blue-600 focus:bg-white"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-white w-full bg-[#14b8a6] rounded-md text-md font-semibold px-6 py-3 transition-opacity duration-300 ${
              isSubmitting ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {isSubmitting ? (
              <div className="flex justify-center items-center gap-2">
                <span>Sending</span>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.form>
      </div>

      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}
