import {
  FeatureCollection,
  Geometry,
  MultiPolygon,
  Polygon,
  Feature,
} from "geojson";

export interface Shape {
  id: string;
  name: string;
  featureCollection: FeatureCollection<Geometry>;
  totalFeature: Feature<Polygon | MultiPolygon>;
}

export enum ShapeOperation {
  Union = "UNION",
  Intersection = "INTERSECTION",
}

export interface Solution {
  id: string;
  name: string;
  shapes: string[];
}

export const exampleSolutions: Solution[] = [
  {
    id: "1",
    name: "solution 1",
    shapes: ["challenge_shape_1", "challenge_shape_2"],
  },
  {
    id: "2",
    name: "solution 2",
    shapes: ["challenge_shape_2"],
  },
  {
    id: "3",
    name: "solution 3",
    shapes: ["challenge_shape_1"],
  },
];
