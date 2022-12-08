import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import solutionsSlice from "./solutions";
import shapesSlice from "./shapes";
import workspaceSlice from "./workspace";

export const store = configureStore({
  reducer: {
    solutions: solutionsSlice,
    shapes: shapesSlice,
    workspace: workspaceSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
