import { Metadata } from 'next';
import ProfileInfo from '../components/ProfileInfo/ProfileInfo';
import PageLayout from '../layouts/PageLayout/PageLayout';

export const metadata: Metadata = {
  title: 'Profile page',
};

const ProfilePage = async () => {
  return (
    <PageLayout>
      <ProfileInfo />
    </PageLayout>
  );
};

export default ProfilePage;
