import { NavLink } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex  items-center justify-between gap-10 py-4 px-16">
        <NavLink className={`integral text-2xl`}>Shop.co</NavLink>
        <div className="flex justify-around text-md font-light font-satoshi  items-center gap-6">
            <NavLink>shop</NavLink>
            <NavLink>on Sale</NavLink>
            <NavLink>New Arrivals</NavLink>
            <NavLink>Brands</NavLink>
        </div>
        <div className="">
            <div className="flex justify-center items-center gap-2  text-black opacity-60  border-slate-500  border px-4 py-2 focus-within:border-slate-900  rounded-3xl bg-white">
               <CiSearch fontSize={20}  className=""/>
                <input type="text" placeholder="Search for product " className="lg:w-[500px] outline-none"  />
            </div>
        </div>
        <div className="flex justify-center items-center gap-6">
            <NavLink> <LuShoppingCart fontSize={20} /> </NavLink>
            <NavLink> <FaUserCircle fontSize={20} /></NavLink>
        </div>
    </nav>
  )
}

export default Navbar