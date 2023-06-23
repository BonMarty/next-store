'use client';

import { getGreetings } from '@/app/utils/getGreetings';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logoutUser } from '@/redux/slices/userSlice/userSlice';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { BiLogOut } from 'react-icons/bi';
import Button from '../ui/Button/Button';
import CustomLink from '../ui/CustomLink/CustomLink';

interface IProps {
  showProfilePopup: boolean;
}

const ProfilePopup: FC<IProps> = ({ showProfilePopup }) => {
  const { user } = useAppSelector((state) => state.user);

  const greetings = getGreetings();

  const dispatch = useAppDispatch();

  const router = useRouter();

  const logout = () => {
    dispatch(logoutUser());
    router.push('/auth');
  };

  return (
    <div
      className={`${
        showProfilePopup ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } absolute top-full right-4 p-4 w-fit space-y-4 rounded-lg shadow-lg transition-all duration-300 bg-white dark:bg-zinc-900 dark:shadow-black`}>
      <p className="text-xl font-medium">
        {greetings}, {user ? user.displayName : 'Guest'}
      </p>
      <CustomLink href={'/profile'}>Go to profile</CustomLink>
      <p>{user?.email}</p>
      <Button width="fit" onClick={logout}>
        <span className="flex items-center gap-2">
          Logout
          <BiLogOut className="text-xl rotate-180" />
        </span>
      </Button>
    </div>
  );
};

export default ProfilePopup;
