import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  href: string;
  title: string;
}

const FooterLink: FC<IProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="relative text-gray-500 transition-all duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:rounded-full after:bg-black dark:after:bg-white after:transition-all after:duration-500 hover:text-black focus:text-black dark:hover:text-white dark:focus:text-white hover:after:w-full focus:after:w-full">
      {title}
    </Link>
  );
};

export default FooterLink;
