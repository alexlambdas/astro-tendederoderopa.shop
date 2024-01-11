export type ImageSvgType = {
  data: DataObjectImageSvgType[];
}

type DataObjectImageSvgType = {
  id: number;
  attributes: AttributesImageSvgType;
}

type AttributesImageSvgType = {
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
  formats: null;
}