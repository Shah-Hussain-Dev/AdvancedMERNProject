import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const Spinner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        flexDirection: "column",
      }}
    >
      <CircularProgress />
      <Typography color="#1e2d39" mx={2} mb={2}>
        Loading....
      </Typography>
    </Box>
  );
};
export default Spinner;
