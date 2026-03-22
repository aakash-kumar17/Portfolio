import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { motion } from "motion/react";

const Project = ({
  id,
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="flex flex-col justify-between item-center py-10 space-y-6 sm:flex-row sm:items-center sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl font-semibold text-white">{title}</p>
          <div className="flex flex-wrap gap-3 mt-3 text-sand">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="text-sm font-medium text-orange-400"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <motion.button
          onClick={handleOpenModal}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 text-white transition rounded-lg hover:text-primary w-fit"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" alt="arrow" />
        </motion.button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Modal */}
      {isModalOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={handleCloseModal}
        />
      )}
    </>
  );
};

export default Project;
