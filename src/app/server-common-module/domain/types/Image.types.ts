export type ImageType = {
  data: DataObjectImageType[];
}

type DataObjectImageType = {
  id: number;
  attributes: AttributesImageType;
}

type AttributesImageType = {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  formats: FormatsType;
}

type FormatsType = {
  large: ImagePropertiesType;
  small: ImagePropertiesType;
  medium: ImagePropertiesType;
  thumbnail: ImagePropertiesType;
}

type ImagePropertiesType = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}