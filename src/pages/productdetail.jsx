import { useParams } from "react-router-dom"
import { allproduct } from "../utils/_variable";
import ReactStars from 'react-rating-stars-component'
import DetailsTab from "../components/tabs/detailtab";
import RatingTab from "../components/tabs/ratingtab";
import FaqTab from "../components/tabs/faqtab";
import {  useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
const Tabs=[
    {
        header:"Product Details",
        content:<DetailsTab/>
    },
    {
        header:"Rating & Reviews",
        content:<RatingTab/>
    },
    {
        header:"FAQS",
        content:<FaqTab/>
    }
]

const Productdetail = () => {
     const [currentTab,setCurrentTab]=useState(0)
     const firstTabRef=useRef()
     useEffect(()=>{
       firstTabRef.current.focus()
     },[])

     const handleClick= (index)=>{
          setCurrentTab((prev)=>(prev === index ? currentTab : index))
     }
     
    const params = useParams();
    console.log(params)
    const  items=allproduct.find((i)=>i.title === params?.name)
    if(!items){
        return (
            <>
                <div>
                    <p>product not found</p>
                </div>
            </>
        )
    }
  return (
    <div className="flex justify-center px-16 w-full">
        <div>
            <div className="flex justify-between gap-6">
                <section className="flex justify-end w-full">
                {/*  */}
                
                    {/*  */}
                    <div className="rounded-xl overflow-hidden">
                    <img src={items.img} alt={items.title} />
                    </div>
                </section>
                <div>
                <section className="flex flex-col gap-3 w-full">
                        <h3 className="integral font-bold tracking-wide text-4xl">{items.title}</h3>
                        <div className="flex items-center gap-4">
                            <ReactStars
                                    count={5}
                                    size={30}
                                    activeColor="#ffd700"
                                    isHalf={true}
                                    value={items.count}
                            />
                            <span>{items.count}/<span className="text-slate-700 text-opacity-60">5</span></span>

                        </div>
                        <div className="flex  gap-3">
                                <h3 className="font-satoshi font-bold text-2xl "><span className="font-inter">$</span>{items.price}</h3>
                            { items.discount && <h3 className="font-satoshi font-semibold text-2xl opacity-40 line-through"><span className="font-inter">$</span>{items.discount}</h3>}
                            { items.percentage && <div className="bg-rose-100 px-3 py-1 text-center rounded-full"> <p className="font-satoshi text-sm text-red-500"> <span className="font-inter">-</span>{items.percentage}<span className="font-inter">%</span></p></div> }
                        </div>   
                        <article className="pr-8 pb-3 border-b border-b-slate-300">
                            <p className="font-satoshi text-black text-opacity-60">
                            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                            </p>
                        </article>
                </section>
                <section className="py-3 border-spacing-y-3 gap-3 border-b border-b-slate-300 ">
                    <p  className="font-satoshi text-black text-opacity-60">Select Colors</p>
                        <p>radio buttons for colors </p>
                </section>
                <section className="py-3 border-spacing-y-3 gap-3 border-b border-b-slate-300 ">
                    <p  className="font-satoshi text-black text-opacity-60">Choose Size</p>
                        <div className="flex gap-4 pt-2">
                            <button className={`font-satoshi text-black text-opacity-90 font-light bg-btn-pri  px-4  py-1 rounded-2xl`}>Small</button>
                            <button className={`font-satoshi text-black text-opacity-90 font-light bg-btn-pri  px-4  py-1 rounded-2xl`}>Medium</button>
                            <button className={`font-satoshi text-black text-opacity-90 font-light bg-btn-pri  px-4  py-1 rounded-2xl`}>Large</button>
                            <button className={`font-satoshi text-black text-opacity-90 font-light bg-btn-pri  px-4  py-1 rounded-2xl`}>X-large</button>
                        </div>
                </section>
                <section className=" py-4 flex  gap-4 justify-between items-center">
                    <div className="flex gap-4  py-3 justify-around items-center w-1/2 bg-btn-pri px-4 rounded-full "> 
                        <button className="font-bold text-2xl">-</button>
                        <p className="font-bold">count</p>
                        <button className="font-bold text-2xl">+</button>
                    </div>
                    <button className="text-center w-full bg-black text-white py-3 rounded-full  ">Add to Cart </button>
                </section>
                </div>
            </div>
            <section>
             {/* Start of Tab Component Section */}
               <div>
                    <ul className="flex items-center justify-around w-full">
                        {Tabs.map((item, index) => (
                        <li key={index} className="w-full border-b border-b-slate-500">
                            <motion.button
                            initial={false}
                            ref={index === 0 ? firstTabRef : null}
                            onClick={() => handleClick(index)}
                            className={`w-full p-2 outline-none ${
                                currentTab === index ? "border-b-2 border-blue-800" : ""
                            }`}
                            >
                            {item.header}
                            </motion.button>
                        </li>
                        ))}
                    </ul>

                    <div>
                        <AnimatePresence mode="wait">
                        {Tabs.map(
                            (item, index) =>
                            currentTab === index && (
                                <motion.div
                                key={index}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                >
                                {item.content}
                                </motion.div>
                            )
                        )}
                        </AnimatePresence>
                    </div>
                </div>
                {/* End of Tab Component Section */}



            </section>

        </div>
    </div>
  )
}

export default Productdetail 