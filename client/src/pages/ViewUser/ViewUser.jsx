import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { FaUserAstronaut } from "react-icons/fa";
import { GrStatusGoodSmall } from "react-icons/gr";

import { ImLocation } from "react-icons/im";
import { MdMarkEmailRead, MdMobileFriendly } from "react-icons/md";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useEffect } from "react";
function ViewUser() {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1200);
  }, [showSpinner]);

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
              image="../images/profile.jpg"
              alt="green iguana"
              sx={{ objectFit: "cover" }}
            />

            <CardContent
              sx={{
                position: "relative",
                backgroundImage:
                  "linear-gradient( 84deg, rgba(32,201,255,1) 36.7%, rgba(0,8,187,1) 84.4%, rgba(255,255,255,1) 119.7% )",
              }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                color="white"
                align="center"
                GrStatusGoodSmall
                fontWeight="bold"
              >
                <FaUserAstronaut />
                Shah Husain
              </Typography>
              <Typography variant="h6" color="text.secondary" align="center">
                <MdMarkEmailRead /> Shah@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                <MdMobileFriendly />
                7088997788
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Male
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                <GrStatusGoodSmall color="lime" />
                Active
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                <ImLocation />
                Lucknow
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                Active
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    );
  }
}

export default ViewUser;
