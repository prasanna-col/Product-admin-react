import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      timedate: "24 Feb 21 - 15:23",
      updateby: "Nick",
      comments: "Delivered	Your order is delivered	",
      customernotify: "yes",
      status: "delivered",
      status_id: "4"
    },

    {
      timedate: "24 Feb 21 - 15:23",
      updateby: "Nick",
      comments: "Picked Up / Delivery on the Way	Your order is picked and delivery boy on the way	",
      customernotify: "yes",
      status: "ontheway",
      status_id: "3"
    },

    {
      timedate: "24 Feb 21 - 15:23",
      updateby: "admin",
      comments: " Delivery Assign	Your order is delivered	",
      customernotify: "yes",
      status: "confirmed",
      status_id: "2"
    },

    {
      timedate: "24 Feb 21 - 15:22",
      updateby: "admin",
      comments: "	Confirmed	Your order is confirmed	",
      customernotify: "yes",
      status: "pending",
      status_id: "1"
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Time - Date</TableCell>
            <TableCell className="tableCell">Updated By</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Customer Order Comment</TableCell>
            <TableCell className="tableCell">Customer Notified</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.timedate}</TableCell>
              <TableCell className="tableCell">{row.updateby}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.comments}</TableCell>
              <TableCell className="tableCell">{row.customernotify}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
