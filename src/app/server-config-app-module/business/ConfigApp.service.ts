import type { ConfigAppDto } from "../../server-common-module/domain/dtos/ConfigApp.dto";

export function fnConfigApp(): ConfigAppDto {
  return {
    SITE_DOMAIN_LINKS: import.meta.env.SITE_DOMAIN_LINKS,
    SITE_DOMAIN: import.meta.env.SITE_DOMAIN,
    PATH_API_CATEGORIES_AND_SUB_CATEGORIES: import.meta.env.PATH_API_CATEGORIES_AND_SUB_CATEGORIES,
    PATH_API_INTRO_IMAGES: import.meta.env.PATH_API_INTRO_IMAGES,
    PATH_API_PRODUCTS: import.meta.env.PATH_API_PRODUCTS,
    PATH_API_META_TAGS: import.meta.env.PATH_API_META_TAGS,
    PATH_API_PRODUCTS_BY_ID: import.meta.env.PATH_API_PRODUCTS_BY_ID,
  }
}