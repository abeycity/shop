import { TiMail } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    const today = new Date();
  return (
     <div className="">
        <div className=" ">
        <div className="relative  pt-16 mt-32 flex justify-center">
            <div className=" mx-6 lg:mx-16  absolute  -top-6 bg-black text-white flex flex-col lg:flex-row items-center p-6 lg:p-10 gap-16 rounded-3xl">
                <h3 className="text-2xl lg:text-5xl integral-regular w-[300px] md:w-full">stay up to date about our latest offers</h3>
                <div className=" w-full lg:w-1/2  ">
                    <form action="" className=" flex flex-col items-start gap-4">
                        <div className="flex bg-white py-2 px-4 gap-4 rounded-3xl focus-within:ring-blue-700 focus-within:ring-inset focus-within:ring w-full">
                            <TiMail  className="text-black opacity-50" fontSize={30} />
                            <input type="email" name="" id="" className="text-black opacity-75 outline-none  w-full lg:w-5/6 " placeholder="Enter your email address" />
                        </div>
                        <div className="w-full bg-white py-2 px-4 gap-4 rounded-3xl text-center font-semibold text-md font-satoshi">
                        <button className="text-black  "> Subscribe to Newsletter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="bg-gray pt-[20rem] lg:pt-32 p-16 flex  flex-col  gap-6  md:gap-3 items-center md:flex-row   justify-between w-full border-b border-b-slate-300">
                <div className="flex flex-col gap-6 ">
                    <article className="flex flex-col gap-6">
                        <h3 className="text-4xl integral">Shop.co</h3>
                        <p className="w-[300px] md:w-[460] font-satoshi font-extralight text-sm opacity-50">We have clothes that suits your style and
                            which you&lsquo;re proud to wear.From women to men
                        </p>
                    </article>
                    <div className="flex gap-6 items-center">
                        <div className="bg-white p-2 rounded-full border border-slate-500"><AiOutlineTwitter /></div>
                        <div className="bg-black p-2 rounded-full border border-slate-500"> <FaFacebookF  className="text-white"/></div>
                        <div className="bg-white p-2 rounded-full border border-slate-500"><FaInstagram /></div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-10">
                    <div className="flex flex-col gap-6">
                        <h3 className="font-satoshi font-medium uppercase text-md  tracking-widest ">company</h3>
                        <ul className="flex flex-col gap-4 opacity-70">
                            <li>About</li>
                            <li>Features</li>
                            <li>Works</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-satoshi font-medium uppercase text-md  tracking-widest ">Help</h3>
                        <ul className="flex flex-col gap-4 opacity-70">
                            <li>Customer Support</li>
                            <li>Delivery Details</li>
                            <li>Terms & conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-satoshi font-medium uppercase text-md  tracking-widest ">FAQ</h3>
                        <ul className="flex flex-col gap-4 opacity-70">
                            <li>Account</li>
                            <li>Manage Deliveries</li>
                            <li>Orders</li>
                            <li>Payments</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h3 className="font-satoshi font-medium uppercase text-md  tracking-widest ">Resources</h3>
                        <ul className="flex flex-col gap-4 opacity-70">
                            <li>Free Ebooks</li>
                            <li>Development Tutorial</li>
                            <li>How to -blog </li>
                            <li>Youtube playlists</li>
                        </ul>
                    </div>
                </div>
            </div>
        <div className="bg-gray px-16 pt-6 pb-10">
            <center className="text-sm opacity-60">Shop.co &copy; {today.getFullYear()} all Rights Reserved</center>
        </div>
        </div>
     </div>
 
  )
}

export default Footer