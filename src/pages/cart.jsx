import { FaArrowRight } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { BsFillTrash3Fill } from "react-icons/bs";
import { topselling1Img } from "../assets";

const Cart = () => {
  return (
    <div className="w-full px-16 py-3">
       <div className="w-full space-y-4">
         <header className="integral-md font-bold tracking-wider text-4xl"> your cart </header>
         <section className="flex w-full gap-6 py-6">
           <div className="w-4/6  border rounded-2xl  border-slate-200 ring-0 ring-slate-200 h-fit">
               <div className="flex justify-between p-4 ">
                  <section className="border-b border-b-slate-300 w-full py-4">
                    <div className="flex gap-4" >
                        <div className="rounded-xl border-slate-200 border overflow-hidden">
                        <img src={topselling1Img} alt=""  width={100}/>
                        </div>
                        <div className="space-y-2">
                          <p className="font-satoshi font-semibold text-xl" >Skinny Jeans</p>
                          <div>
                            <p className="font-satoshi text-sm font-light">Size: <span className="text-slate-500">Large</span> </p>
                            <p className="font-satoshi text-sm font-light">Color: <span className="text-slate-500">Blue</span> </p>
                          </div>
                          <p className="flex  font-bold  text-xl font-satoshi">$240</p>
                        </div>
                      </div>
                </section>
                <section className="  px-6 py-4  flex flex-col  border-b border-b-slate-300  items-end justify-between">
                  <BsFillTrash3Fill color="red" />
                  <div className="flex bg-gray rounded-full full gap-4 px-6 py-2 ">
                    <p className="font-semibold text-xl">-</p>
                    <p  className="font-semibold text-xl">count</p>
                    <p  className="font-semibold text-xl ">+</p>
                  </div>
                </section>
               </div>
           
           </div>
           <div className=" space-y-4 border border-slate-200 w-1/3 p-4 rounded-2xl ring-0 ring-slate-200">
             <header className="font-satoshi font-semibold text-xl">Order Summary</header>
             <div className="flex items-center justify-between">
               <p className="font-satoshi text-xl text-slate-500 font-light">Subtotal</p>
               <p className="font-bold text-xl  ">amount</p>
             </div>
             <div className="flex items-center justify-between">
              <p className="font-satoshi text-xl text-slate-500 font-light">discount(-20%)</p>
              <p className="font-bold text-xl">amount</p>
             </div>
             <div className="flex items-center justify-between border-b border-b-slate-400 pb-3">
               <p className="font-satoshi text-xl text-slate-500 font-light">Delivery fee</p>
               <p className="font-bold text-xl">amount</p>
             </div>
             <div className="flex items-center justify-between">
              <p className="font-satoshi text-xl">Total</p>
              <p className="font-bold text-xl">amount</p>
             </div>
             <form className="flex items-center gap-4 justify-between">
                <div className="flex items-center gap-3 bg-gray px-4 py-2 rounded-full">
                 <GoTag size={20}/>
                 <input type="search" name="" id="" placeholder="Add promo code" className="outline-none bg-gray max-w-[200px]" />
                </div>
                <button className="bg-black text-white px-8 py-2 rounded-full">Apply</button>
             </form>
             <center>
                <button className=" justify-center flex items-center gap-3 bg-black text-white w-full py-3 rounded-full ">
                  Go to Checkout
                   <FaArrowRight />
                </button>
             </center>
           </div>
         </section>
       </div>
    </div>
  )
}

export default Cart