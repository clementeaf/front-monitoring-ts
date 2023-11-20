// src/components/SimplePagination.tsx
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Commit } from "../../services/interfaces.commits";
import { CommitCard } from "./CommitCards";

interface SimplePaginationProps {
  items: Commit[];
  itemsPerPage: number;
}

const SimplePagination: React.FC<SimplePaginationProps> = ({
  items,
  itemsPerPage
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div className="max-h-[750px] overflow-y-auto">
      <div className="flex flex-col gap-8">
        {currentItems.map(({ sha, commit }) => (
          <CommitCard
            key={sha}
            sha={sha ?? "No Sha"}
            message={commit?.message ?? "No Message"}
            email={commit?.author?.email ?? "No Email"}
            date={commit?.author?.date ?? "No Date"}
            name={commit?.author?.name ?? "No Name"}
          />
        ))}
      </div>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName="flex w-full justify-center items-center mt-5"
        className="flex w-full items-center justify-between px-4 mt-3 focus:outline"
        activeClassName="bg-blue-500 text-white px-2 rounded-md"
        breakLabel={"-"}
      />
    </div>
  );
};

export default SimplePagination;
