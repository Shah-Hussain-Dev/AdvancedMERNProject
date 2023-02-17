import { Button, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TbFileExport } from "react-icons/tb";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "./Features.scss";
import { useState } from "react";
const Features = () => {
  const [order, setOrder] = useState("");
  const [filterValues, setFilterValues] = useState({
    filterByOrder: "",
    filterByGender: "",
    filterByStatus: "",
  });

  const handleChange = (event) => {
    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.value,
    });
  };
  console.log(filterValues);
  return (
    <Container
      className="featues-section"
      sx={{
        my: 2,
        background: "#1e2d39",
        py: 3,
        boxShadow: 4,
        borderRadius: 1,
        backgroundImage:
          "linear-gradient( 181deg,  rgba(2,0,97,1) 15%, rgba(97,149,219,1) 158.5% ) ",
      }}
    >
      <Box sx={{ color: "white" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" align="center">
                Filter by Gender
              </Typography>
              <Box sx={{ mt: 2 }}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="All"
                      control={
                        <Radio
                          sx={{
                            color: "#1976d2",
                            "&.Mui-checked": {
                              color: "#1976d2",
                            },
                          }}
                        />
                      }
                      label="All"
                      name="filterByGender"
                    />
                    <FormControlLabel
                      value="female"
                      control={
                        <Radio
                          sx={{
                            color: "#1976d2",
                            "&.Mui-checked": {
                              color: "#1976d2",
                            },
                          }}
                        />
                      }
                      onChange={handleChange}
                      label="Female"
                      name="filterByGender"
                    />
                    <FormControlLabel
                      value="male"
                      control={
                        <Radio
                          sx={{
                            color: "#1976d2",
                            "&.Mui-checked": {
                              color: "#1976d2",
                            },
                          }}
                        />
                      }
                      onChange={handleChange}
                      label="Male"
                      name="filterByGender"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" align="center">
                Sort by Value
              </Typography>
              <Box sx={{ width: 200, mt: 2 }}>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "#fff", top: "-8px" }}
                  >
                    Sort by{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filterValues.filterByOrder}
                    label="order"
                    onChange={handleChange}
                    name="filterByOrder"
                    sx={{ color: "#fff" }}
                    size="small"
                  >
                    <MenuItem value={"New to Old"}>New to Old</MenuItem>
                    <MenuItem value={"Old to New"}>Old to New</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box>
              <Typography variant="h5" align="center">
                Filter by Status
              </Typography>
              <Box>
                <Box sx={{ mt: 2 }}>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="All"
                        control={
                          <Radio
                            sx={{
                              color: "#1976d2",
                              "&.Mui-checked": {
                                color: "#1976d2",
                              },
                            }}
                          />
                        }
                        label="All"
                        name="filterByStatus"
                      />
                      <FormControlLabel
                        value="Active"
                        onChange={handleChange}
                        control={
                          <Radio
                            sx={{
                              color: "#1976d2",
                              "&.Mui-checked": {
                                color: "#1976d2",
                              },
                            }}
                          />
                        }
                        label="Active"
                        name="filterByStatus"
                      />
                      <FormControlLabel
                        value="Inactive"
                        onChange={handleChange}
                        control={
                          <Radio
                            sx={{
                              color: "#1976d2",
                              "&.Mui-checked": {
                                color: "#1976d2",
                              },
                            }}
                          />
                        }
                        label="Inactive"
                        name="filterByStatus"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Features;
