import { FC } from 'react';

const ProductRowSkeleton: FC = () => {
  return (
    <tr className="w-full h-fit rounded py-2 sm:py-0 flex flex-col justify-center items-center gap-4 sm:table-row bg-gray-400">
      <td className="w-fit py-2 pl-2">
        <div className="w-24 h-24 rounded-lg bg-gray-500 animate-pulse"></div>
      </td>
      <td>
        <div className="w-36 h-5 rounded-lg bg-gray-500 animate-pulse"></div>
      </td>
      <td>
        <div className="w-14 h-5 rounded-lg bg-gray-500 animate-pulse"></div>
      </td>
      <td>
        <div className="w-12 h-10 rounded-lg bg-gray-500 animate-pulse"></div>
      </td>
      <td>
        <div className="w-28 h-10 rounded bg-gray-500 animate-pulse"></div>
      </td>
    </tr>
  );
};

export default ProductRowSkeleton;
