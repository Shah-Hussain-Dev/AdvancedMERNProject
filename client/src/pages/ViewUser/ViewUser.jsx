import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  CardActionArea,
  Container,
} from "@mui/material";
import { FaUser } from "react-icons/fa";
import { MdCircle } from "react-icons/md";

import { MdMarkEmailRead, MdMobileFriendly } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { HiUserCircle } from "react-icons/hi";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../services/helper";
import { getSingleUser } from "../../services/Apis";
function ViewUser() {
  const [showSpinner, setShowSpinner] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  const getSingleUserData = async () => {
    const response = await getSingleUser(id);
    setUser(response.data);
  };
  useEffect(() => {
    getSingleUserData();
    setTimeout(() => {
      setShowSpinner(false);
    }, 1200);
  }, [id]);

  if (showSpinner) {
    return <Spinner />;
  } else {
    return (
      <Container>
        <Card
          sx={{ maxWidth: 345, mx: "auto", my: "60px", boxShadow: 6 }}
          className="profile-card"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={
                user.data.user_profile
                  ? `${BASE_URL}/uploads/${user.data.user_profile}`
                  : "../images/avatar.png"
              }
              alt="green iguana"
              sx={{ objectFit: "cover" }}
            />

            <CardContent
              sx={{
                position: "relative",
                backgroundColor: "rgba(32, 201, 255, 1)",
                // backgroundImage:
                //   "linear-gradient( 84deg, rgba(32,201,255,1) 36.7%, rgba(0,8,187,1) 84.4%, rgba(255,255,255,1) 119.7% )",
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                color="white"
                fontWeight="bold"
              >
                {/* {user.data.fname + user.data.lname} */}
              </Typography>
              <Typography variant="h6" color="text.dark">
                <MdMarkEmailRead size={20} /> Email : &nbsp; {user.data.email}
              </Typography>

              <Typography variant="h6" color="text.dark">
                <HiUserCircle size={20} /> Name : &nbsp;
                <span variant="h6" color="text.secondary">
                  {user.data.fname + " " + user.data.lname}
                </span>
              </Typography>
              <Typography variant="h6" color="text.dark">
                <MdMobileFriendly size={20} /> Mobile : &nbsp;
                <span variant="h6" color="text.secondary">
                  {user.data.mobile}
                </span>
              </Typography>
              <Typography variant="h6" color="text.dark">
                <FaUser size={20} spacing={4} /> Gender : &nbsp;
                <span variant="h6" color="text.secondary">
                  {user.data.gender.charAt(0).toUpperCase() +
                    user.data.gender.slice(1)}
                </span>
              </Typography>
              <Typography variant="h6" color="text.dark">
                <MdCircle
                  size={20}
                  color={`${user.data.status === "Active" ? "lime" : "red"}`}
                />
                &nbsp; Status : &nbsp;
                <span
                  variant="h6"
                  color={`${
                    user.data.status === "Active"
                      ? "text.secondary"
                      : "text.danger"
                  }`}
                >
                  {user.data.status}
                </span>
              </Typography>
              <Typography variant="h6" color="text.dark">
                <ImLocation size={20} /> Location : &nbsp;
                <span variant="h6" color="text.secondary">
                  {user.data.location}
                </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    );
  }
}

export default ViewUser;
