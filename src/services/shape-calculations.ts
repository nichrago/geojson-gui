import {
  FeatureCollection,
  Geometry,
  Polygon,
  MultiPolygon,
  Feature,
} from "geojson";
import { union, intersect, area } from "@turf/turf";
import { Shape } from "../types";

export function getTotalFeatureOfFeatureCollection(
  featureCollection: FeatureCollection
): Feature<Polygon | MultiPolygon> {
  const features = [];
  for (const feature of featureCollection.features) {
    // NOTE: idk enough about geojson to know how dangerous this is... non polygon features exist?
    features.push(feature as Feature<Polygon | MultiPolygon>);
  }

  if (features.length === 1) return features[0];

  let totalFeature = features[0];
  for (let i = 1; i < features.length; i++) {
    totalFeature = union(totalFeature, features[i]) || totalFeature;
  }

  return totalFeature;
}

export function getTotalUnionFeatureOfShapes(
  shapes: Shape[]
): Feature<Polygon | MultiPolygon> {
  if (shapes.length === 1) return shapes[0].totalFeature;

  let shapeUnion = shapes[0].totalFeature;
  for (let i = 1; i < shapes.length; i++) {
    shapeUnion = union(shapeUnion, shapes[i].totalFeature) || shapeUnion;
  }

  return shapeUnion;
}

export function getTotalIntersectionFeatureOfShapes(
  shapes: Shape[]
): Feature<Polygon | MultiPolygon> {
  if (shapes.length === 1) return shapes[0].totalFeature;

  let shapeIntersect = shapes[0].totalFeature;
  for (let i = 1; i < shapes.length; i++) {
    shapeIntersect =
      intersect(shapeIntersect, shapes[i].totalFeature) || shapeIntersect;
  }

  return shapeIntersect;
}

// area in square meters
export function getTotalAreaFromShapes(shapes: Shape[]): number {
  const unionFeature = getTotalUnionFeatureOfShapes(shapes);
  const unionArea = area(unionFeature);
  return unionArea;
}
