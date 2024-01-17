import type { DataObjectCategoryType } from "../types/Category.types"
import type { IntroImageType } from "../types/IntroImage.type"
import type { MetaTagType } from "../types/MetaTag.types"
import type { ProductListType, ProductType } from "../types/Product.types"
import type { ConfigAppDto } from "./ConfigApp.dto"
import type { IntroImageSummaryDto } from "./IntroImageSummary.dto"
import type { ProductSummaryDto } from "./ProductSummary.dto"

export type CommonModuleDto = {
  fnHttpCall: <T>(arg: string) => Promise<T>,
  fnOrderById: (a: DataObjectCategoryType, b: DataObjectCategoryType) => number,
  fnFilterIntroImageByPage: (page: string) => (introImageObj: IntroImageType) => IntroImageType,
  fnGetIntroImageSummary: (introImageObj: IntroImageType) => (configAppObj: ConfigAppDto) => IntroImageSummaryDto,
  fnFilterProductByTag: (tagName: string) => (productObj: ProductListType) => ProductListType,
  fnGetProductSummaryList: (productList: ProductType[]) => (configAppObj: ConfigAppDto) => ProductSummaryDto[],
  fnFilterMetaTagByPage: (page: string) => (metaTagObj: MetaTagType) => MetaTagType,
  fnFilterProductByCategoryAndSubcategory: (category: string) => (subCategory: string) => (productObj: ProductListType) => ProductListType,
  fnFilterProductByCategory: (category: string) => (productObj: ProductListType) => ProductListType,
  fnGetProductListForEachId: <T1>(idList: number[], configAppDto: ConfigAppDto) => (f: <T2>(url: string) => Promise<T2>) => Promise<Awaited<T1>[]>,
  fnAddDescripcionToImages: (productSummaryList: ProductSummaryDto[], keywords: Map<number,string>) => ProductSummaryDto[],
  fnAddTitleToImages: (productSummaryList: ProductSummaryDto[], titles: Map<number,string>) => ProductSummaryDto[],
}