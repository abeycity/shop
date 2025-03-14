import { FaArrowRight } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { BsFillTrash3Fill } from "react-icons/bs";
import { topselling1Img } from "../assets";

const Cart = () => {
  return (
    <div className="flex justify-center w-full px-16 py-3">
       <div className="w-full space-y-4">
         <header className="integral-md font-bold tracking-wider text-4xl"> your cart </header>
         <section>
           <div>
             <section>
                <div>
                    <div>
                    <img src={topselling1Img} alt="" />
                    </div>
                    <div>
                      <p>Skinny Jeans</p>
                      <div>
                        <p>Size: <span>Large</span> </p>
                        <p>Color: <span>Blue</span> </p>
                      </div>
                      <p>$240</p>
                    </div>
                  </div>
             </section>
             <section>
               <BsFillTrash3Fill />
               <div>
                 <p>-</p>
                 <p>count</p>
                 <p>+</p>
               </div>
             </section>
           </div>
           <div>
             <header>Order Summary</header>
             <div>
               <p>Subtotal</p>
               <p>amount</p>
             </div>
             <div>
              <p>discount(-20%)</p>
              <p>amount</p>
             </div>
             <div>
               <p>Delivery fee</p>
               <p>amount</p>
             </div>
             <div>
              <p>Total</p>
              <p>amount</p>
             </div>
             <form>
                <div>
                 <GoTag />
                 <input type="search" name="" id="" placeholder="Add promo code" />
                </div>
                <button>Apply</button>
             </form>
            <button>
              <p>Go to Checkout</p>
              <FaArrowRight />
            </button>
           </div>
         </section>
       </div>
    </div>
  )
}

export default Cart