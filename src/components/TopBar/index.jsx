import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();

  const getContextText = () => {
    // Lấy userId từ URL
    const pathSegments = location.pathname.split("/");
    const userId = pathSegments[2];

    if (location.pathname.startsWith("/users/") && userId) {
      const user = models.userModel(userId);
      return user ? `${user.first_name} ${user.last_name}` : "User Details";
    } else if (location.pathname.startsWith("/photos/") && userId) {
      const user = models.userModel(userId);
      return user ? `Photos of ${user.first_name} ${user.last_name}` : "Photos";
    } else if (location.pathname === "/users") {
      return "User List";
    }
    return "Photo Sharing App";
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Kiều Đình Văn{/* THAY BẰNG TÊN THẬT CỦA BẠN */}
        </Typography>
        <Typography variant="h6">{getContextText()}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
