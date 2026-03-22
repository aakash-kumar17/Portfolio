import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_79b0nyj",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Aakash",
          from_email: formData.email,
          to_email: "aakashkumar11768@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV",
      );
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center min-h-screen c-space section-spacing overflow-hidden"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-6xl"
      >
        {/* Main Container */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-neutral-900 via-neutral-950 to-black border border-neutral-800/50">
          {/* Glow effect background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl -z-20" />

          {/* Two Column Layout */}
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 p-8 md:p-12 lg:p-16">
            {/* Left Side - Contact Info & Photo */}
            <motion.div
              variants={itemVariants}
              custom={0}
              className="flex flex-col items-center justify-center space-y-8 text-center md:text-left md:items-start"
            >
              {/* Profile Photo with Glow */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/assets/profile.jpg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-2 border-purple-500 shadow-lg"
                />
                {/* Badge */}
                <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white text-xs font-semibold shadow-lg border border-purple-400/50">
                  Available
                </div>
              </div>

              {/* Heading & Intro */}
              <div className="space-y-4">
                <h2 className="text-heading bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                  Let's Work Together
                </h2>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-sm">
                  Looking to build something amazing? Whether you need a new
                  website, want to improve your existing platform, or have a
                  unique project in mind, I'm here to bring your vision to life.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 w-full">
                {/* Email */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href="mailto:aakashkumar11768@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-neutral-800/30 border border-neutral-700/50 hover:border-purple-500/50 hover:bg-neutral-800/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-neutral-500">Email</p>
                    <p className="text-sm text-neutral-200 font-medium truncate">
                      aakashkumar11768@gmail.com
                    </p>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://www.linkedin.com/in/aakashkumar19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-neutral-800/30 border border-neutral-700/50 hover:border-blue-500/50 hover:bg-neutral-800/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.005 1.413-.103.25-.129.599-.129.948v5.444h-3.554s.05-8.829 0-9.74h3.554v1.381c.43-.664 1.198-1.607 2.915-1.607 2.126 0 3.72 1.389 3.72 4.374v5.592zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.77-1.71 1.956-1.71 1.187 0 1.915.754 1.948 1.71 0 .951-.761 1.71-1.989 1.71zm1.582 11.597H3.635V9.567h3.284v10.885zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-neutral-500">LinkedIn</p>
                    <p className="text-sm text-neutral-200 font-medium">
                      Connect with me
                    </p>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  whileHover={{ x: 4 }}
                  href="https://github.com/aakash-kumar17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-neutral-800/30 border border-neutral-700/50 hover:border-white/50 hover:bg-neutral-800/60 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-gray-500/50 transition-all">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-neutral-500">GitHub</p>
                    <p className="text-sm text-neutral-200 font-medium">
                      View my projects
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              variants={itemVariants}
              custom={2}
              className="flex flex-col justify-center"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-neutral-600"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-neutral-600"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:border-neutral-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          opacity="0.2"
                        />
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                {/* Auto-reply notice */}
                <p className="text-xs text-neutral-500 text-center">
                  I'll get back to you as soon as possible!
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
