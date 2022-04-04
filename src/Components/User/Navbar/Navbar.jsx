import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
const img =
  "https://img.freepik.com/free-photo/handsome-smiling-young-african-man_171337-9650.jpg?size=626&ext=jpg&ga=GA1.2.1353590532.1641168000";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menu = ["settings", "logout"];
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Tooltip title="User">
            <IconButton onClick={handleClick}>
              <Avatar alt="avatar" src={img} />
            </IconButton>
          </Tooltip>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {menu.map((el) => (
              <MenuItem key={el} onClick={handleClose}>
                {el}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
