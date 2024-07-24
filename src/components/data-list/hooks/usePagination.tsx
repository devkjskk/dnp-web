import { useState } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { metadata } from "@/app/layout";

interface IFetchFn {
  page?: number;
  search?: string;
  limit?: number;
}

interface PaginateProps {
  defaultPage?: number;
  defaultPageSize?: number;
  useFetchFn: ({
    page,
    search,
    limit,
  }: IFetchFn) => UseQueryResult<any, unknown>;
  searchText?: string;
}

export const usePagination = ({
  defaultPage = 1,
  defaultPageSize = 10,
  useFetchFn,
  searchText = "",
}: PaginateProps) => {
  const [pagination, setPagination] = useState({
    pageIndex: defaultPage,
    pageSize: defaultPageSize,
  });

  const { data, isLoading } = useFetchFn({
    page: pagination.pageIndex,
    limit: defaultPageSize,
    ...(searchText && { search: searchText, page: defaultPage }),
  });

  return {
    data: data?.items,
    options: {
      pagination,
      setPagination,
      metadata: data?.meta,
      rowCount: data?.meta.totalItems,
      ...(searchText && {
        pagination: {
          ...pagination,
          pageIndex: defaultPage,
        },
      }),
    },
    isLoading,
  };
};
