import React from "react";
import { motion } from "motion/react";
import {
  Html5Original,
  Css3Original,
  NodejsOriginalWordmark,
  ReactOriginal,
  ExpressOriginal,
  MongodbOriginal,
  MysqlOriginal,
  JavascriptOriginal,
  TailwindcssOriginal,
  BootstrapOriginal,
} from "devicons-react";
import { Progress, Typography } from "@material-tailwind/react";
import "../App.css";

function Skills() {
  const mySkils = [
    {
      skill: "HTML",
      proficiency: 75,
      icon: <Html5Original />,
    },
    { skill: "CSS", proficiency: 75, icon: <Css3Original /> },
    { skill: "JavaScript", proficiency: 70, icon: <JavascriptOriginal /> },
    { skill: "React", proficiency: 65, icon: <ReactOriginal /> },
    { skill: "Express.js", proficiency: 60, icon: <ExpressOriginal /> },
    { skill: "Node.js", proficiency: 70, icon: <NodejsOriginalWordmark /> },
    { skill: "MongoDB", proficiency: 70, icon: <MongodbOriginal /> },
    { skill: "MySQL", proficiency: 50, icon: <MysqlOriginal /> },
    { skill: "TailwindCSS", proficiency: 70, icon: <TailwindcssOriginal /> },
    { skill: "Bootstrap", proficiency: 75, icon: <BootstrapOriginal /> },
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
            className="sm:text-2xl text-xl text-[#242424] font-normal tracking-wide"
          >
            Areas of Expertise
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#242424] font-normal text-3xl sm:text-5xl mt-3 mb-5"
          >
            My Technical Skills
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-[#565656] font-normal text-base sm:text-lg leading-8"
          >
            My technical skills empower me to solve problems efficiently,
            innovate seamlessly, and drive progress with precision.
          </motion.p>
        </div>

        <div className="lg:w-[768px] grid lg:grid-cols-2 gap-8 mt-12">
          {mySkils.map(({ skill, proficiency, icon }, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center gap-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
            >
              <div>{icon}</div>
              <Typography className="max-w-24 w-full  text-[#242424] font-normal tracking-wide">
                {skill}
              </Typography>
              <Progress
                color="teal"
                value={proficiency}
                className="hover:shadow-[#009688] hover:shadow-lg cursor-pointer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
