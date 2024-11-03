"use client";
import * as React from "react";
import { BottomNavigation, Box, BottomNavigationAction } from "@mui/material";

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
        <BottomNavigationAction label="Recents" sx={{ color: "GrayText" }} />
        <BottomNavigationAction label="Favorites" sx={{ color: "GrayText" }} />
        <BottomNavigationAction
          label="crear tarea"
          sx={{ color: "GrayText" }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Header;
