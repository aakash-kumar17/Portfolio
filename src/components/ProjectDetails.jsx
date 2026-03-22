import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const handleOutsideClick = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-hidden backdrop-blur-md bg-black/40"
    >
      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto border shadow-2xl rounded-3xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute p-2 transition rounded-full top-4 right-4 bg-midnight hover:bg-primary z-10"
          aria-label="Close modal"
        >
          <img src="assets/close.svg" className="w-5 h-5" alt="close" />
        </button>

        {/* Project Image */}
        <div className="relative w-full overflow-hidden rounded-t-3xl h-64 md:h-80">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4">
          {/* Title */}
          <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>

          {/* Main Description */}
          <p className="text-base text-neutral-300 md:text-lg leading-relaxed">
            {description}
          </p>

          {/* Sub Descriptions */}
          <div className="space-y-3">
            {subDescription.map((subDesc, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-primary" />
                <p className="text-sm text-neutral-400 md:text-base leading-relaxed">
                  {subDesc}
                </p>
              </div>
            ))}
          </div>

          {/* Tags and Button */}
          <div className="flex flex-col gap-4 pt-4 md:flex-row md:items-center md:justify-between">
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  title={tag.name}
                  className="rounded-lg size-10 hover:scale-110 transition-transform"
                />
              ))}
            </div>

            {/* View Project Button */}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 font-medium text-white transition rounded-lg bg-primary hover:bg-primary/80 w-fit"
            >
              View Project
              <img src="assets/arrow-up.svg" className="size-4" alt="arrow" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
