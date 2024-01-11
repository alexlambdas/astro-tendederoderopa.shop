import type { CategoryType } from "./Category.types";
import type { ImageType } from "./Image.types";
import type { MetaType } from "./Meta.types";
import type { SubCategoryType } from "./SubCategory.types";
import type { TagType } from "./Tag.types";

export type ProductType = {
  data: DataObjectProductType[];
  meta?: MetaType;
}

export type ProductByIdType = {
  data: DataObjectProductType;
}

export type DataObjectProductType = {
  id: number;
  attributes: AttributesProductType;
}

type AttributesProductType = {
  brand: string;
  model?: string;
  asin: string;
  price: number;
  title: string;
  rating: number;
  originalUrl: string;
  affiliateUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  categories: CategoryType;
  sub_categories: SubCategoryType;
  productImg: ImageType;
  tags: TagType;
  text?: string;
}