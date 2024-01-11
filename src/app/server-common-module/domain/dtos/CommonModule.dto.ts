import type { DataObjectCategoryType } from "../types/Category.types"
import type { IntroImageType } from "../types/IntroImage.type"
import type { MetaTagType } from "../types/MetaTag.types"
import type { ProductType } from "../types/Product.types"
import type { ConfigAppDto } from "./ConfigApp.dto"
import type { IntroImageSummaryDto } from "./IntroImageSummary.dto"
import type { ProductSummaryDto } from "./ProductSummary.dto"

export type CommonModuleDto = {
  fnHttpCall: <T>(arg: string) => Promise<T>,
  fnOrderById: (a: DataObjectCategoryType, b: DataObjectCategoryType) => number,
  fnFilterIntroImageByPage: (page: string) => (introImageObj: IntroImageType) => IntroImageType,
  fnGetIntroImageSummary: (introImageObj: IntroImageType) => (configAppObj: ConfigAppDto) => IntroImageSummaryDto,
  fnFilterProductByTag: (tagName: string) => (productObj: ProductType) => ProductType,
  fnGetProductsSummary: (productObj: ProductType) => (configAppObj: ConfigAppDto) => ProductSummaryDto[],
  fnFilterMetaTagByPage: (page: string) => (metaTagObj: MetaTagType) => MetaTagType,
  fnFilterProductByCategoryAndSubcategory: (category: string) => (subCategory: string) => (productObj: ProductType) => ProductType,
  fnFilterProductByCategory: (category: string) => (productObj: ProductType) => ProductType,
  fnGetManyProductsById: (idList: number[], configAppDto: ConfigAppDto) => (f: <T>(url: string) => Promise<T>) => Promise<ProductType>,
}