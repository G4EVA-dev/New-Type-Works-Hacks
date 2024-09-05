import { useState } from "react";
import { motion } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-4 relative">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Your Organization.</h1>
            <button onClick={toggleNav} className="block lg:hidden p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul
              className={`lg:flex lg:space-x-4 absolute lg:static top-0 left-0 w-full lg:w-auto bg-blue-600 lg:bg-transparent transition-transform ${
                isNavOpen
                  ? "transform translate-x-0"
                  : "transform -translate-x-full"
              } lg:translate-x-0 lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 p-4 lg:p-0`}
            >
              <li>
                <a
                  href="/"
                  className="block py-2 px-4 hover:bg-blue-700 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block py-2 px-4 hover:bg-blue-700 rounded"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/join"
                  className="block py-2 px-4 hover:bg-blue-700 rounded"
                >
                  Join Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-4 hover:bg-blue-700 rounded"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-blue-600 absolute bottom-0 w-full h-[100px] text-white py-4 text-center">
          &copy; {new Date().getFullYear()} Your Organization
        </footer>
      </div>
    </motion.div>
  );
};

export default Layout;
