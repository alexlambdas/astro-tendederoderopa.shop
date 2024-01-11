import type { ConfigAppDto } from "../domain/dtos/ConfigApp.dto";
import type { IntroImageSummaryDto } from "../domain/dtos/IntroImageSummary.dto";
import type { ProductSummaryDto } from "../domain/dtos/ProductSummary.dto";
import type { DataObjectCategoryType } from "../domain/types/Category.types";
import type { IntroImageType } from "../domain/types/IntroImage.type";
import type { MetaTagType } from "../domain/types/MetaTag.types";
import type { DataObjectProductType, ProductByIdType, ProductType } from "../domain/types/Product.types";
import type { DataObjectSubCategoryType } from "../domain/types/SubCategory.types";

const compose = (...fns: any[]) => (x: any) => fns.reduceRight((y, f) => f(y), x); 

export function fnOrderById(a: DataObjectCategoryType, b: DataObjectCategoryType): number{
  return a.id-b.id;
}

export function fnFilterIntroImageByPage(page: string){
  return function(introImageObj: IntroImageType): IntroImageType{
    const dataArray = introImageObj.data;
    const meta = introImageObj.meta;
    const dataArrayFiltered = dataArray.filter(dataObj => dataObj.attributes.page === page);
    return{
      data: dataArrayFiltered,
      meta: meta,
    }
  }
}

export function fnGetIntroImageSummary(introImageObj: IntroImageType){
  return function(configAppObj: ConfigAppDto): IntroImageSummaryDto{

    const domain = configAppObj.SITE_DOMAIN+'/cms';

    return{

      imageSmall: domain+introImageObj
        .data[0]
        .attributes
        .image.data[0]
        .attributes
        .formats
        .small
        .url,

      imageMedium: domain+introImageObj
        .data[0]
        .attributes
        .image.data[0]
        .attributes
        .formats
        .medium
        .url,

      imageLarge: domain+introImageObj
        .data[0]
        .attributes
        .image.data[0]
        .attributes
        .formats
        .large.url,

      imageExtraLarge: domain+introImageObj
        .data[0]
        .attributes
        .image
        .data[0]
        .attributes
        .formats
        .large
        .url,

      src: domain+introImageObj
        .data[0]
        .attributes
        .image
        .data[0]
        .attributes
        .formats
        .large
        .url,

      alt: introImageObj
        .data[0]
        .attributes
        .title,

      description: introImageObj
        .data[0]
        .attributes
        .description,
        
    }
  }
}

export function fnFilterProductByTag(tagName: string){
  return function(productObj: ProductType): ProductType{

    const data = productObj.data.filter(product => {
      const data = product.attributes.tags.data.filter(tagObj => tagObj.attributes.name === tagName);
      if(data.length > 0){
        return product;
      }
    });

    return{
      data: data,
      meta: productObj.meta,
    }
  }
}

export function fnGetProductsSummary(productObj: ProductType){
  return function(configAppObj: ConfigAppDto): ProductSummaryDto[]{

    const domain = configAppObj.SITE_DOMAIN+'/cms';
    const data = productObj.data.map(product => {
      return {
  
        imageSmall: domain+product
          .attributes
          .productImg
          .data[0]
          .attributes
          .formats
          .small
          .url,
  
        imageMedium: domain+product
          .attributes
          .productImg
          .data[0]
          .attributes
          .formats
          .medium
          .url,
  
        imageLarge: domain+product
          .attributes
          .productImg
          .data[0]
          .attributes
          .formats
          .large
          .url,
  
        imageExtraLarge: domain+product
          .attributes
          .productImg
          .data[0]
          .attributes
          .formats
          .large
          .url,
  
        src: domain+product
          .attributes
          .productImg
          .data[0]
          .attributes
          .formats
          .large
          .url,
  
        alt: product.attributes.title,
        brand: product.attributes.brand,
        title: product.attributes.title,
        price: product.attributes.price,
        rating: product.attributes.rating,
        originalUrl: product.attributes.originalUrl,
        affiliateUrl: product.attributes.affiliateUrl,
        text: product.attributes.text,
  
        }
    });

    return data;
  }
}

export function fnFilterMetaTagByPage(page: string){
  return function(metaTagObj: MetaTagType): MetaTagType{
    const dataArray = metaTagObj.data;
    const meta = metaTagObj.meta;
    const dataArrayFiltered = dataArray.filter(dataObj => dataObj.attributes.page === page);
    return{
      data: dataArrayFiltered,
      meta: meta,
    }
  }
}

export function fnFilterProductByCategoryAndSubcategory(category: string){
  return function(subCategory: string){
    return function(productObj: ProductType): ProductType{

      const predicateCategory = (dataObj: DataObjectCategoryType) => dataObj.attributes.name === category;
      const prediteSubCategory = (dataObj: DataObjectSubCategoryType) => dataObj.attributes.name === subCategory;
      const filteredByCategory = (dataObj: DataObjectProductType[]) => {
        return dataObj.filter(obj => {
          const dataCategories = obj.attributes.categories.data.filter(predicateCategory);
          if(dataCategories.length > 0){
            const attributes = {
              ...obj.attributes,
              categories: dataCategories,
            };
            return{
              ...obj,
              attributes: attributes,
            }
          }
        })
      }
      const filteredBySubCategory = (dataObj: DataObjectProductType[]) => {
        return dataObj.filter(obj => {
          const dataSubCategories = obj.attributes.sub_categories.data.filter(prediteSubCategory);
          if(dataSubCategories.length > 0){
            const attributes = {
              ...obj.attributes,
              sub_categories: dataSubCategories,
            };
            return{
              ...obj,
              attributes: attributes,
            }
          }
        })
      }

      const result = compose(
        filteredBySubCategory,
        filteredByCategory,
      )(productObj.data);
      
      return {
        data: result,
        meta: productObj.meta,
      }
    }
  }
}

export function fnFilterProductByCategory(category: string){
  return function(productObj: ProductType): ProductType{

    const predicateCategory = (dataObj: DataObjectCategoryType) => dataObj.attributes.name === category;
    const filteredByCategory = (dataObj: DataObjectProductType[]) => {
      return dataObj.filter(obj => {
        const dataCategories = obj.attributes.categories.data.filter(predicateCategory);
        if(dataCategories.length > 0){
          const attributes = {
            ...obj.attributes,
            categories: dataCategories,
          };
          return{
            ...obj,
            attributes: attributes,
          }
        }
      })
    }

    const result = compose(
      filteredByCategory,
    )(productObj.data);
    
    return {
      data: result,
      meta: productObj.meta,
    }
  }
}

export function fnGetManyProductsById(idList: number[], configAppDto: ConfigAppDto){
  return async function(f: (url: string) => Promise<ProductByIdType>): Promise<ProductType>{
    
    let listProducts: ProductType = { data: [] };

    if(idList.length <= 0) return listProducts;
    const length = idList.length;
    const domain = configAppDto.SITE_DOMAIN;
    const productById = configAppDto.PATH_API_PRODUCTS_BY_ID;
    const finalPath = '?populate[productImg][populate][0]=productImg';

    for(let index = 0; index < length; index++){
      const resultProduct = await f(domain+productById+`${idList[index]}`+finalPath);
      if(resultProduct.data !== null){
        listProducts = {
          data: [
            ...listProducts.data,
            resultProduct.data,
          ]
        }
      }
    }

    return listProducts;
  }
}


