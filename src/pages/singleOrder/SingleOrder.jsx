
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./singleOrder.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "./status_history/Table";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Radio from '@mui/material/Radio';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SingleOrder = () => {

  const location = useLocation()
  const { orderID } = location.state

  // var selectedValue = "a"
  const [selectedValue, setSelectedValue] = useState("a")
  const [customer_Comment, setCustomer_Comment] = useState("")
  const [assignedDriver, setassignedDriver] = useState('');

  const [currentProductStatus, setcurrentProductStatus] = useState('');

  const handleChange = (event) => {
    setassignedDriver(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setcurrentProductStatus(event.target.value);

    console.log("currentProductStatus", currentProductStatus)
  };



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
                  <FormControl sx={{ minWidth: 200, }}>
                    <InputLabel id="demo-simple-select-helper-label">Current Order Status</InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      value={currentProductStatus}
                      label="Current Order Status"
                      onChange={handleChangeStatus}
                    >

                      <MenuItem value={"pending"}> pending </MenuItem>
                      <MenuItem value={"confirmed"}> Confirmed </MenuItem>
                      <MenuItem value={"deliveryassign"}> Delivery Assign </MenuItem>
                      <MenuItem value={"ontheway"}> On the way </MenuItem>
                      <MenuItem value={"completed"}> Completed </MenuItem>
                    </Select>
                  </FormControl>

                </div>
                <div className="detailItem">
                  <span className="itemKey">Customer Order Comment</span>
                </div>
                <div className="statusdetailItem">
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={2}
                    placeholder="Comments"
                    style={{ width: 500 }}
                    value={customer_Comment}
                    onChange={(e) => { setCustomer_Comment(e.target.value) }}
                  />

                </div>

                <div className="statusdetailItem">
                  <span className="itemKey">Notify Customer</span>
                  <Radio
                    checked={selectedValue === 'a'}
                    onChange={() => setSelectedValue("a")}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                  <span className="itemValue">Yes</span>
                  <Radio
                    checked={selectedValue === 'b'}
                    onChange={() => setSelectedValue("b")}
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

                <FormControl sx={{ minWidth: 200, marginBottom: 2 }}
                  disabled={currentProductStatus === "deliveryassign" ? false : true}
                >
                  <InputLabel id="demo-simple-select-helper-label">Online drivers</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={assignedDriver}
                    label="Online driver"
                    onChange={handleChange}
                  >

                    <MenuItem value={10}>lara (lara@yopmail.com)</MenuItem>
                    <MenuItem value={20}>Angie (angie@yopmail.com)</MenuItem>
                    <MenuItem value={30}>Big Jim (bigjim@yopmail.com) </MenuItem>
                  </Select>
                </FormControl>

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
