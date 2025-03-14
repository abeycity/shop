import { arrivals } from "@/utils/_variable.js";
import ReactStars from 'react-rating-stars-component' 
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <div className="flex flex-col items-center gap-16">
          <center className="text-2xl md:text-5xl integral">New Arrivals</center>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
           {  arrivals.map(({img,price,count,title,discount,percentage},index)=>
             <Link key={index} to={`product/${title}`}>
             
              <div  className="flex flex-col gap-4">
                  <div> <img src={img} alt={title}  className="rounded-xl" /></div>
                  <article>
                      <h2 className="font-satoshi font-bold text-md ">{title}</h2>
                      <ReactStars
                        count={5}
                        size={24}
                        activeColor="#ffd700"
                        isHalf={true}
                        value={count}
                      />
                      <div className="flex  gap-3">
                          <h3 className="font-satoshi font-bold text-2xl "><span className="font-inter">$</span>{price}</h3>
                        { discount && <h3 className="font-satoshi font-semibold text-2xl opacity-40 line-through"><span className="font-inter">$</span>{discount}</h3>}
                        { percentage && <div className="bg-rose-100 px-3 py-1 text-center rounded-full"> <p className="font-satoshi text-sm text-red-500"> <span className="font-inter">-</span>{percentage}<span className="font-inter">%</span></p></div> }
                      </div>
                  </article>
              </div>
             </Link>
           )
           }
          </div>
     </div>
  )
}

export default NewArrival