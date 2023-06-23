import { FC } from 'react';
import { AiOutlineCreditCard, AiOutlineGift } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';
import { TbDiscount2 } from 'react-icons/tb';

const Advantages: FC = () => {
  return (
    <div className="my-20 px-4 py-6 bg-slate-200 dark:bg-zinc-900 flex justify-between items-center gap-8 overflow-x-scroll scrollbar-thin scrollbar-thumb-current">
      <div className="flex items-center gap-4 whitespace-nowrap">
        <FaShippingFast className="text-4xl" />
        <div className="space-y-2">
          <p className="text-xl font-medium">Free shipping</p>
          <p>From all orders over $100</p>
        </div>
      </div>
      <div className="flex items-center gap-4 whitespace-nowrap">
        <AiOutlineGift className="text-4xl" />
        <div className="space-y-2">
          <p className="text-xl font-medium">Daily Surprise Offers</p>
          <p>Save up to 25% off</p>
        </div>
      </div>
      <div className="flex items-center gap-4 whitespace-nowrap">
        <BiSupport className="text-4xl" />
        <div className="space-y-2">
          <p className="text-xl font-medium">Support 24/7</p>
          <p>Shop with an expert</p>
        </div>
      </div>
      <div className="flex items-center gap-4 whitespace-nowrap">
        <TbDiscount2 className="text-4xl" />
        <div className="space-y-2">
          <p className="text-xl font-medium">Affordable Prices</p>
          <p>Get Factory direct price</p>
        </div>
      </div>
      <div className="flex items-center gap-4 whitespace-nowrap">
        <AiOutlineCreditCard className="text-4xl" />
        <div className="space-y-2">
          <p className="text-xl font-medium">Secure Payments</p>
          <p>100% Protected Payments</p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
