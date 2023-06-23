import { FC } from 'react';

interface IProps {
  quantity: number;
}

const Badge: FC<IProps> = ({ quantity }) => {
  return (
    <span
      className={`${
        quantity === 0 && 'hidden'
      } absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-5 h-5 sm:w-6 sm:h-6 flex justify-center items-center bg-blue-300 dark:bg-violet-600 rounded-full`}>
      <p className="text-sm sm:text-base">{quantity}</p>
    </span>
  );
};

export default Badge;
