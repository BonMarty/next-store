import { FC, ReactNode, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Heading from '../Heading/Heading';

interface IProps {
  children: ReactNode;
  title: string;
}

const Accordion: FC<IProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full bg-white dark:bg-zinc-900 rounded-lg shadow-lg dark:shadow-black px-4 py-2">
      <div className="flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
        <Heading size="2xl">{title}</Heading>
        <IoIosArrowDown
          className={`${
            isOpen ? '-rotate-180' : 'rotate-0'
          } text-2xl z-10 cursor-pointer hover:text-sky-400 dark:hover:text-purple-400 transition-all duration-300`}
        />
      </div>
      <div
        className={`${
          isOpen
            ? 'h-full opacity-100 mt-8 pointer-events-auto'
            : 'h-0 opacity-0 mt-0 pointer-events-none'
        } transition-all duration-300`}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;
