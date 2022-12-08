import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";

import { useAppSelector } from "../store/hooks";
import { SolutionShape } from "./SolutionShape";

export interface SolutionShapesListProps {
  selectedSolutionId: string;
}

export function SolutionShapesList(props: SolutionShapesListProps) {
  const selectedSolution = useAppSelector(
    (store) => store.solutions.solutions[props.selectedSolutionId]
  );

  const Shapes = selectedSolution.shapes.map((shapeId) => (
    <SolutionShape key={shapeId} shapeId={shapeId} />
  ));

  return (
    <List
      subheader={
        <ListSubheader>
          Shapes
          <IconButton aria-label="add shape" id="add-shape-button">
            <AddIcon />
          </IconButton>
        </ListSubheader>
      }
    >
      {Shapes}
    </List>
  );
}
