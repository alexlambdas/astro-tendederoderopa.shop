export type MetaType = {
  pagination: PaginationMetaType;
}

type PaginationMetaType = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}