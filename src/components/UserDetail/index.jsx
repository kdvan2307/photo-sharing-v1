import React from "react";
import { Paper, Typography, Button, Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams(); // Sử dụng useParams hook
  const user = models.userModel(userId);

  if (!user) {
    return <Typography>User not found</Typography>;
  }

  return (
    <Paper style={{ margin: "16px", padding: "24px" }}>
      <Typography variant="h4" gutterBottom>
        {user.first_name} {user.last_name}
      </Typography>

      <Box mb={2}>
        <Typography variant="body1">
          <strong>Location:</strong> {user.location}
        </Typography>
      </Box>

      <Box mb={2}>
        <Typography variant="body1">
          <strong>Occupation:</strong> {user.occupation}
        </Typography>
      </Box>

      <Box mb={3}>
        <Typography variant="body1">
          <strong>Description:</strong> {user.description}
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/photos/${user._id}`}
      >
        View Photos
      </Button>
    </Paper>
  );
}

export default UserDetail;
