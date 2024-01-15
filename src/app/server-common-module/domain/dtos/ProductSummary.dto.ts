export type ProductSummaryDto = {
  id: number;
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
  video: string | null;
  posterVideo: string | null;
  discount: string | null;
  description?: string;
}