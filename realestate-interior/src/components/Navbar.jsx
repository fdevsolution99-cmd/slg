import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-bold text-yellow-500">
          SLG Interiors
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li><a href="#home">Home</a></li>
          <li><a href="#realestate">Real Estate</a></li>
          <li><a href="#kitchen">Kitchen</a></li>
          <li><a href="#living">Living</a></li>
          <li><a href="#bedroom">Bedroom</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div
          className="md:hidden text-2xl"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {menu && (
        <div className="md:hidden bg-black p-5">
          <ul className="flex flex-col gap-4">
            <li><a href="#home">Home</a></li>
            <li><a href="#realestate">Real Estate</a></li>
            <li><a href="#kitchen">Kitchen</a></li>
            <li><a href="#living">Living</a></li>
            <li><a href="#bedroom">Bedroom</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;