import type { CommonModuleDto } from "./domain/dtos/CommonModule.dto";
import { fnHttpCall } from "./infraestructure/HttpCall.service";
import { 
  fnFilterIntroImageByPage, 
  fnFilterProductByTag, 
  fnOrderById, 
  fnGetIntroImageSummary, 
  fnGetProductSummaryList, 
  fnFilterMetaTagByPage, 
  fnFilterProductByCategoryAndSubcategory, 
  fnFilterProductByCategory, 
  fnGetProductListForEachId, 
  fnAddDescripcionToImages,
  fnAddTitleToImages,
  fnFetchProductListByOnePage,
  fnFetchProductLisByAllPages
} from './business/Common.service';

export default function(): CommonModuleDto{
  return{
    fnHttpCall: fnHttpCall,
    fnOrderById: fnOrderById,
    fnFilterIntroImageByPage: fnFilterIntroImageByPage,
    fnGetIntroImageSummary: fnGetIntroImageSummary,
    fnFilterProductByTag: fnFilterProductByTag,
    fnGetProductSummaryList: fnGetProductSummaryList,
    fnFilterMetaTagByPage: fnFilterMetaTagByPage,
    fnFilterProductByCategoryAndSubcategory: fnFilterProductByCategoryAndSubcategory,
    fnFilterProductByCategory: fnFilterProductByCategory,
    fnGetProductListForEachId: fnGetProductListForEachId,
    fnFetchProductListByOnePage: fnFetchProductListByOnePage,
    fnAddDescripcionToImages: fnAddDescripcionToImages,
    fnAddTitleToImages: fnAddTitleToImages,
    fnFetchProductLisByAllPages: fnFetchProductLisByAllPages,
  }
}

