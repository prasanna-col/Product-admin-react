import "./Orderdatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../FakeData/datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Orderdatatable = () => {
  const [data, setData] = useState(userRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.orderid !== id));
  // };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/orders/orderID" state={{ orderID: params.row.orderid }} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Orders
        {/* <Link to="/orders/neworder" className="link">
          Add New
        </Link> */}
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Orderdatatable;
