import { arrivals } from "@/utils/_variable.js";
import ReactStars from 'react-rating-stars-component' 

const NewArrival = () => {
  return (
    <div>
          <center>New Arrival</center>
          <div>
           {  arrivals.map(({img,price,count,title,discount,percentage},index)=>
             <div key={index}>
                <div> <img src={img} alt={title}  /></div>
                <article>
                    <h2>{title}</h2>
                    <ReactStars
                      count={5}
                      size={24}
                      activeColor="#ffd700"
                       isHalf={true}
                       value={count}
                    />
                    <div>
                        <h3>${price}</h3>
                       { discount && <h3>${discount}</h3>}
                       { percentage && <p>{percentage}%</p>}
                    </div>
                </article>
             </div>
           )
           }
          </div>
     </div>
  )
}

export default NewArrival