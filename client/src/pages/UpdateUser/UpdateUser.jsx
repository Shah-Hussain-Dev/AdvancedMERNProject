import { useEffect, useState } from "react";
import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import { HiUserAdd } from "react-icons/hi";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import { PhotoCamera } from "@mui/icons-material";
import { FaUserEdit } from "react-icons/fa";
import SendIcon from "@mui/icons-material/Send";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../components/Spinner/Spinner";
const UpdateUser = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState("");
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    status: "Active",
    location: "",
  });
  let message;
  const [image, setImage] = useState("");
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fname, lname, email, mobile, gender, status, location } = user;
    if (fname === "") {
      setError(true);
      toast.error("First Name is required");
    } else if (lname === "") {
      setError(true);
      toast.error("Last Name is required");
    } else if (email === "") {
      setError(true);
      toast.error("Email Name is required");
    } else if (!email.includes("@")) {
      setError(true);
      toast.error("Email is invalid");
    } else if (mobile === "") {
      setError(true);
      toast.error("Mobile Number is required");
    } else if (mobile.length !== 10) {
      setError(true);
      toast.error("Mobile Number is invalid");
    } else if (gender === "") {
      setError(true);
      toast.error("Gender is required");
    } else if (status === "") {
      setError(true);
      toast.error("Status is required");
    } else if (location === "") {
      setError(true);
      toast.error("Location is required");
    } else if (image === "") {
      setError(true);
      toast.error("Image is required");
    } else {
      toast.success("User Added Successfully!");
      console.log("image:", preview);
    }

    console.log("User", user);
  };

  const setProfile = (event) => {
    setImage(event.target.files[0]);
  };
  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1200);
  }, [showSpinner]);

  if (showSpinner) {
    return <Spinner />;
  } else {
    return (
      <Container sx={{ my: 2 }}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Box>
              <Paper elevation={16}>
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{
                    color: "#424242",
                    textAlign: "center",
                    cursor: "pointer",
                    py: 3,
                  }}
                >
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ ml: 2 }}
                  >
                    <FaUserEdit />
                  </IconButton>
                  Update User
                </Typography>
                <Box>
                  <Grid container justifyContent={"center"}>
                    <Grid item md={5} xs={11} mb={2} ml={2} sx={{ mx: "auto" }}>
                      <TextField
                        fullWidth
                        onChange={handleChange}
                        value={user.fname}
                        id="outlined-error-helper-text"
                        label={"First Name"}
                        name="fname"
                        error={error && user.fname.length < 1 ? true : false}
                      />
                    </Grid>
                    <Grid item md={5} xs={11} mb={2} ml={2} sx={{ mx: "auto" }}>
                      <TextField
                        fullWidth
                        onChange={handleChange}
                        id="outlined-error-helper-text"
                        label={"Last Name"}
                        value={user.lname}
                        error={error && user.lname.length < 1 ? true : false}
                        name="lname"
                      />
                    </Grid>
                    <Grid item md={5} xs={11} mb={2} ml={2} sx={{ mx: "auto" }}>
                      <TextField
                        fullWidth
                        onChange={handleChange}
                        id="outlined-error-helper-text"
                        label={"Email"}
                        value={user.email}
                        error={error && user.email.length < 1 ? true : false}
                        name="email"
                      />
                    </Grid>
                    <Grid item md={5} xs={11} mb={2} ml={2} sx={{ mx: "auto" }}>
                      <TextField
                        fullWidth
                        onChange={handleChange}
                        id="outlined-error-helper-text"
                        label={"Mobile"}
                        value={user.mobile}
                        error={error && user.mobile.length < 10 ? true : false}
                        name="mobile"
                      />
                    </Grid>
                    <Grid item md={5} xs={11} mb={2} ml={2} sx={{ mx: "auto" }}>
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Gender
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            onChange={handleChange}
                            label="Female"
                            name="gender"
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                            name="gender"
                            onChange={handleChange}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item md={5} xs={11} mb={2} ml={2} sx={{ mx: "auto" }}>
                      <FormControl fullWidth onChange={handleChange}>
                        <InputLabel id="demo-simple-select-label">
                          Status
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={user.status}
                          label="order"
                          onChange={handleChange}
                          name="status"
                        >
                          <MenuItem value={"Active"}>Active</MenuItem>
                          <MenuItem value={"InActive"}>InActive</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item md={5} xs={11} mb={2} ml={2} sx={{ mx: "auto" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          component="label"
                          startIcon={<PhotoCamera />}
                        >
                          Upload Profile
                          <input
                            hidden
                            accept="image/*"
                            multiple
                            type="file"
                            name="photo"
                            onChange={setProfile}
                          />
                        </Button>
                        <img
                          src={preview ? preview : "../images/avatar.png"}
                          alt="profile"
                          height="70"
                          width="70"
                          style={{ borderRadius: "100px" }}
                        />
                      </Box>
                    </Grid>
                    <Grid item md={5} xs={11} mb={2} ml={2} sx={{ mx: "auto" }}>
                      <TextField
                        fullWidth
                        onChange={handleChange}
                        id="outlined-error-helper-text"
                        label={"Location"}
                        value={user.location}
                        error={error && user.location.length < 1 ? true : false}
                        name="location"
                      />
                    </Grid>
                    <Grid
                      item
                      md={11}
                      xs={11}
                      mb={2}
                      ml={2}
                      sx={{ mx: "auto" }}
                    >
                      <Button
                        variant="contained"
                        fullWidth
                        endIcon={<SendIcon />}
                        onClick={handleSubmit}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <ToastContainer position="bottom-right" />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
};

export default UpdateUser;
