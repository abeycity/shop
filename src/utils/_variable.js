import { arrival2Img, arrival3Img, arrival4Img, arrivalOneImg, topselling1Img, topselling2Img, topselling3Img, topselling4Img } from "../assets";

export const
 arrival = {
  newarrival1: {
    img: arrivalOneImg,
    title: "Sleeve Striped T-shirt",
    count: 4,
    price: 130,
    discount: 160,
    percentage: -30,
  },
  newArrival2: {
    img: arrival2Img,
    title: "Checkered Shirt",
    count: 3.5,
    price: 180,
  },
  newArrival3: {
    img: arrival3Img,
    title: "Skinny Fit jeans",
    count: 4.5,
    price: 240,
    discount: 260,
    percentage: -30,
  },
  newArrival4: {
    img: arrival4Img,
    title: "T-shirt with tape details",
    count: 4,
    price: 120,
  },
},
topselling={
    topselling1:{
        img:topselling1Img,
        title:"faded skinny jeans",
        count:4.5,
        price:210
    },
    topselling2:{
        img:topselling2Img,
        title:"Loose fit Bermuda shorts",
        count:3,
        price:80
    },
    topselling3:{
        img:topselling3Img,
        title:"Courage Graphic T-shirt",
        count:4,
        price:145
    },
    topselling4:{
        img:topselling4Img,
        title:"Vertical Striped Shirt",
        count:4.5,
        price:212,
        discount:232,
        percentage:20
    }

},
testimony={
  testimony1:{
    name:"Sarah M",
    desc:`"I'm blown away by the quality and style
         of the clothes I received from Shop.co.
          From casual wear to elegant dresses, 
          every piece I've bought has exceeded my expectations.”`,
    stars:4.5      
  },
  testimony2:{
    name:"Alex K.",
    desc:`"Finding clothes that align with my personal style 
         used to be a challenge until I discovered Shop.co. 
         The range of options they offer is truly remarkable,
          catering to a variety of tastes and occasions.”`,
    stars:5
  },
  testimony3:{
    name:'James L',
    desc:`"I'm blown away by the quality and style of the clothes
        I received from Shop.co. From casual wear to elegant dresses,
         every piece I've bought has exceeded my expectations.”`,
    stars:4
  },
  testimony4:{
    name:'James L',
    desc:`"I'm blown away by the quality and style of the clothes
        I received from Shop.co. From casual wear to elegant dresses,
         every piece I've bought has exceeded my expectations.”`,
    stars:4
  }

},
arrivals = Object.keys(arrival).map((key) => arrival[key]),
topsell=Object.keys(topselling).map((key)=>topselling[key]),
testimonials=Object.keys(testimony).map((key)=>testimony[key])
