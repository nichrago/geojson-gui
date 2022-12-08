import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

import { exampleSolutions, Solution, Shape } from "../types";

export interface SolutionsState {
  solutions: { [solutionId: string]: Solution };
  solutionsOrder: string[];
  selectedSolutionId: string;
}

const initialState: SolutionsState = {
  solutions: exampleSolutions.reduce(
    (solutions, solution) => ({ ...solutions, [solution.id]: solution }),
    {}
  ),
  solutionsOrder: exampleSolutions.map((solution) => solution.id),
  selectedSolutionId: exampleSolutions[0].id,
};

export const solutionsSlice = createSlice({
  name: "solutions",
  initialState,
  reducers: {
    setSelectedSolution: (
      state,
      action: PayloadAction<{ solutionId: string }>
    ) => {
      state.selectedSolutionId = action.payload.solutionId;
    },
    addShapeToSolution: (
      state,
      action: PayloadAction<{ solutionId: string; shape: Shape }>
    ) => {
      state.solutions[action.payload.solutionId].shapes.push(
        action.payload.shape.id
      );
    },
    removeShapesFromSolution: (
      state,
      action: PayloadAction<{ solutionId: string; shapeIds: string[] }>
    ) => {
      state.solutions[action.payload.solutionId].shapes = state.solutions[
        action.payload.solutionId
      ].shapes.filter((shapeId) => !action.payload.shapeIds.includes(shapeId));
    },
  },
});

export const {
  setSelectedSolution,
  addShapeToSolution,
  removeShapesFromSolution,
} = solutionsSlice.actions;

export default solutionsSlice.reducer;
