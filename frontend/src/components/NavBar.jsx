import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Drawer,
} from "@material-tailwind/react";
import {
  ArrowUpRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Menu = ({ closeOpenNav }) => {
  const menuItems = [
    "Home",
    "About Me",
    "Technical Skills",
    "My works",
    "Contact",
  ];
  return (
    <>
      <div className="mb-2 flex items-center justify-between p-4 pb-0 bg-transparent lg:hidden">
        <Typography variant="h4" color="blue-gray">
          Praveen<span className="text-red-500 text-3xl ml-0.5">.</span>
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeOpenNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <div className="z-50 lg:w-[620px] h-full lg:py-3 py-6 lg:border lg:rounded-full shadow-md flex lg:justify-around items-center flex-col lg:gap-0 gap-4 lg:flex-row">
        {menuItems.map((item, index) => (
          <a
            className="text-[#2f2f2f] font-normal text-lg hover:text-blue-500 transition-colors"
            key={index}
            href={`#${item}`}
            onClick={closeOpenNav}
          >
            {item}
          </a>
        ))}
        <div className="sm:hidden" onClick={closeOpenNav}>
          <ConnectBtn />
        </div>
      </div>
    </>
  );
};

const ConnectBtn = () => {
  return (
    <a href="#Contact">
      <Button
        variant="outlined"
        className="flex md:px-8 md:py-3 py-2 tracking-wide items-center gap-3 rounded-full text-[#4d4d4d]"
      >
        Connect
        <ArrowUpRightIcon className="h-5 w-5" />
      </Button>
    </a>
  );
};

function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const closeOpenNav = () => {
    setOpenNav(!openNav);
  };

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      className="w-full mx-auto lg:px-10 px-12 py-5 bg-transparent"
      blurred={false}
      shadow={false}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h3"
          className="tracking-wide cursor-pointer py-1.5"
        >
          Praveen<span className="text-red-500 text-3xl ml-0.5">.</span>
        </Typography>
        <div className="lg:block hidden">
          <Menu />
        </div>
        <div className="sm:block hidden">
          <ConnectBtn />
        </div>

        <div className="sm:w-24 lg:hidden text-center">
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent "
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Drawer
        open={openNav}
        onClose={closeOpenNav}
        placement="right"
        className="bg-gradient-to-b from-[#F2FFF9] to-[#FFF6F1]"
      >
        <Menu closeOpenNav={closeOpenNav} />
      </Drawer>
    </Navbar>
  );
}

export default NavBar;
