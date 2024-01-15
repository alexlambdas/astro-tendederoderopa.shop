import type { MetaType } from "./Meta.types";

export type VideoType = {
  data: DataObjectVideoType[];
  meta?: MetaType;
}

export type DataObjectVideoType = {
  id: number;
  attributes: AttributesVideoType;
}

export type AttributesVideoType = {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: string | null;
  height: string | null;
  formats: string | null;
  hash: string;
  ext: string;
  mime: string;
  size: number,
  url: string;
  previewUrl: string | null;
  provider: string | null;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}