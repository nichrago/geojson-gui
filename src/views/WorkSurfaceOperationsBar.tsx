import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import JoinInnerIcon from "@mui/icons-material/JoinInner";

import { useAppSelector } from "../store/hooks";
import { useShapeOperations } from "../hooks/useShapeOperations";
import { ShapeOperation } from "../types";

export function WorkSurfaceOperationsBar() {
  const selectedShapes = useAppSelector(
    (store) => store.workspace.selectedShapes
  );
  const { performOperationOnSelectedShapes } = useShapeOperations();

  const isMultipleSelectedShapes =
    Object.values(selectedShapes).reduce(
      (count, isSelected) => (isSelected ? count + 1 : count),
      0
    ) > 1;

  const _onPerformUnionOperation = () => {
    performOperationOnSelectedShapes(ShapeOperation.Union);
  };

  const _onPerformIntersectionOperation = () => {
    performOperationOnSelectedShapes(ShapeOperation.Intersection);
  };

  return (
    <ButtonGroup orientation="vertical">
      <Button
        disabled={!isMultipleSelectedShapes}
        onClick={_onPerformUnionOperation}
        variant="outlined"
        aria-label="union"
      >
        <JoinFullIcon />
      </Button>
      <Button
        disabled={!isMultipleSelectedShapes}
        onClick={_onPerformIntersectionOperation}
        variant="outlined"
        aria-label="intersect"
      >
        <JoinInnerIcon />
      </Button>
    </ButtonGroup>
  );
}
