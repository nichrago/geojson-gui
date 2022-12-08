import { useAppSelector, useAppDispatch } from "../store/hooks";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { toggleShapeSelection } from "../store/workspace";

export interface SolutionShapeProps {
  shapeId: string;
}

export function SolutionShape(props: SolutionShapeProps) {
  const shape = useAppSelector((store) => store.shapes.shapes[props.shapeId]);
  const isShapeSelected = useAppSelector(
    (store) => store.workspace.selectedShapes[props.shapeId]
  );
  const dispatch = useAppDispatch();

  const _onSelectionToggle = () => {
    dispatch(toggleShapeSelection({ shapeId: props.shapeId }));
  };

  return (
    <ListItem disablePadding>
      <ListItemButton disableTouchRipple onClick={_onSelectionToggle}>
        <FormControlLabel
          control={
            <Checkbox
              disableTouchRipple
              disableFocusRipple
              checked={!!isShapeSelected}
              onClick={_onSelectionToggle}
            />
          }
          label={shape.name}
        />
      </ListItemButton>
    </ListItem>
  );
}
