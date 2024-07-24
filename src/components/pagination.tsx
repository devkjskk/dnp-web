import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  setPagination: (pagination: { pageIndex: number; pageSize: number }) => void;
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export function Pagination({
  setPagination,
  currentPage = 0,
  itemsPerPage = 0,
  totalItems = 0,
  totalPages = 0,
}: PaginationProps) {
  const onNextPage = () => {
    setPagination({
      pageIndex: currentPage + 1,
      pageSize: itemsPerPage,
    });
  };

  const onPrevPage = () => {
    setPagination({
      pageIndex: currentPage - 1,
      pageSize: itemsPerPage,
    });
  };

  return (
    <div className="flex items-center justify-between space-x-3">
      <span className="text-sm text-gray-500">
        {currentPage} - {totalPages} of {totalItems}
      </span>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={onPrevPage}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="h-8 w-8 p-0"
          onClick={onNextPage}
          disabled={currentPage === totalPages || totalPages === 0}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
