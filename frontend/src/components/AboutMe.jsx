import React from "react";
import image from "../assets/Mask group1.png";
import { Card, CardBody } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { motion } from "motion/react";

import image393 from "../assets/image393.png";
import image396 from "../assets/image396.png";
import Group4226 from "../assets/Group4226.png";
import docker from "../assets/docker-mark-blue.png";
import kubernetes from "../assets/Kubernetes.png";

function AboutMe() {
  const aboutDetails = [
    {
      icon: CodeBracketIcon,
      title: "Languages",
      description: "HTML&CSS, Java Script, MERN Stack, MySQL",
    },
    {
      icon: AcademicCapIcon,
      title: "Education",
      description: "B.Tech in Mechanical Engineering",
    },
    {
      icon: BriefcaseIcon,
      title: "Projects",
      description: "Built more than 4 projects",
    },
  ];

  const toolsUsed = [
    {
      image: Group4226,
      name: "VS Code",
    },
    {
      image: image393,
      name: "Mongo DB",
    },
    {
      image: image396,
      name: "GitHub",
    },
    { image: docker, name: "Docker" },
    {
      image: kubernetes,
      name: "Kubernetes",
    },
  ];
  return (
    <div className="lg:h-screen w-full bg-transparent flex justify-center items-center">
      <div className="mx-10">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl text-[#242424] font-normal mb-3 tracking-wider"
          >
            Introduction
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#242424] font-normal text-5xl"
          >
            About Me
          </motion.p>
        </div>
        <div className="max-w-5xl flex lg:flex-row flex-col items-center gap-14 mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/3 w-full h-full"
          >
            <img src={image} alt="My Profile Photo" className="mx-auto" />
          </motion.div>
          <div className="lg:w-2/3 w-full">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[#565656] font-normal text-base tracking-wide sm:text-start text-center"
            >
              Aspiring Full-Stack Developer with a focus on MERN stack
              technologies, skilled in MongoDB, Express.js, Node.js, and React.
              Determined to leverage comprehensive knowledge in modern UI
              libraries to contribute to dynamic web applications. Seeking
              opportunities to grow in the field by delivering innovative
              solutions and enhancing user experiences through cutting-edge
              development practices.
            </motion.p>
            <div className="w-full grid sm:grid-cols-3 gap-5 my-8">
              {aboutDetails.map(({ icon, title, description }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.8,
                    default: { duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                >
                  <Card
                    shadow={false}
                    className="bg-transparent border h-full border-[#d8d8d8] rounded-md cursor-pointer"
                  >
                    <CardBody>
                      {React.createElement(icon, {
                        className: "h-5 w-5",
                        strokeWidth: 2,
                      })}
                      <p className="my-2 text-[#494949] font-medium text-lg">
                        {title}
                      </p>
                      <p className="text-sm text-[#797979] font-normal tracking-wide">
                        {description}.
                      </p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#868686] text-xl font-normal mb-4 sm:text-start text-center">
                Tools i use
              </p>
              <div className="flex items-center sm:justify-start justify-center flex-wrap gap-5">
                {toolsUsed.map(({ image, name }, index) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1,
                      duration: 0.8,
                      default: { duration: 0.5 },
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={index}
                    className="h-[70px] w-[70px] cursor-pointer bg-transparent border border-[#848484] rounded-md p-4"
                  >
                    <img src={image} alt={name} className="object-cover" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
