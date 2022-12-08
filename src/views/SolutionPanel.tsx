import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";

import { useAppSelector } from "../store/hooks";
import { SolutionPanelItem } from "./SolutionPanelItem";
import { SolutionShapesList } from "./SolutionShapesList";

export function SolutionPanel() {
  const { solutionsOrder, selectedSolutionId } = useAppSelector(
    (store) => store.solutions
  );

  const Solutions = solutionsOrder.map((solutionId) => (
    <SolutionPanelItem
      key={solutionId}
      solutionId={solutionId}
      isSelected={selectedSolutionId === solutionId}
    />
  ));

  return (
    <div>
      <List
        subheader={
          <ListSubheader>
            Solutions
            <IconButton aria-label="add solution" id="add-solution-button">
              <AddIcon />
            </IconButton>
          </ListSubheader>
        }
      >
        {Solutions}
      </List>
      <SolutionShapesList selectedSolutionId={selectedSolutionId} />
    </div>
  );
}
