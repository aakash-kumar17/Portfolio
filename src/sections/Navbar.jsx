import { useState } from "react";
import { motion } from "motion/react";
import { scrollToSection } from "../utils/scrollUtils";

function Navigation({ onLinkClick }) {
  const links = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Credentials", id: "credentials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <ul className="nav-ul">
      {links.map((link) => (
        <li key={link.id} className="nav-li">
          <button
            onClick={() => {
              scrollToSection(link.id);
              onLinkClick?.();
            }}
            className="nav-link bg-none border-none cursor-pointer"
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white bg-none border-none cursor-pointer"
          >
            Aakash
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation onLinkClick={handleLinkClick} />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation onLinkClick={handleLinkClick} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
