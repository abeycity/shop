import Footer from "../components/footer/footer"
import Navbar from "../components/navbar/navbar"
import AppRoute from "./route"

const Routelayout = () => {
  return (
    <div className=" bg-[F2F0F1] flex justify-center items-center  w-full overflow-hidden">
        <div className=" max-w-screen-2xl flex-col items-center ">
          <Navbar/>
          <AppRoute/>
          <Footer/>
        </div>

      </div>
  )
}

export default Routelayout