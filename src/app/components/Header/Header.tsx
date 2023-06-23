import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import ProfilePopup from '../ProfilePopup/ProfilePopup';
import Search from '../Search/Search';
import Badge from '../ui/Badge/Badge';
import ThemeSwitch from '../ui/ThemeSwitch/ThemeSwitch';

const Header: FC = () => {
  const { wishlist } = useAppSelector((state) => state.wishlist);
  const { cart } = useAppSelector((state) => state.cart);

  const [scrollY, setScrollY] = useState(0);
  const [activeHeader, setActiveHeader] = useState(false);
  const [showProfilePopup, setShowProfilePopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollY(window.scrollY);
        setActiveHeader(true);
      } else {
        setScrollY(0);
        setActiveHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <header className="sticky top-0 transition-colors duration-300 z-40 w-full text-gray-800 dark:text-gray-100">
      <div
        className={`${
          activeHeader
            ? 'bg-white dark:bg-black shadow'
            : 'bg-gray-100 dark:bg-zinc-950 shadow-none'
        } px-2 py-4 sm:p-4 flex justify-between items-center relative gap-4 transition-all duration-300`}>
        <div className="flex items-center gap-4">
          <Link href={'/'} className="text-2xl sm:text-3xl font-semibold">
            Store.
          </Link>
        </div>
        <Search />
        <nav className="flex items-center gap-4">
          <Link href="/products" className="sm:hidden">
            <IoSearch className="text-2xl" />
          </Link>
          <Link href="/wishlist" className="relative">
            <Badge quantity={wishlist.length} />
            <AiOutlineHeart className="text-2xl" />
          </Link>
          <Link href="/cart" className="relative">
            <Badge quantity={cart.length} />
            <MdOutlineShoppingCart className="text-2xl" />
          </Link>
          <BsPersonCircle
            className="cursor-pointer text-2xl"
            onClick={() => setShowProfilePopup(!showProfilePopup)}
          />
          <ProfilePopup showProfilePopup={showProfilePopup} />
        </nav>
        <ThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
