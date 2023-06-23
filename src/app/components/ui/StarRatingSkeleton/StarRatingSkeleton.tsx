import { FC } from 'react';
import { AiFillStar } from 'react-icons/ai';

const StarRatingSkeleton: FC = () => {
  return (
    <div className="flex items-center space-x-1 text-gray-400 text-2xl">
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
    </div>
  );
};

export default StarRatingSkeleton;
