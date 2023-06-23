import { FC } from 'react';

interface IProps {
  size: '4xl' | '3xl' | '2xl';
  children: React.ReactNode;
}

const Heading: FC<IProps> = ({ children, size }) => {
  return <h2 className={`text-${size} font-medium`}>{children}</h2>;
};

export default Heading;
