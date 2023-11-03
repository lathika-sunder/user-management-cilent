import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import { Edit, ExitToApp, MenuOpen } from "@mui/icons-material";
import { Divider, ListItem } from "@mui/material";
import './UserNavbar.css'
export default function UserNavbar() {
  return (
    <Dropdown>
      <MenuButton>
        <MenuOpen />
      </MenuButton>

      <Menu style={{ display: "flex", flexDirection: "column" ,fontSize:15}}>
        <MenuItem>
        <div className="option">
          <span className="icon">
            <Edit/>
          </span>
          <span className="text" style={{ textAlign: "center" }}>
            Edit Profile
          </span>
          </div>
        </MenuItem>
          <Divider/>
         <MenuItem>
         <div className="option">
            <span className="icon">
              <ExitToApp />
            </span>
            <span className="text" style={{ textAlign: "center" }}>
              Log Out
            </span>
          </div>
          </MenuItem>
      </Menu>
    </Dropdown>
  );
}
