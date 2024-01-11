import type { ImageType } from "./Image.types";
import type { MetaType } from "./Meta.types";
import type { SubCategoryType } from "./SubCategory.types";

export type CategoryType = {
  data: DataObjectCategoryType[];
  meta?: MetaType;
}

export type DataObjectCategoryType = {
  id: number;
  attributes: AttributesCategoryType;
}

type AttributesCategoryType = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  description: string;
  thumbnail: ImageType;
  sub_categories: SubCategoryType;
}