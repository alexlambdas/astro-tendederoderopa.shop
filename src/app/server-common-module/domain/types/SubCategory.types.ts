import type { ImageSvgType } from "./ImageSvg.types";
import type { MetaType } from "./Meta.types";

export type SubCategoryType = {
  data: DataObjectSubCategoryType[];
  meta?: MetaType;
}

export type DataObjectSubCategoryType = {
  id: number;
  attributes: AttributesSubCategoryType;
}

type AttributesSubCategoryType = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  thumbnail: ImageSvgType;
}