
import { casual, formal, gucciLogoimg, gym, homeHeroimg, party, pradaLogoimg, versaceLogoimg, zaraLogoimg } from '../../assets'
import Marquee from 'react-fast-marquee'
import NewArrival from '../newArrival/newArrival'
import TopSelling from '../newarrival/topselling'
import { PiStarFourFill } from "react-icons/pi";
const Home = () => {
  return (
    <div className=''>
        {/* start od the hero */}
         <div className='flex justify-center'>
            <div className='flex flex-col items-center lg:flex-row justify-center gap-6 px-16 bg-gray pt-16'>
                <div className='w-full flex flex-col gap-10 pb-16 items-center'>
                    <article className='flex flex-col items-start gap-6 '>
                        <h3 className=' text-wrap text-2xl md:text-5xl lg:text-7xl  w-[300px] md:w-[650px]  font-bold integral '>Find clothes that matches your style</h3>
                        <p className='font-satoshi  w-[300px]  md:w-[650px] text-wrap text-md text-black opacity-70 font-thin'>Browse through our diverse range of meticulously crafted 
                        garments,designed to bring out your individuality and carter to your sense of style. 
                        </p>
                        <button className='bg-black text-white  px-16 py-3 font-satoshi font-light rounded-3xl '>Shop Now</button>
                    </article>
                    <div className=' grid grid-cols-2 md:grid-cols-3 gap-5'>
                      <article className='flex flex-col gap-3 items-start border-r border-r-slate-300 px-3 '>
                        <h3 className=' text-2xl md:text-4xl font-bold integral'>200<span className='font-inter'>+</span></h3>
                        <p>international Brands</p>
                      </article>
                      
                      <article className='flex flex-col gap-3 items-start border-r  border-r-slate-300 px-3 '>
                        <h3 className='text-2xl md:text-4xl font-bold integral'>2000<span className='font-inter'>+</span></h3>
                        <p>high quality products</p>
                      </article>
                      <article className='flex flex-col gap-3 items-start'>
                        <h3 className=' text-2xl md:text-4xl font-bold integral'>30,000<span className='font-inter'>+</span> </h3>
                        <p>happy customers</p>
                      </article>
                    </div>
                </div>
                <div className='object-cover w-3/4 flex items-center'>
                
                <PiStarFourFill  size={240}/>
                  <div className='flex items-start'>
                    <img src={homeHeroimg} alt=""    className=' w-[500px] md:w-[2000px] ' />
                    <PiStarFourFill  size={300} className=''/>
                  </div>
                </div>
            </div>
         </div>
        {/* end of the hero  */}
        {/* start of a marquee  */}
        <section className=''>

           <Marquee >
               <div className='flex justify-between items-center bg-black gap-16 py-4 w-full'>
                    <img src={pradaLogoimg} alt=""  />
                    <img src={gucciLogoimg} alt=""  />
                    <img src={versaceLogoimg} alt=""  />
                    <img src={zaraLogoimg} alt=""  />
               </div>
               <div className='flex justify-between items-center bg-black gap-16 py-4  px-8 w-full'>
                    <img src={pradaLogoimg} alt=""  />
                    <img src={gucciLogoimg} alt=""  />
                    <img src={versaceLogoimg} alt=""  />
                    <img src={zaraLogoimg} alt=""  />
               </div>
           </Marquee>
        </section>
        {/* end of the marquee */}
        {/* start of new arrival */}
         <div className='mt-8'>
            <NewArrival/>
         </div>
        {/* end of new arrival */}
        {/* start of top selling */}
          <div className='mt-8'>
           <TopSelling/>
          </div>
        {/* end of top selling */}
        <section className='mt-8 px-16 bg-gray py-16 mx-16 rounded-2xl'>
          <center className='text-xl md:text-5xl integral pb-16'>Browse by dress style</center>        
          <div className='flex flex-col gap-4'>
             <div className='flex gap-4 flex-col  items-center md:flex-row w-full'>
                <div className='md:gap-4  bg-white rounded-2xl flex items-start pl-6 overflow-hidden'>
                  <h2 className='font-satoshi font-bold text-xl md:text-3xl pt-10'>Casual</h2>
                  <img src={casual} alt="casual" />
                </div>
                <div className=' md:gap-20 bg-white rounded-2xl flex items-start  pl-36  md:pl-8 overflow-hidden'>
                  <h2 className='font-satoshi font-bold text-xl md:text-3xl pt-10'>Formal</h2>
                  <img src={formal} alt="formal"  />
                </div>
              </div>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <div className='md:gap-16 bg-white rounded-2xl flex items-start pl-40 md:pl-8 overflow-hidden'>
                  <h2 className=' font-satoshi font-bold text-xl md:text-3xl pt-10'>Party</h2>
                  <img src={party} alt="party"  />
                </div>
                <div className='bg-white rounded-2xl flex items-start pl-10 overflow-hidden'>
                  <h2 className='font-satoshi font-bold text-xl md:text-3xl pt-10'>Gym</h2>
                  <img src={gym} alt="gym" />
                </div>
              </div>
          </div>
          
        </section>
        
    </div>
  )
}

export default Home