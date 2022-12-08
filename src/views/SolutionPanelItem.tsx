import { useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import EditIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setSelectedSolution } from "../store/solutions";
import { clearWorkspace } from "../store/workspace";

export interface SolutionPanelItemProps {
  solutionId: string;
  isSelected: boolean;
}

export function SolutionPanelItem(props: SolutionPanelItemProps) {
  const solution = useAppSelector(
    (store) => store.solutions.solutions[props.solutionId]
  );
  const dispatch = useAppDispatch();

  const _setSelected = () => {
    if (!props.isSelected) {
      dispatch(setSelectedSolution({ solutionId: props.solutionId }));
      dispatch(clearWorkspace());
    }
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const panelId = `panel-${props.solutionId}`;

  return (
    <ListItem disablePadding selected={props.isSelected}>
      <ListItemButton disableTouchRipple onClick={_setSelected}>
        <ListItemText primary={solution.name} />
        <IconButton
          aria-label={`solution ${props.solutionId} options`}
          id={`${panelId}-options-button`}
          aria-controls={open ? "options-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="options-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": `${panelId}-options-button`,
          }}
        >
          <MenuItem onClick={handleClose}>
            <EditIcon />
            Rename
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <DeleteIcon />
            Delete
          </MenuItem>
        </Menu>
      </ListItemButton>
    </ListItem>
  );
}
