/** FAKE DATA */


// userColumns -- Header field

export const userColumns = [
  { field: "orderid", headerName: "Order ID", width: 100 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "ordertype",
    headerName: "Order Type",
    width: 160,
  },

  {
    field: "payment",
    headerName: "Payment",
    width: 120,
  },
  {
    field: "orderamount",
    headerName: "Order Amount",
    width: 120,
  },
  
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    orderid: 1,
    username: "Hello world",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "pending",
    email: "1snow@gmail.com",
    payment: "COD",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 2,
    orderid: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "confirmed",
    payment: "Online",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 3,
    orderid: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    payment: "COD",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 4,
    orderid: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "pending",
    payment: "COD",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 5,
    orderid: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "confirmed",
    payment: "Online",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 6,
    orderid: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "ontheway",
    payment: "COD",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 7,
    orderid: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "confirmed",
    payment: "COD",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 8,
    orderid: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "ontheway",
    payment: "COD",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 9,
    orderid: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    payment: "COD",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 10,
    orderid: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "ontheway",
    payment: "COD",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 11,
    orderid: 11,
    username: "Roxie11",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "completed",
    payment: "COD",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },
  {
    id: 12,
    orderid: 12,
    username: "Roxie12",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "completed",
    payment: "COD",
    ordertype: "Delivery",
    orderamount: "$ 24.00"
  },

];
