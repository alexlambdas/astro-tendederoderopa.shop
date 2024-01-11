import type { ConfigAppDto } from "../../server-common-module/domain/dtos/ConfigApp.dto";
import type { CategoryType } from "../../server-common-module/domain/types/Category.types";
import type { StateAppDto } from "../../server-common-module/domain/dtos/StateApp.dto";
import type { ProductType } from "../../server-common-module/domain/types/Product.types";
import type { IntroImageType } from "../../server-common-module/domain/types/IntroImage.type";
import type { MetaTagType } from "../../server-common-module/domain/types/MetaTag.types";

function getCategoriesAndSubCategories(configAppDto: ConfigAppDto){
  return async function(f: (url: string) => Promise<CategoryType>): Promise<CategoryType>{
    const domain = configAppDto.SITE_DOMAIN;
    const path = configAppDto.PATH_API_CATEGORIES_AND_SUB_CATEGORIES;
    return await f(domain+path);
  }
}

function getProducts(configAppDto: ConfigAppDto){
  return async function(f: (url: string) => Promise<ProductType>): Promise<ProductType>{
    const domain = configAppDto.SITE_DOMAIN;
    const path = configAppDto.PATH_API_PRODUCTS;
    let result = await f(domain+path);

    if(result.meta != undefined && result.meta.pagination.pageCount > 1){
      const page = result.meta.pagination.page;
      const pageCount = result.meta.pagination.pageCount;
      for(let index = page+1; index <= pageCount; index++){
        const resultNewPage = await f(domain+path+`&pagination[page]=${index}`);
        result = {
          ...result.meta,
          data:[
            ...result.data,
            ...resultNewPage.data,
          ]
        }
      }
    }
    return result;
  }
}

function getIntroImages(configAppDto: ConfigAppDto){
  return async function(f: (url: string) => Promise<IntroImageType>): Promise<IntroImageType>{
    const domain = configAppDto.SITE_DOMAIN;
    const path = configAppDto.PATH_API_INTRO_IMAGES;
    let result = await f(domain+path);

    if(result.meta != undefined && result.meta.pagination.pageCount > 1){
      const page = result.meta.pagination.page;
      const pageCount = result.meta.pagination.pageCount;
      for(let index = page+1; index <= pageCount; index++){
        const resultNewPage = await f(domain+path+`&pagination[page]=${index}`);
        result = {
          ...result.meta,
          data:[
            ...result.data,
            ...resultNewPage.data,
          ]
        }
      }
    }
    return result;
  }
}

function getMetaTags(configAppDto: ConfigAppDto){
  return async function(f: (url: string) => Promise<MetaTagType>): Promise<MetaTagType>{
    const domain = configAppDto.SITE_DOMAIN;
    const path = configAppDto.PATH_API_META_TAGS;
    let result = await f(domain+path);

    if(result.meta != undefined && result.meta.pagination.pageCount > 1){
      const page = result.meta.pagination.page;
      const pageCount = result.meta.pagination.pageCount;
      for(let index = page+1; index <= pageCount; index++){
        const resultNewPage = await f(domain+path+`?pagination[page]=${index}`);
        result = {
          ...result.meta,
          data:[
            ...result.data,
            ...resultNewPage.data,
          ]
        }
      }
    }
    return result;
  }
}

export async function fnBuildCommonState(

  configAppDto: ConfigAppDto,
  fnHttpCall: <T>(url: string) => Promise<T>,
  
): Promise<StateAppDto>{
  return{
    categories: await getCategoriesAndSubCategories(configAppDto)(fnHttpCall),
    products: await getProducts(configAppDto)(fnHttpCall),
    introImages: await getIntroImages(configAppDto)(fnHttpCall),
    metaTags: await getMetaTags(configAppDto)(fnHttpCall),
  }
}