import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  name: string;
  image: string;
}

const Empty: FC<IProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col justify-center items-center my-auto gap-12">
      <h1 className="text-4xl font-medium">Your {name} is empty</h1>
      <Image src={image} alt={`Empty ${name}`} width={400} height={400} />
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <Link href={'/'}>
          Go to{' '}
          <span className="text-sky-500 dark:text-purple-500 transition-all duration-300 hover:text-blue-500 dark:hover:text-violet-600">
            Home page
          </span>
        </Link>
        <Link href={'/products'}>
          Go to{' '}
          <span className="text-sky-500 dark:text-purple-500 transition-all duration-300 hover:text-blue-500 dark:hover:text-violet-600">
            Products page
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Empty;
