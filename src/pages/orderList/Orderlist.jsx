import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Orderdatatable from "../../components/orderdatatable/Orderdatatable"

const Orderlist = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Orderdatatable/>
      </div>
    </div>
  )
}

export default Orderlist