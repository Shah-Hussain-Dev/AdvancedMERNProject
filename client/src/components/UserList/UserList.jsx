import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { getAllUsers } from "../../services/Apis";
import { BASE_URL } from "../../services/helper";
import { Avatar } from "@mui/material";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const options = ["None", "Atria", "Callisto"];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function UserList() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked, setChecked] = useState(false);
  const [users, setUsers] = useState({});
  const handleChange = (event, id) => {
    setChecked(event.target.checked);
    let userId;
    for (let user of users.data) {
      if (user._id === id) {
        userId = user._id;
        console.log("User Id", userId);
      }

      let userStatusValue = {
        isActive: checked,
      };
    }
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let userName;
  const getAllUserData = async () => {
    const response = await getAllUsers();
    if (response.status === 200) {
      setUsers(response.data);
      console.log("User Data", response.data.data[0]);
    } else {
      console.log("No users found!");
    }
  };
  useEffect(() => {
    getAllUserData();
  }, []);

  if (users?.data?.length < 0) {
    return <h1 align="center">No User Found!</h1>;
  } else {
    return (
      <TableContainer component={Paper} sx={{ boxShadow: 4 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Email </StyledTableCell>
              <StyledTableCell align="center">Gender </StyledTableCell>
              <StyledTableCell align="center">Status </StyledTableCell>
              <StyledTableCell align="center">Profile </StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.data?.map((user, index) => (
                <StyledTableRow key={user._id}>
                  <StyledTableCell align="left">{index + 1}</StyledTableCell>
                  <StyledTableCell scope="user" align="center">
                    {(userName = user.fname + " " + user.lname)}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.gender === "male" ? "M" : "F"}
                  </StyledTableCell>
                  {/* <StyledTableCell align="center"></StyledTableCell> */}
                  <StyledTableCell align="center">
                    {user.status}
                    <Switch
                      defaultChecked={user.status === "Active" ? true : false}
                      onChange={(e) => handleChange(e, user._id)}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.user_profile ? (
                      <Avatar
                        align="center"
                        sx={{ mx: "auto", bgcolor: "royalblue", boxShadow: 4 }}
                        src={
                          user.user_profile
                            ? `${BASE_URL}/uploads/${user.user_profile}`
                            : "../images/avatar.png"
                        }
                      />
                    ) : (
                      <Avatar
                        align="center"
                        sx={{ mx: "auto", bgcolor: "royalblue", boxShadow: 4 }}
                      >
                        {userName.split(" ")[0][0]}
                        {userName.split(" ")[1][0]}
                      </Avatar>
                    )}

                    {/* <Avatar
                      align="center"
                      sx={{ mx: "auto", bgcolor: "royalblue", boxShadow: 4 }}
                    /> */}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <IconButton
                        aria-label="delete"
                        component={Link}
                        to={`/view-user/${user._id}`}
                      >
                        <VisibilityIcon
                          size={24}
                          ml={3}
                          sx={{ color: "#FFB100" }}
                        />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        component={Link}
                        to={`/update-user/${user._id}`}
                      >
                        <EditIcon size={24} ml={3} sx={{ color: "#03C988" }} />
                      </IconButton>
                      <IconButton aria-label="view">
                        <DeleteIcon
                          size={24}
                          ml={3}
                          sx={{ color: "#DC0000" }}
                        />
                      </IconButton>
                     
                    </IconButton>
                  
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
