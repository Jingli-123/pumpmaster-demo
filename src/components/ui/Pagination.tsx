import { useState } from 'react';

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}: {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex space-x-2 mt-4 justify-center">
      {pages.map((page) => (
        <button
          data-testid={`page-${page}`}
          type="button"
          key={page}
          onClick={() => handleClick(page)}
          className={`px-3 py-1 rounded border ${
            page === currentPage
              ? 'bg-blue-500 text-white border-blue-500'
              : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
