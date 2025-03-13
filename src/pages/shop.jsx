import Shopitems from "../components/shopitems"
import Filter from "../layout/filter"

const Shop = () => {
  return (
    <div className="flex gap-4 justify-center px-16">
      <div>
       <Filter/>
      </div>
      <div>
        <Shopitems/>
      </div>
    </div>
  )
}

export default Shop