import { Metadata } from 'next';
import WishlistTable from '../components/WishlistTable/WishlistTable';
import PageLayout from '../layouts/PageLayout/PageLayout';

export const metadata: Metadata = {
  title: 'Wishlist page',
};

const WishlistPage = async () => {
  return (
    <PageLayout>
      <section className="px-4 py-8">
        <WishlistTable />
      </section>
    </PageLayout>
  );
};

export default WishlistPage;
