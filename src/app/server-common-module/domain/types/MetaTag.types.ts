import type { MetaType } from "./Meta.types";

export type MetaTagType = {
  data: DataObjectMetaTagType[];
  meta?: MetaType;
}

type DataObjectMetaTagType = {
  id: number;
  attributes: AttributesMetaTagType;
}

type AttributesMetaTagType = {
  language: string;
  copyright: string;
  author: string;
  audience: string;
  description: string;
  keywords: string;
  robots: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  themeColor: string;
  title: string;
  page: string;
}