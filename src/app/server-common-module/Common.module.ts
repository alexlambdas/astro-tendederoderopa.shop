import type { CommonModuleDto } from "./domain/dtos/CommonModule.dto";
import { fnHttpCall } from "./infraestructure/HttpCall.service";
import { fnFilterIntroImageByPage, fnFilterProductByTag, fnOrderById, fnGetIntroImageSummary, fnGetProductsSummary, fnFilterMetaTagByPage, fnFilterProductByCategoryAndSubcategory, fnFilterProductByCategory, fnGetManyProductsById } from './business/Common.service';

export default function(): CommonModuleDto{
  return{
    fnHttpCall: fnHttpCall,
    fnOrderById: fnOrderById,
    fnFilterIntroImageByPage: fnFilterIntroImageByPage,
    fnGetIntroImageSummary: fnGetIntroImageSummary,
    fnFilterProductByTag: fnFilterProductByTag,
    fnGetProductsSummary: fnGetProductsSummary,
    fnFilterMetaTagByPage: fnFilterMetaTagByPage,
    fnFilterProductByCategoryAndSubcategory: fnFilterProductByCategoryAndSubcategory,
    fnFilterProductByCategory: fnFilterProductByCategory,
    fnGetManyProductsById: fnGetManyProductsById,
  }
}

