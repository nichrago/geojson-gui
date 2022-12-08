import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { getTotalFeatureOfFeatureCollection } from "../services/shape-calculations";
import { Shape } from "../types";
import { DEFAULT_SHAPES } from "../config/defaultShapes";

export interface ShapesSlice {
  shapes: { [shapeId: string]: Shape };
}

const initialState: ShapesSlice = {
  shapes: Object.keys(DEFAULT_SHAPES).reduce(
    (shapes, shapeId) => ({
      ...shapes,
      [shapeId]: {
        id: shapeId,
        name: shapeId,
        featureCollection: DEFAULT_SHAPES[shapeId],
        totalFeature: getTotalFeatureOfFeatureCollection(
          DEFAULT_SHAPES[shapeId]
        ),
      },
    }),
    {}
  ),
};

export const shapesSlice = createSlice({
  name: "solutions",
  initialState,
  reducers: {
    addShape: (state, action: PayloadAction<{ shape: Shape }>) => {
      state.shapes[action.payload.shape.id] = action.payload.shape;
    },
  },
});

export const { addShape } = shapesSlice.actions;

export default shapesSlice.reducer;
