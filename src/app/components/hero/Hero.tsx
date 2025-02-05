"use client";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/VanshRSharma.pdf";
    link.download = "VanshRSharma.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen pt-12 flex items-center dark:bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Hero Image with Enhanced Gradient */}
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-1/2 mb-8 lg:mb-0"
          >
            {/* Gradient and Animated Background */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-blue-500/20 to-indigo-600/10 opacity-30 sm:opacity-40"
              ></motion.div>
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute top-1/4 -left-20 w-[14rem] sm:w-[18rem] lg:w-[26rem] h-[14rem] sm:h-[18rem] lg:h-[26rem] bg-gradient-to-tr from-fuchsia-500/40 to-purple-400/20 rounded-full blur-2xl animate-float"
              ></motion.div>
              <motion.div
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute bottom-1/4 -right-20 w-[14rem] sm:w-[18rem] lg:w-[26rem] h-[14rem] sm:h-[18rem] lg:h-[26rem] bg-gradient-to-bl from-cyan-500/30 to-blue-500/20 rounded-full blur-2xl animate-float [animation-delay:-4s]"
              ></motion.div>
            </div>
            <div className="relative flex justify-center">
              <motion.img
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative z-10 rounded-full lg:max-w-[50%] max-w-[60%] mx-auto outline outline-[0.3rem] outline-offset-[0.1rem] outline-purple-400/30"
                src="/profile.png"
                alt="Your Profile"
              />
            </div>
          </motion.div>

          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-6 max-w-3xl text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
              >
                HEY, I&apos;M&nbsp;
                <span className="text-[#d946ef]">VANSH SHARMA</span>
              </motion.h2>

              <div className="text-xl text-gray-800 dark:text-gray-200">
                <TypeAnimation
                  sequence={[
                    "A Software Engineer",
                    2000,
                    "A Web Developer",
                    2000,
                    "A Full Stack Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-lg text-gray-600 dark:text-gray-300"
              >
                Focused on creating and managing innovative websites and web
                applications that contribute to business growth and deliver
                impactful user experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="mt-8">
                  <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <button
                      type="button"
                      title="Download CV"
                      className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      onClick={handleDownload}
                    >
                      <FaDownload className="w-4 h-4 mr-2" />
                      Download CV
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
