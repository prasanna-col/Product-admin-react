import { useLocation } from 'react-router-dom'
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const SingleOrder = () => {

  const location = useLocation()
  const { orderID } = location.state

  console.log("orderID-->", orderID)
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">

          <div className="bottom">
            <h1 className="title">Order ID: #{orderID}</h1>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
