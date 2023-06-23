import { useAppDispatch } from '@/redux/hooks';
import { changeActivePage } from '@/redux/slices/paginationSlice/paginationSlice';
import { FC } from 'react';
import ReactPaginate from 'react-paginate';

interface IProps {
  pageCount: number;
}

const Pagination: FC<IProps> = ({ pageCount }) => {
  const dispatch = useAppDispatch();

  const handlePaginate = (selected: number) => {
    dispatch(changeActivePage(selected));
    window.scrollTo(0, 0);
  };

  return (
    <ReactPaginate
      className="flex justify-center items-center"
      pageClassName="w-8 h-9 flex justify-center items-center cursor-pointer border transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
      activeClassName="bg-blue-500 dark:bg-violet-500 pointer-events-none"
      activeLinkClassName="text-white"
      breakLabel="..."
      breakClassName="w-8 h-9 border flex justify-center items-center"
      nextLabel="Next"
      nextClassName="w-16 h-9 flex justify-center items-center border rounded-r-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
      nextLinkClassName="text-blue-500 dark:text-violet-500"
      onPageChange={(e) => handlePaginate(e.selected + 1)}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      previousLabel="Prev"
      previousClassName="w-16 h-9 flex justify-center items-center border rounded-l-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
      previousLinkClassName="text-blue-500 dark:text-violet-500"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
