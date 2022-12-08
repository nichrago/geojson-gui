import Grid from "@mui/material/Grid";

import { InfoPanel } from "./InfoPanel";
import { SolutionPanel } from "./SolutionPanel";
import { TopBar } from "./TopBar";
import { WorkSurface } from "./WorkSurface";
import { WorkSurfaceOperationsBar } from "./WorkSurfaceOperationsBar";

export function GeoJSONGUI() {
  return (
    <>
      <TopBar />
      <Grid container>
        <Grid item xs={12} sm={12} md={2} className="solution-panel">
          <SolutionPanel />
        </Grid>
        <Grid item xs={12} sm={12} md={8} className="map">
          <WorkSurfaceOperationsBar />
          <WorkSurface />
        </Grid>
        <Grid item xs={12} sm={12} md={2} className="statistics-panel">
          <InfoPanel />
        </Grid>
      </Grid>
    </>
  );
}
