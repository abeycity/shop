import { arrival2Img, arrival3Img, arrival4Img, arrivalOneImg, topselling1Img, topselling2Img, topselling3Img, topselling4Img } from "../assets";

export const
casual="casual",
topselling="topselling",
newarrival="newarrival",
 Allproduct = {
  newarrival1: {
    img: arrivalOneImg,
    title: "Sleeve Striped T-shirt",
    count: 4,
    price: 130,
    discount: 160,
    percentage: 30,
    showIn:[casual,newarrival]
  },
  newArrival2: {
    img: arrival2Img,
    title: "Checkered Shirt",
    count: 3.5,
    price: 180,
    showIn:[casual,newarrival]
  },
  newArrival3: {
    img: arrival3Img,
    title: "Skinny Fit jeans",
    count: 4.5,
    price: 250,
    discount: 260,
    percentage: 30,
    showIn:[casual,newarrival]
  },
  newArrival4: {
    img: arrival4Img,
    title: "T-shirt with tape details",
    count: 4,
    price: 120,
    showIn:[casual,newarrival]
  },
  topselling1:{
    img:topselling1Img,
    title:"faded skinny jeans",
    count:4.5,
    price:210,
   showIn:[casual,topselling]
  },
  topselling2:{
      img:topselling2Img,
      title:"Loose fit Bermuda shorts",
      count:3,
      price:80,
      showIn:[casual,topselling]
  },
  topselling3:{
      img:topselling3Img,
      title:"Courage Graphic T-shirt",
      count:4,
      price:145,
      showIn:[casual,topselling]
  },
  topselling4:{
      img:topselling4Img,
      title:"Vertical Striped Shirt",
      count:4.5,
      price:212,
      discount:232,
      percentage:20,
    showIn:[casual,topselling]
  },
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
Reviews={
  review1:{
     count:4,
     name:"Samantha D.",
     desc:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
     posted:"August 13,2024"

  },
  review2:{
    count:4.5,
    name:"Alex M.",
    desc:"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    posted:"August 14,2024"

  },
  review3:{
   count:3.5,
   name:"Ethan R.",
   desc:"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
   posted:"August 13,2024"

  },
  review4:{
    count:4.5,
    name:"Olivier P.",
    desc:"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    posted:"August 15,2024"

  },
  review5:{
    count:4,
    name:"Liam K.",
    desc:"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
    posted:"August 14,2024"

  },
  review6:{
    count:5,
    name:"Ava H.",
    desc:"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    posted:"August 19,2024"

 }
},
allproduct=Object.keys(Allproduct).map((key)=>Allproduct[key]),
arrivals=allproduct.filter((product)=>product.showIn.includes(newarrival)),
topsell=allproduct.filter((product)=>product.showIn.includes(topselling)),
testimonials=Object.keys(testimony).map((key)=>testimony[key]),
casualdress=allproduct.filter((product)=>product.showIn.includes(casual)),
review=Object.keys(Reviews).map((key)=>Reviews[key])