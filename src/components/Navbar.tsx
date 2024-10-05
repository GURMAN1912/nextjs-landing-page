import image from "../assets/images/logosaas.png"
import MenuIcon from "../assets/icons/menu.svg";
import Image from "next/image";
export const Navbar = () => {
  return (
    <div className="bg-black">
    <div className="px-2 ">
      <div className="py-4 flex items-center justify-between">
        <div className="relative">
          <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB9C2F,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md">

          </div>
          <Image src={image} alt="logo" className="w-12 h-12 relative hover:cursor-pointer" />
        </div>
        <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">

          <MenuIcon className="text-white " />
        </div>
        <nav className=" sm:flex gap-6 hidden items-center">
          <a href="" className="text-white opacity-60 hover:opacity-100 transition" >About</a>
          <a href="" className="text-white opacity-60 hover:opacity-100 transition" >Features</a>
          <a href="" className="text-white opacity-60 hover:opacity-100 transition" >Updates</a>
          <a href="" className="text-white opacity-60 hover:opacity-100 transition" >Help</a>
          <a href="" className="text-white opacity-60 hover:opacity-100 transition" >Customers</a>
          <button className="bg-white px-4 py-2 rounded-lg">Get for Free</button>
        </nav>

      </div>
    </div>
    </div>
  )
};
