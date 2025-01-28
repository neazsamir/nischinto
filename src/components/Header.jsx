import { useState } from "react";
import { Navbar, MobileNav, Typography, IconButton } from "@material-tailwind/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleNavToggle = () => setOpenNav(!openNav);

  return (
    <Navbar className="sticky top-0 z-10 max-w-full px-4 py-2 bg-white shadow-md max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Typography as="a" href="/" variant="h6" className="text-blue-600 text-2xl">
          NISCHINTO
        </Typography>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#features" className="text-gray-700 hover:text-blue-600">
            Features
          </a>
          <a href="#why-nischinto" className="text-gray-700 hover:text-blue-600">
            Why Nischinto
          </a>
          <a href="#virtual-card" className="text-gray-700 hover:text-blue-600">
            Virtual Card
          </a>
          <a href="#plan" className="text-gray-700 hover:text-blue-600">
            Plan
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600">
            Testimonials
          </a>
          <a href="#download" className="text-gray-700 hover:text-blue-600">
            Download
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <IconButton variant="text" className="lg:hidden" onClick={handleNavToggle}>
          {openNav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </IconButton>
      </div>

      {/* Mobile Nav */}
      <MobileNav open={openNav} className="lg:hidden">
        <div className="flex flex-col gap-4">
          <a href="#features" className="text-gray-700 hover:text-blue-600">
            Features
          </a>
          <a href="#why-nischinto" className="text-gray-700 hover:text-blue-600">
            Why Nischinto
          </a>
          <a href="#virtual-card" className="text-gray-700 hover:text-blue-600">
            Virtual Card
          </a>
          <a href="#plan" className="text-gray-700 hover:text-blue-600">
            Plan
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600">
            Testimonials
          </a>
          <a href="#download" className="text-gray-700 hover:text-blue-600">
            Download
          </a>
        </div>
      </MobileNav>
    </Navbar>
  );
};