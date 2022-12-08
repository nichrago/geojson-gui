import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface WorkspaceSlice {
  selectedShapes: { [shapeId: string]: boolean };
}

const initialState: WorkspaceSlice = {
  selectedShapes: {},
};

export const workspaceSlice = createSlice({
  name: "solutions",
  initialState,
  reducers: {
    clearWorkspace: (state) => {
      state.selectedShapes = {};
    },
    toggleShapeSelection: (
      state,
      action: PayloadAction<{ shapeId: string }>
    ) => {
      state.selectedShapes[action.payload.shapeId] =
        !state.selectedShapes[action.payload.shapeId];
    },
    setSelectedShapes: (
      state,
      action: PayloadAction<{ selectedShapes: { [shapeId: string]: boolean } }>
    ) => {
      state.selectedShapes = action.payload.selectedShapes;
    },
  },
});

export const { clearWorkspace, toggleShapeSelection, setSelectedShapes } =
  workspaceSlice.actions;

export default workspaceSlice.reducer;
