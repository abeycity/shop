import { FaAngleDown } from "react-icons/fa6";
import { ImEqualizer2 } from "react-icons/im";
import { RxBorderDotted } from "react-icons/rx";
import { IoCheckmarkCircle } from "react-icons/io5";
import { review } from "../../utils/_variable";
import ReactStars from 'react-rating-stars-component'
const RatingTab = () => {
  return (
    <div>
      <section className="flex justify-between items-center px-4 py-6">
        <div>
          <h3 className="integral-md text-xl tracking-wide">All Reviews  <span className="font-satoshi text-sm font-light">(10)</span></h3>
        </div>
        <div className="flex items-center gap-4">
          <div  className="bg-btn-pri rounded-full p-4">
           <ImEqualizer2 />
          </div>
          <div className="flex items-center gap-3 bg-btn-pri rounded-full px-4 py-3 ">
            <p className="font-medium font-inter">Latest</p>
            <FaAngleDown />
          </div>
          
            <button className="bg-black text-white px-8 font-inter py-3 rounded-full">Write a review</button>
        
        </div>
      </section>
      <section className="py-4 space-y-10">
        <div className="grid grid-cols-2 gap-6">

          {
            review.map(({count,name,desc,posted},index)=>
            <div key={index} className="p-6 border rounded-2xl border-slate-600 border-opacity-20">
              <div className="flex justify-between">
                  <ReactStars
                    count={5}
                    size={30}
                    activeColor="#ffd700"
                    isHalf={true}
                    value={count}
                    
                  />
                  <RxBorderDotted  fontSize={30}  className="opacity-60"/>

              </div>
              <div className="space-y-6">
                <article className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="font-inter font-semibold ">{name}</h3>
                    <IoCheckmarkCircle  fontSize={24}/>
                  </div>
                   <p className="text-black opacity-90 font-satoshi text-md font-light">&quot;{desc}&quot;</p>
                </article>
                <p className="text-black opacity-60 font-satoshi text-md">Posted on {posted}</p>
              </div>
            </div>
            )
          }
        </div>
        <center>
          <button className="border rounded-full border-slate-300 px-10 py-3 ring-2 ring-white font-inter font-medium">Load more Review</button>
        </center>
      </section>
    </div>
  )
}

export default RatingTab