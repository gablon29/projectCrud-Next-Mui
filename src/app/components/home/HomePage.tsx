"use client";
import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { columns } from "../../../utils/tableOfTasks";
import { Paper } from "@mui/material";

const rows = [
  {
    id: 1,
    task: "Task 1",
    description: "Description 1",
    status: "Status 1",
    date: "Date 1",
    time: "Time 1",
  },
  {
    id: 2,
    task: "Task 2",
    description: "Description 2",
    status: "Status 2",
    date: "Date 2",
    time: "Time 2",
  },
  {
    id: 3,
    task: "Task 3",
    description: "Description 3",
    status: "Status 3",
    date: "Date 3",
    time: "Time 3",
  },
  {
    id: 4,
    task: "Task 4",
    description: "Description 4",
    status: "Status 4",
    date: "Date 4",
    time: "Time 4",
  },
  {
    id: 5,
    task: "Task 5",
    description: "Description 5",
    status: "Status 5",
    date: "Date 5",
    time: "Time 5",
  },
];

const HomePage = () => {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </Paper>
  );
};

export default HomePage;
