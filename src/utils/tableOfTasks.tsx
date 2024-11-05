import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "task", headerName: "Task", width: 130 },
  { field: "description", headerName: "Description", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "time", headerName: "Time", width: 130 },
];
