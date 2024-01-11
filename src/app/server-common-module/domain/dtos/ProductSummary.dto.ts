export type ProductSummaryDto = {
  imageSmall: string;
  imageMedium: string;
  imageLarge: string;
  imageExtraLarge: string;
  src: string;
  alt: string;
  brand: string;
  title: string;
  price: number;
  rating: number;
  originalUrl: string;
  affiliateUrl: string;
  text?: string;
}