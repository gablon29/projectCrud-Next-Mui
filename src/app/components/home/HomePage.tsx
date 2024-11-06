import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { createData } from "../../../utils/tableOfTasks";

const rows = [
  createData("Frozen yoghurt", "23-12-2024", "Pendiente"),
  createData("Ice cream sandwich", "23-12-2024", "Pendiente"),
  createData("Eclair", "23-12-2024", "Echo"),
  createData("Cupcake", "23-12-2024", "Echo"),
  createData("Gingerbread", "23-12-2024", "Pendiente"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, justifyContent: "center" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">nombre</TableCell>
            <TableCell align="center">fecha</TableCell>
            <TableCell align="center">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
