import { FC } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface IProps {
  rating: number;
}

const StarRating: FC<IProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index} className="text-yellow-400">
        {rating >= index + 1 ? (
          <FaStar className="text-xl" />
        ) : rating >= number ? (
          <FaStarHalfAlt className="text-xl" />
        ) : (
          <AiOutlineStar className="text-2xl text-gray-400" />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-1">
      {stars} ({rating})
    </div>
  );
};

export default StarRating;
