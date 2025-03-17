import { NavLink } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex justify-center">
        <nav className="flex items-center justify-center md:justify-between gap-8 md:gap-4 lg:gap-10 py-4 w-full px-16">
            <NavLink className={`integral text-2xl`} to={"/"}>Shop.co</NavLink>
            <div className="justify-around text-md font-light font-satoshi hidden lg:flex items-center gap-6">
                <NavLink to={"/shop"}>shop</NavLink>
                <NavLink>on Sale</NavLink>
                <NavLink>New Arrivals</NavLink>
                <NavLink>Brands</NavLink>
            </div>
            <div className="">
                <div className=" hidden  lg:flex justify-center items-center gap-2  text-black opacity-60  border-slate-500  border px-4 py-2 focus-within:border-slate-900  rounded-3xl bg-[#F2F0F1]">
                <CiSearch fontSize={20}  className=""/>
                    <input type="text" placeholder="Search for product " className="flex w-[500px] outline-none bg-gray"  />
                </div>
            </div>
            <div className="flex justify-center items-center  gap-6">
               <CiSearch fontSize={20}  className="lg:hidden"/>
                <NavLink to={"/cart"}> <LuShoppingCart fontSize={20} /> </NavLink>
                <NavLink> <FaUserCircle fontSize={20} /></NavLink>
            </div>
        </nav>

    </div>
  )
}

export default Navbar