import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface IProps {
  href: string;
  children: ReactNode;
}

const CustomLink: FC<IProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="block transition-all duration-300 hover:text-sky-400 dark:hover:text-purple-400">
      {children}
    </Link>
  );
};

export default CustomLink;
