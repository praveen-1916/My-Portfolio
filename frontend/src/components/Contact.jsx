import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Button, Input, Textarea } from "@material-tailwind/react";
import React, { useState } from "react";
import { motion } from "motion/react";
import Swal from "sweetalert2";

function Contact() {
  const [btnLoading, setBtnLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setBtnLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "073b4692-f33a-4ce1-bb37-15ba7143bc78");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    setBtnLoading(false);
    if (res.success) {
      Swal.fire({
        title: "Good Job!",
        text: res.message,
        icon: res.success ? "success" : "error",
      });
    }
  };
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
            Connect with me
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#242424] font-normal text-5xl mt-3 mb-5"
          >
            Get in touch
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-[#565656] font-normal text-lg leading-8"
          >
            I'd love to hear from you! If you have any questions, comments or
            feedback, please use the form below.
          </motion.p>
        </div>
        <div className="my-10 md:w-[672px]">
          <form onSubmit={onSubmit}>
            <div className="grid gap-10 md:grid-cols-2 ">
              <motion.label
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                htmlFor="FullName"
              >
                <Input
                  id="FullName"
                  name="name"
                  size="lg"
                  label="Enter your name"
                  required
                  minLength={3}
                  className="bg-white tracking-wide"
                  style={{ fontSize: "1rem" }}
                />
              </motion.label>
              <motion.label
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                htmlFor="Email"
              >
                <Input
                  type="email"
                  name="email"
                  id="Email"
                  size="lg"
                  label="Enter your email"
                  required
                  className="bg-white tracking-wide"
                  style={{ fontSize: "1rem" }}
                />
              </motion.label>
            </div>
            <motion.div
              className="my-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Textarea
                size="lg"
                variant="outlined"
                name="message"
                label="Enter your messgae"
                required
                minLength={5}
                className="bg-white min-h-40 h-full tracking-wide text-xl"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                opacity: { duration: 0.8 },
              }}
            >
              <Button
                type="submit"
                variant="gradient"
                loading={btnLoading}
                className="flex items-center gap-3 rounded-full tracking-wider mx-auto"
              >
                Submit now{" "}
                <ArrowLongRightIcon className="h-4 w-4" strokeWidth={2} />
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
