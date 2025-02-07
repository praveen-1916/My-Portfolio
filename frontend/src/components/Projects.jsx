import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Apple from "../assets/Apple-clone.png";
import Imagify from "../assets/Imagify.png";
import BgRemoval from "../assets/Bg-Removal.png";
import TaskManager from "../assets/Task-Manager.png";
import { motion } from "motion/react";
function Projects() {
  const myProjects = [
    {
      title: "Task Manager",
      tech: "MERN Stack",
      image: TaskManager,
      github: "https://github.com/praveen-1916/Task-Manger",
      live: "https://cloud-based-task-manger.onrender.com/",
    },
    {
      title: "Imagify",
      tech: "MERN Stack",
      image: Imagify,
      github: "https://github.com/praveen-1916/Imagify",
      live: "https://imagify-ai-image-generator-delta.vercel.app/",
    },
    {
      title: "Bg Remaoval",
      tech: "MERN Stack",
      image: BgRemoval,
      github: "https://github.com/praveen-1916/Bg-Removal",
      live: "https://bgremoval-ai-image-background-removal.vercel.app/",
    },
    {
      title: "Apple Clone",
      tech: "Frontend Design",
      image: Apple,
      github: "https://github.com/praveen-1916/Apple-Clone",
      live: "https://praveen-1916.github.io/Apple-Clone/",
    },
  ];

  return (
    <div className="lg:h-screen w-full bg-transparent flex items-center justify-center md:mt-12 mt-28 lg:mt-0">
      <div className="mx-10">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl text-[#242424] font-normal tracking-wide"
          >
            My portfolio
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#242424] font-normal text-4xl sm:text-5xl mt-3 mb-5"
          >
            My latest work
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-[#565656] font-normal text-lg leading-8"
          >
            Welcome to my web development portfolio! Explore a collection of
            projects showcasing my expertise in front-end development.
          </motion.p>
        </div>

        <div className="max-w-6xl grid lg:grid-cols-4 md:grid-cols-2 gap-8 my-16">
          {myProjects.map(({ title, tech, image, live, github }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                shadow={false}
                className="relative h-[20rem] w-full flex items-center justify-end overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  style={{ backgroundImage: `url(${image})` }}
                  className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
                >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="text-start max-w-xs relative p-6 mb-4 flex items-center gap-14">
                  <div>
                    <p className="font-semibold text-blue-gray-50 text-lg ">
                      {title}
                    </p>
                    <p className="font-normal text-blue-gray-100 text-base ">
                      {tech}
                    </p>
                  </div>

                  <Popover>
                    <PopoverHandler>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="h-12 w-12 rounded-full bg-white text-[#202020] hover:bg-[#202020] hover:text-white flex items-center shadow-gray-100 shadow-md justify-center cursor-pointer"
                      >
                        <PaperAirplaneIcon
                          className="h-5 w-5 -rotate-45"
                          strokeWidth={2}
                        />
                      </motion.div>
                    </PopoverHandler>
                    <PopoverContent className="flex items-center gap-4 bg-transparent shadow-none border-0">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          duration: 0.5,
                        }}
                        href={github}
                        target="_blank"
                      >
                        <Button
                          size="sm"
                          variant="gradient"
                          color="red"
                          className="flex items-center gap-3 rounded-full tracking-wider"
                        >
                          GitHub Code
                        </Button>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          duration: 0.5,
                        }}
                        href={live}
                        target="_blank"
                      >
                        <Button
                          size="sm"
                          variant="gradient"
                          color="cyan"
                          className="flex items-center gap-3 rounded-full tracking-wider"
                        >
                          Live Demo
                        </Button>
                      </motion.a>
                    </PopoverContent>
                  </Popover>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        <a href="https://github.com/praveen-1916/" target="_blank">
          <Button
            variant="outlined"
            className="flex items-center gap-3 rounded-full tracking-wider mx-auto"
          >
            See More <ArrowLongRightIcon className="h-4 w-4" strokeWidth={2} />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
