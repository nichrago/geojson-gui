import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";

export function TopBar() {
  return (
    <Toolbar className="nav">
      <AddLocationAltIcon />
      <Typography>{"<GeoJSON-gui>"}</Typography>
    </Toolbar>
  );
}
