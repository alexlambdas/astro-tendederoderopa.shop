import type { CategoryType } from "../types/Category.types";
import type { IntroImageType } from "../types/IntroImage.type";
import type { MetaTagType } from "../types/MetaTag.types";
import type { ProductType } from "../types/Product.types";

export type StateAppDto = {
  categories: CategoryType;
  products: ProductType;
  introImages: IntroImageType;
  metaTags: MetaTagType;
}