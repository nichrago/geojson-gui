import Card from "@mui/material/Card";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import Typography from "@mui/material/Typography";
import { useMemo } from "react";

import { useAppSelector } from "../store/hooks";
import { formatSquareMeters } from "../services/formatter";
import { getTotalAreaFromShapes } from "../services/shape-calculations";

export function InfoPanel() {
  const shapes = useAppSelector((store) => store.shapes.shapes);
  const selectedShapes = useAppSelector(
    (store) => store.workspace.selectedShapes
  );

  const selectedShapeTotalArea = useMemo(() => {
    const targetShapes = Object.entries(selectedShapes)
      .filter(([_, isSelected]) => isSelected)
      .map(([shapeId, _]) => shapes[shapeId]);

    if (targetShapes.length === 0) return 0;

    const targetShapeArea = getTotalAreaFromShapes(targetShapes);

    return targetShapeArea;
  }, [selectedShapes]);

  return (
    <div>
      <Card variant="outlined">
        <div>
          <SquareFootIcon />
          <Typography component="span">Area:</Typography>
        </div>
        <Typography variant="body2">
          {formatSquareMeters(selectedShapeTotalArea)}
        </Typography>
      </Card>
    </div>
  );
}
