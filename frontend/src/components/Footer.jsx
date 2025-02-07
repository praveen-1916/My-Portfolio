import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";
import React from "react";

function Footer() {
  return (
    <div className="text-center mt-10">
      <Typography variant="h3" color="blue-gray">
        Praveen<span className="text-red-500 text-3xl ml-0.5">.</span>
      </Typography>
      <div className="flex items-center justify-center gap-2">
        <EnvelopeIcon className="h-5 w-5 mt-1 text-[#7c7c7c]" />
        <Typography className="text-[#797979] text-base">
          pkumarbattu@gamil.com
        </Typography>
      </div>
      <div className="max-w-6xl lg:mx-auto mx-12 py-5 border-y border-[#969696] mt-8 flex items-center md:justify-between md:flex-row flex-col md:gap-0 gap-3">
        <Typography className="text-[#626262]">
          © 2025 Praveen kumar. All rights reserved.
        </Typography>
        <div className="flex items-center md:flex-nowrap flex-wrap justify-center gap-8">
          <Typography className="text-[#626262]">Terms of Services</Typography>
          {/* <Typography className="text-[#626262]">Privacy Policy</Typography> */}
          <Typography className="text-[#626262]">Connect with me</Typography>
        </div>
      </div>
    </div>
  );
}

export default Footer;
