const FIRST_PAGE = 1;

const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  setcurrentPage,
  currentPage,
}) => {
  const handleNextPage = () => {
    setcurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handleLastPage = () => setcurrentPage(lastPage);

  const handlePreviusPage = () => {
    setcurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage >= FIRST_PAGE) return newPage;
      return prevPage;
    });
  };

  const handleFirstPage = () => setcurrentPage(FIRST_PAGE);

  return (
    <ul className="flex justify-center gap-4 p-4 items-center ">
      {currentPage >= 2 && (
        <li
          className="bg-red rounded-full cursor-pointer p-[1px]"
          onClick={handleFirstPage}
        >
          {<i className="bx bx-skip-previous"></i>}
        </li>
      )}

      {currentPage >= 2 && (
        <li
          className="bg-red rounded-full cursor-pointer p-[1px]"
          onClick={handlePreviusPage}
        >
          {<i className="bx bx-rewind"></i>}
        </li>
      )}
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`cursor-pointer p-[1px] rounded-full ${
            currentPage === page ? "text-white bg-red" : ""
          } `}
          key={page}
          onClick={() => setcurrentPage(page)}
        >
          {page}
        </li>
      ))}
      {currentPage < lastPage && (
        <li
          className="bg-red rounded-full cursor-pointer p-[1px]"
          onClick={handleNextPage}
        >
          {<i className="bx bx-skip-next"></i>}
        </li>
      )}
      {currentPage < lastPage && (
        <li
          className="bg-red rounded-full cursor-pointer p-[1px]"
          onClick={handleLastPage}
        >
          {<i className="bx bx-fast-forward"></i>}
        </li>
      )}
    </ul>
  );
};
export default Pagination;
