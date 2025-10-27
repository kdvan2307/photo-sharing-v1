import React from "react";
import { List, ListItem, ListItemText, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel();

  return (
    <Paper style={{ margin: "16px", padding: "16px" }}>
      <List>
        {users.map((user) => (
          <ListItem
            key={user._id}
            button
            component={Link}
            to={`/users/${user._id}`}
          >
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default UserList;
