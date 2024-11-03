"use client";
import * as React from "react";
import { BottomNavigation, Box, BottomNavigationAction } from "@mui/material";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import TaskIcon from "@mui/icons-material/Task";
import AddTaskIcon from "@mui/icons-material/AddTask";

const Header: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        sx={{ backgroundColor: "transparent" }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<AddHomeWorkIcon />}
          sx={{ color: "GrayText" }}
        />
        <BottomNavigationAction
          label="New Tasck"
          icon={<AddTaskIcon />}
          sx={{ color: "GrayText" }}
        />
        <BottomNavigationAction
          label="All tasks"
          icon={<TaskIcon />}
          sx={{ color: "GrayText" }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Header;
