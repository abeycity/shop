
import { casual, formal, gucciLogoimg, gym, homeHeroimg, party, pradaLogoimg, versaceLogoimg, zaraLogoimg } from '../../assets'
import Marquee from 'react-fast-marquee'
import NewArrival from '../newArrival/newArrival'
import TopSelling from '../newarrival/topselling'
const Home = () => {
  return (
    <div className=''>
        {/* start od the hero */}
        <div className='flex justify-between px-16'>
            <div>
                <article>
                    <h3>Find clothes that matches your style</h3>
                    <p>Browse through our diverse range of meticulously crafted 
                     garments,designed to bring out your individuality and carter to your sense of style. 
                    </p>
                    <button>Shop Now</button>
                </article>
                <div>
                  <article>
                    <h3>200+</h3>
                    <p>international Brands</p>
                  </article>
                  <article>
                    <h3>2000+</h3>
                    <p>high quality products</p>
                  </article>
                  <article>
                    <h3>30,000+</h3>
                    <p>happy customers</p>
                  </article>
                </div>
            </div>
            <div>
                <img src={homeHeroimg} alt="" />
            </div>
        </div>
        {/* end of the hero  */}
        {/* start of a marquee  */}
        <section className='mt-8'>

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
         <div>
            <NewArrival/>
         </div>
        {/* end of new arrival */}
        {/* start of top selling */}
          <TopSelling/>
        {/* end of top selling */}
        <section>
          <center>Browse by dress style</center>        
            <div>
              <div>
                <h2>Casual</h2>
                <img src={casual} alt="casual" />
              </div>
              <div>
                <h2>Formal</h2>
                <img src={formal} alt="formal" />
              </div>
            </div>
            <div>
              <div>
                <h2>Party</h2>
                <img src={party} alt="party" />
              </div>
              <div>
                <h2>Gym</h2>
                <img src={gym} alt="gym" />
              </div>
            </div>
          
        </section>
        
    </div>
  )
}

export default Home