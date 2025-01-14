import { Routes,Route } from "react-router-dom"
import App from "../App"
import Shop from "../pages/shop"
import Brands from "../pages/brands"
import Cart from "../pages/cart"
import Newarrival from "../pages/newarrival"


const AppRoute = () => {
  return (
    <Routes>
       <Route path="/" element={<App/>}/>
       <Route path="/shop" element={<Shop/>}/>
       <Route path="/brands" element={<Brands/>}/>
       <Route path="/cart"  element={<Cart/>}/>
       <Route path="/newarrival" element={<Newarrival/>} />
    </Routes>
  )
}

export default AppRoute