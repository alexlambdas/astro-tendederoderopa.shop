import type { ConfigAppDto } from "../domain/dtos/ConfigApp.dto";
import type { IntroImageSummaryDto } from "../domain/dtos/IntroImageSummary.dto";
import type { ProductSummaryDto } from "../domain/dtos/ProductSummary.dto";
import type { DataObjectCategoryType } from "../domain/types/Category.types";
import type { IntroImageType } from "../domain/types/IntroImage.type";
import type { MetaTagType } from "../domain/types/MetaTag.types";
import type { DataObjectProductType, ProductType, ProductListType } from "../domain/types/Product.types";
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
  return function(productObj: ProductListType): ProductListType{

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

export function fnGetProductSummaryList(productList: ProductType[]){
  return function(configAppObj: ConfigAppDto): ProductSummaryDto[]{

    const domain = configAppObj.SITE_DOMAIN+'/cms';
    const data = productList.map(product => {
      return {

        id: product.data.id,
  
        imageSmall: domain+product
          .data
          .attributes
          .productImg
          .data[0]
          .attributes
          .formats
          .small
          .url,
  
        imageMedium: domain+product
          .data
          .attributes
          .productImg
          .data[0]
          .attributes
          .formats
          .medium
          .url,
  
        imageLarge: domain+product
          .data
          .attributes
          .productImg
          .data[0]
          .attributes
          .formats
          .large
          .url,
  
        imageExtraLarge: domain+product
          .data
          .attributes
          .productImg
          .data[0]
          .attributes
          .formats
          .large
          .url,
  
        src: domain+product
          .data
          .attributes
          .productImg
          .data[0]
          .attributes
          .formats
          .large
          .url,
  
        alt: product.data.attributes.title,
        brand: product.data.attributes.brand,
        title: product.data.attributes.title,
        price: product.data.attributes.price,
        rating: product.data.attributes.rating,
        originalUrl: product.data.attributes.originalUrl,
        affiliateUrl: product.data.attributes.affiliateUrl,
        text: product.data.attributes.text,
        video: product.data.attributes.video?.data === null ? null : domain+product.data.attributes.video?.data[0].attributes.url,
        posterVideo: product.data.attributes.posterVideo?.data === null ? null : domain+product.data.attributes.posterVideo?.data[0].attributes.formats.medium.url,
        discount: product.data.attributes.discount === null ? '0%' : product.data.attributes.discount,
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
    return function(productObj: ProductListType): ProductListType{

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
  return function(productObj: ProductListType): ProductListType{

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

export function fnGetProductListForEachId<ProductType>(idList: number[], configAppDto: ConfigAppDto){
  return function(f: (url: string) => Promise<ProductType>): Promise<Awaited<ProductType>[]>{
    if(idList.length <= 0) return Promise.all([]);
    else{
      const domain = configAppDto.SITE_DOMAIN;
      const productByIdPath = configAppDto.PATH_API_PRODUCTS_BY_ID;
      const finalPath = '?populate[productImg][populate][0]=productImg&populate[video][populate][1]=video&populate[posterVideo][populate][2]=posterVideo';
      const productList = Promise.all(idList.map(async id => await f(domain+productByIdPath+`${id}`+finalPath)));
      return productList;
    }
  }
}

export function fnAddDescripcionToImages(productSummaryList: ProductSummaryDto[], keywords: Map<number,string>): ProductSummaryDto[]{
  if(productSummaryList.length === keywords.size){
    const result = productSummaryList.map(product => {
      const alt = keywords.get(product.id);
      return {
        ...product,
        alt: alt === undefined ? product.alt : alt,
      }
    });
    return result;
  }
  else{
    return productSummaryList;
  }
}

export function fnAddTitleToImages(productSummaryList: ProductSummaryDto[], titles: Map<number,string>): ProductSummaryDto[]{
  if(productSummaryList.length === titles.size){
    const result = productSummaryList.map(product => {
      const title = titles.get(product.id);
      return {
        ...product,
        title: title === undefined ? product.title : title,
      }
    });
    return result;
  }
  else{
    return productSummaryList;
  }
}


