import L from "leaflet";
import { MapContainer, TileLayer, Popup, Marker, GeoJSON } from "react-leaflet";

import { mapTokens } from "../styles/mapTokens";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { toggleShapeSelection } from "../store/workspace";

export function WorkSurface() {
  const shapes = useAppSelector((store) => store.shapes.shapes);
  const selectedSolution = useAppSelector(
    (store) => store.solutions.solutions[store.solutions.selectedSolutionId]
  );
  const activeShapes = selectedSolution.shapes.map(
    (shapeId) => shapes[shapeId]
  );
  const selectedShapes = useAppSelector(
    (store) => store.workspace.selectedShapes
  );
  const dispatch = useAppDispatch();

  const _onShapeClick = (shapeId: string) => {
    dispatch(toggleShapeSelection({ shapeId }));
  };

  const _registerGeoJSONClick =
    (shapeId: string) => (feature: any, layer: any) => {
      layer.on("click", () => _onShapeClick(shapeId));
    };

  const Shapes = activeShapes.map((shape) => (
    <GeoJSON
      key={shape.id}
      data={shape.featureCollection}
      style={{
        color: selectedShapes[shape.id]
          ? mapTokens.colors.selected
          : mapTokens.colors.default,
        weight: selectedShapes[shape.id]
          ? mapTokens.weights.selected
          : mapTokens.weights.default,
        fillOpacity: selectedShapes[shape.id]
          ? mapTokens.opacities.selected
          : mapTokens.opacities.default,
      }}
      onEachFeature={_registerGeoJSONClick(shape.id)}
    />
  ));

  return (
    <MapContainer
      style={{ height: "100%" }}
      scrollWheelZoom={true}
      doubleClickZoom={false}
      zoomControl={false}
      boundsOptions={{ padding: L.point(10, 10) }}
      bounds={L.geoJSON(
        activeShapes.map((shape) => shape.featureCollection)
      ).getBounds()}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        className="map-tiles"
      />
      {Shapes}
    </MapContainer>
  );
}
