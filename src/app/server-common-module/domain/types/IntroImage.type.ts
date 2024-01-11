import type { ImageType } from "./Image.types";
import type { MetaType } from "./Meta.types";

export type IntroImageType = {
  data: DataObjectIntroImageType[];
  meta?: MetaType;
}

type DataObjectIntroImageType = {
  id: number;
  attributes: AttributesIntroImageType;
}

type AttributesIntroImageType = {
  urlUser: string;
  urlSite: string;
  page: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: ImageType;
}