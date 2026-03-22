import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const DownloadResumeButton = ({ resumeFile }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (!resumeFile) {
      console.warn("Resume file not provided");
      return;
    }

    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Aakash_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
    }, 2000);
  };

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-4 py-3 text-sm text-center rounded-full font-extralight bg-primary w-auto cursor-pointer overflow-hidden whitespace-nowrap"
    >
      <AnimatePresence mode="wait">
        {downloaded ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="downloaded"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/copy-done.svg" className="w-4" alt="downloaded" />
            Downloaded
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="download"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="assets/download.svg" className="w-4" alt="download" />
            Download Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default DownloadResumeButton;
