import { useLocation } from 'react-router-dom'
import "./singleOrder.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "./status_history/Table";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';

const SingleOrder = () => {

  const location = useLocation()
  const { orderID } = location.state

var selectedValue = "a"
  // const [selectedValue, setSelectedValue] = useState(true)

  console.log("orderID-->", orderID)
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="heading">
          <h1 className="headTitle">Order ID: #{orderID}</h1>
        </div>

        <div className="top">
          <div className="left">
            <h1 className="title">Status</h1>
            <div className="item">
              <div className="details">
                <div className="statusdetailItem">
                  <span className="itemKey">Order Status</span>
                  <span className="pending">Pending</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Customer Order Comment</span>
                </div>
                <div className="statusdetailItem">
                  <TextField
                    id="standard-helperText"
                    defaultValue="Default Value"
                    variant="standard"
                  />
                </div>

                <div className="statusdetailItem">
                  <span className="itemKey">Notify Customer</span>
                  <Radio
                    checked={selectedValue === 'a'}
                    // onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                  <span className="itemValue">Yes</span>
                  <Radio
                    checked={selectedValue === 'b'}
                    // onChange={handleChange}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                  />
                  <span className="itemValue">No</span>
                </div>
              </div>
            </div>
          </div>

          <div className="left">
            <h1 className="title">Delivery partner</h1>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Name:</span>
                  <span className="itemValue">Jane Doe</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
              </div>
            </div>
          </div>



        </div>
        <div className="top">
          <div className="left">
            <h1 className="title">Order Details</h1>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Order ID: #</span>
                  <span className="itemValue">{orderID}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Order Type</span>
                  <span className="itemValue">Delivery</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Order Status</span>
                  {/* <span className="itemValue">Pending</span> */}
                  <span className="pending">Pending</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Payment Method</span>
                  <span className="itemValue">Cash on Hand</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Order Total</span>
                  <span className="itemValue">$ 431.90</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date Added</span>
                  <span className="itemValue">24 Dec 21 - 13:18</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date Modified</span>
                  <span className="itemValue">24 Dec 21</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Customer Notified</span>
                  <span className="itemValue">Email SENT</span>
                </div>
              </div>
            </div>

          </div>

          <div className="left">
            <h1 className="title">Customer Order Comment</h1>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemValue">No order comment</span>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="top">
          <div className="left">
            <h1 className="title">Restaurant Details</h1>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Restaurant Name </span>
                  <span className="itemValue">ABC Restaurant</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Restaurant Phone Number:</span>
                  <span className="itemValue">+91-9827358237</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Restaurant Email:</span>
                  <span className="itemValue">abc@yopmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Restaurant Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="left">
            <h1 className="title">Customer Details</h1>
            <div className="item">
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Name:</span>
                  <span className="itemValue">Jane Doe</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>



        </div>


        <div className="bottom">
          <h1 className="title">Status History</h1>
          <List />
        </div>

      </div>
    </div>
  );
};

export default SingleOrder;
