import React from "react";
import image from "../assets/Mask group.png";
import { Button } from "@material-tailwind/react";
import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import resume from "../assets/Praveen_Kumar_Resume.pdf";
import { motion } from "motion/react";

function Home() {
  return (
    <motion.div
      className="text-center h-[calc(100vh-95px)] max-w-full flex items-center justify-center bg-transparent"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center gap-6 mx-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img src={image} alt="Profile photo" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-[#242424] font-normal md:text-2xl text-xl leading-10"
        >
          Hi! I’m Praveen Kumar
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-[#242424] md:text-6xl text-4xl font-normal"
        >
          Full Stack developer <br />
          based in India.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-[#565656] text-lg tracking-wide"
        >
          I am a fresher egerly looking for opportuinities in a full stack
          developer role.
        </motion.p>
        <div className="flex items-center sm:flex-row flex-col gap-4 mt-4">
          <motion.a
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1, default: { duration: 0.5 } }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/praveen-kumar-battu-55513a276/"
            target="_blank"
          >
            <Button
              variant="gradient"
              className="flex items-center gap-2 rounded-full tracking-wider"
            >
              Connect with me{" "}
              <ArrowRightIcon className="h-4 w-4" strokeWidth={2} />
            </Button>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1, default: { duration: 0.5 } }}
            href={resume}
            download="Praveen_Kumar_Resume"
          >
            <Button
              variant="outlined"
              className="flex items-center gap-3 rounded-full tracking-wider"
            >
              My Resume{" "}
              <ArrowDownTrayIcon className="h-4 w-4" strokeWidth={2} />
            </Button>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
