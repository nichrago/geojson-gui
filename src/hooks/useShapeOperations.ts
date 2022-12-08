import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  getTotalIntersectionFeatureOfShapes,
  getTotalUnionFeatureOfShapes,
} from "../services/shape-calculations";
import {
  addShapeToSolution,
  removeShapesFromSolution,
} from "../store/solutions";
import { setSelectedShapes } from "../store/workspace";
import { addShape } from "../store/shapes";
import { Shape, ShapeOperation } from "../types";

export function useShapeOperations() {
  const shapes = useAppSelector((store) => store.shapes.shapes);
  const selectedSolution = useAppSelector(
    (store) => store.solutions.solutions[store.solutions.selectedSolutionId]
  );
  const selectedShapes = useAppSelector(
    (store) => store.workspace.selectedShapes
  );
  const dispatch = useAppDispatch();

  const shapeOperations: {
    [key in ShapeOperation]: (shapes: Shape[]) => Shape;
  } = {
    [ShapeOperation.Union]: (shapes: Shape[]): Shape => {
      const unionFeature = getTotalUnionFeatureOfShapes(shapes);

      const newShape: Shape = {
        id: `${new Date().toISOString}-${Object.keys(shapes).length}`,
        name: shapes.map((shape) => shape.name).join("-u-"),
        totalFeature: unionFeature,
        // this feels very lossy, but that is the trouble with using total features
        featureCollection: {
          type: "FeatureCollection",
          features: [unionFeature],
        },
      };

      return newShape;
    },
    [ShapeOperation.Intersection]: (shapes: Shape[]): Shape => {
      const intersectionFeature = getTotalIntersectionFeatureOfShapes(shapes);

      const newShape: Shape = {
        id: `${new Date().toISOString}-${Object.keys(shapes).length}`,
        name: shapes.map((shape) => shape.name).join("-i-"),
        totalFeature: intersectionFeature,
        // this feels very lossy, but that is the trouble with using total features
        featureCollection: {
          type: "FeatureCollection",
          features: [intersectionFeature],
        },
      };

      return newShape;
    },
  };

  const performOperationOnSelectedShapes = (operation: ShapeOperation) => {
    const targetShapes = Object.entries(selectedShapes)
      .filter(([_, isSelected]) => isSelected)
      .map(([shapeId, _]) => shapes[shapeId]);

    const newShape = shapeOperations[operation](targetShapes);

    dispatch(addShape({ shape: newShape }));
    dispatch(
      removeShapesFromSolution({
        solutionId: selectedSolution.id,
        shapeIds: targetShapes.map((shape) => shape.id),
      })
    );
    dispatch(
      addShapeToSolution({ solutionId: selectedSolution.id, shape: newShape })
    );
    dispatch(setSelectedShapes({ selectedShapes: { [newShape.id]: true } }));
  };

  return {
    performOperationOnSelectedShapes,
  };
}
