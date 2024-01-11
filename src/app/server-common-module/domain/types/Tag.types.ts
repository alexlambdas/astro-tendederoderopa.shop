import type { MetaType } from "./Meta.types";

export type TagType = {
  data: DataObjectTagType[];
  meta?: MetaType;
}

type DataObjectTagType = {
  id: number;
  attributes: AttributesTagType;
}

type AttributesTagType = {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}