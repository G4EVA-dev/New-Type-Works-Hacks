"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import organization from "./organization.webp";

const HeroSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative h-screen bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8"
  >
    <div className="absolute inset-0">
      <Image
        src={organization}
        alt="Background"
        className="object-cover w-full h-full opacity-50"
      />
    </div>
    <div className="relative w-full h-full z-10 flex flex-col items-center justify-center  ">
      <h1 className="text-5xl font-bold mb-4  ">Welcome to Our Organization</h1>
      <p className="text-[25px] text-center mb-6">
        Join us to make a meaningful impact. Discover our events, meet
        like-minded people, and contribute to our mission.
      </p>
      <a
        href="/join"
        className="bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200 transition"
      >
        Join Us Now
      </a>
    </div>
  </motion.div>
);

export default HeroSection;
