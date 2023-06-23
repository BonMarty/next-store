import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FC } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { SlLocationPin } from 'react-icons/sl';

const DynamicFooterLink = dynamic(() => import('../ui/FooterLink/FooterLink'), {
  loading: () => <p>Loading...</p>,
});

const Footer: FC = () => {
  return (
    <footer className="py-6 px-4 shadow-inner text-gray-800 transition-colors duration-300 dark:bg-black dark:text-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link href="/" className="text-4xl font-semibold w-fit h-fit">
          Store.
        </Link>
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-xl font-medium">Online store</h2>
          <DynamicFooterLink href="/" title="Home" />
          <DynamicFooterLink href="/products" title="Catalogue" />
        </div>

        <div className="flex flex-col items-start space-y-2">
          <h3 className="text-xl font-medium">User</h3>
          <DynamicFooterLink href="/profile" title="Profile" />
          <DynamicFooterLink href="/cart" title="Cart" />
          <DynamicFooterLink href="/wishlist" title="Wishlist" />
        </div>

        <div className="flex flex-col items-start space-y-4">
          <h4 className="text-xl font-medium">Contacts</h4>
          <div className="space-y-2">
            <p className="text-left text-lg">Our adress:</p>
            <div className="flex items-center gap-2">
              <SlLocationPin className="text-2xl" />
              <p>123 Main Street, New York, NY 10030</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-left text-lg">Our contact phone:</p>
            <div className="flex items-center gap-2">
              <AiOutlinePhone className="text-2xl rotate-90" />
              <p>+91-987654321</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-left text-lg">Our e-mail:</p>
            <div className="flex items-center gap-2">
              <AiOutlineMail className="text-2xl" />
              <p>online-store@dev.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
