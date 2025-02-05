"use client";

import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t dark:bg-[#0A0A0A] py-2 px-6">
      <div className="container flex flex-col md:flex-row items-center justify-between py-4 space-y-4 md:space-y-0">
        <p className="text-sm text-[#14b8a6] font-semibold text-muted-foreground">
          © {new Date().getFullYear()} VANSH SHARMA
        </p>
        <div className="flex items-center gap-10">
          <Link
            href="https://www.linkedin.com/in/vanshsharma880/"
            target="_blank"
          >
            <section className="flex justify-center items-center">
              <button className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#0077b5] from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                <FaLinkedinIn className="text-xl" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  Linkedin
                </span>
              </button>
            </section>
          </Link>

          <Link href="https://github.com/VanshSharma880" target="_blank">
            <section className="flex justify-center items-center">
              <button className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                <IoLogoGithub className="text-xl" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  GitHub
                </span>
              </button>
            </section>
          </Link>

          <Link
            href="https://wa.me/9511869329"
            target="_blank"
            rel="noopener noreferrer"
          >
            <section className="flex justify-center items-center">
              <button className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#1ED760] from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                <FaWhatsapp className="text-xl" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  WhatsApp
                </span>
              </button>
            </section>
          </Link>
          <Link href="https://x.com/vansharma12" target="_blank">
            <section className="flex justify-center items-center">
              <button className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]">
                <FaXTwitter className="text-xl" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  x
                </span>
              </button>
            </section>
          </Link>
        </div>
      </div>
    </footer>
  );
}
