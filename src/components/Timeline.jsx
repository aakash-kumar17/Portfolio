"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (selectedCertificate) {
      // Disable body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scroll
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCertificate]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    if (selectedCertificate) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCertificate]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">Professional Credentials</h2>
      <div className="relative pb-8">
        {data
          .filter((item) => item.isCredential)
          .map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-5 md:pt-10 md:gap-10"
            >
              {!item.isCredential && (
                <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                    <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
                  </div>
                  <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                    <h3>{item.date}</h3>
                    <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                    <h3 className="text-3xl text-neutral-500">{item.job}</h3>
                  </div>
                </div>
              )}

              <div className="relative w-full pl-0 pr-0 md:pl-0">
                <>
                  <div className="p-6 rounded-lg border border-neutral-700 bg-gradient-to-br from-neutral-900 to-neutral-950 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 min-h-32 flex flex-col justify-between">
                    <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                      <h3>{item.date}</h3>
                      <h3 className="text-lg text-neutral-400 mt-2">
                        {item.job}
                      </h3>
                    </div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-neutral-200 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-neutral-500 mb-1">
                          {item.date}
                        </p>
                        <p className="text-sm text-neutral-400">{item.job}</p>
                      </div>
                      <div className="w-14 h-14 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 ml-4">
                        <span className="text-purple-400 text-2xl">📜</span>
                      </div>
                    </div>
                    <div className="mb-4 space-y-2">
                      {item.contents.map((content, index) => (
                        <p className="text-sm text-neutral-400" key={index}>
                          {content}
                        </p>
                      ))}
                    </div>
                    {item.certificateUrl && (
                      <button
                        onClick={() =>
                          setSelectedCertificate(item.certificateUrl)
                        }
                        className="inline-block px-4 py-2 text-sm font-semibold text-neutral-900 bg-gradient-to-r from-purple-500 to-lavender rounded-lg hover:from-purple-400 hover:to-lavender/90 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 w-fit"
                      >
                        View Certificate →
                      </button>
                    )}
                  </div>
                  <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-6 h-[1px] w-full" />
                </>
              </div>
            </div>
          ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-neutral-900 rounded-xl max-w-4xl w-full mx-auto border border-neutral-700 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-20 p-2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 rounded-lg transition-all duration-200 hover:scale-110"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Certificate PDF Container */}
            <div className="w-full h-[80vh] bg-neutral-950 p-6 flex items-center justify-center">
              <iframe
                src={selectedCertificate}
                className="w-full h-full rounded-lg border border-neutral-700 bg-white"
                title="Certificate"
                frameBorder="0"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};
