'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setDarkTheme, setLightTheme } from '@/redux/slices/themeSlice/themeSlice';
import { store } from '@/redux/store';
import { FC } from 'react';
import { BiMoon } from 'react-icons/bi';
import { ImSun } from 'react-icons/im';

const ThemeSwitch: FC = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const switchTheme = () => {
    if (theme === 'dark') {
      dispatch(setLightTheme());
      store.dispatch(setLightTheme());
    } else {
      dispatch(setDarkTheme());
      store.dispatch(setDarkTheme());
    }
  };

  return (
    <label
      className={`${
        theme === 'dark' ? 'bg-violet-800' : 'bg-blue-200'
      } w-14 h-6 relative rounded-2xl`}>
      <div
        className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-yellow-400'} w-6 h-6 absolute top-0 ${
          theme === 'dark' ? 'left-8' : 'left-0'
        } flex justify-center items-center shadow transition-all duration-300 rounded-full cursor-pointer`}>
        {theme === 'dark' ? (
          <BiMoon className="text-xl text-white" />
        ) : (
          <ImSun className="text-xl text-white" />
        )}
      </div>
      <input type="checkbox" className="hidden" onChange={() => switchTheme()} />
    </label>
  );
};

export default ThemeSwitch;
