'use client';

import Header from '@/app/components/Header/Header';
import { useAppSelector } from '@/redux/hooks';
import { FC, ReactNode, useEffect } from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const DynamicFooter = dynamic(() => import('../../components/Footer/Footer'));

interface IProps {
  children: ReactNode;
}

const PageLayout: FC<IProps> = ({ children }) => {
  const { theme } = useAppSelector((state) => state.theme);
  const { user } = useAppSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/auth');
    }
  }, [user, router]);

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen flex flex-col justify-between`}>
      <Header />
      <main className="min-h-screen flex-1 bg-gray-100 dark:bg-zinc-950 text-gray-800 dark:text-gray-100">
        {children}
      </main>
      <DynamicFooter />
    </div>
  );
};

export default PageLayout;
