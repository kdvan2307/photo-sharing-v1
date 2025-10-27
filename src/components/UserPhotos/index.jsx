import React from "react";
import {
  Paper,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";

function UserPhotos() {
  const { userId } = useParams(); // Sử dụng useParams hook
  const photos = models.photoOfUserModel(userId);
  const user = models.userModel(userId);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (!user) {
    return <Typography>User not found</Typography>;
  }

  return (
    <Paper style={{ margin: "16px", padding: "24px" }}>
      <Typography variant="h4" gutterBottom>
        Photos of {user.first_name} {user.last_name}
      </Typography>

      {photos.map((photo) => (
        <Card key={photo._id} style={{ marginBottom: "24px" }}>
          <CardMedia
            component="img"
            height="300"
            image={`/images/${photo.file_name}`}
            alt={`Photo by ${user.first_name}`}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Posted: {formatDate(photo.date_time)}
            </Typography>

            <Divider style={{ margin: "16px 0" }} />

            <Typography variant="h6" gutterBottom>
              Comments:
            </Typography>

            {photo.comments &&
              photo.comments.map((comment) => (
                <Box
                  key={comment._id}
                  mb={2}
                  p={2}
                  style={{ backgroundColor: "#f5f5f5" }}
                >
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    {formatDate(comment.date_time)}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    <strong>
                      <Link
                        to={`/users/${comment.user._id}`}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        {comment.user.first_name} {comment.user.last_name}
                      </Link>
                      :
                    </strong>{" "}
                    {comment.comment}
                  </Typography>
                </Box>
              ))}

            {(!photo.comments || photo.comments.length === 0) && (
              <Typography variant="body2" color="textSecondary">
                No comments yet.
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}

      {photos.length === 0 && (
        <Typography variant="body1">No photos found for this user.</Typography>
      )}
    </Paper>
  );
}

export default UserPhotos;
