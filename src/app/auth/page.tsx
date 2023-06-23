import { Metadata } from 'next';
import AuthForm from '../components/AuthForm/AuthForm';
import PageLayout from '../layouts/PageLayout/PageLayout';

export const metadata: Metadata = {
  title: 'Auth page',
};

const AuthPage = async () => {
  return (
    <PageLayout>
      <section className="flex justify-center items-center w-full h-screen px-4">
        <AuthForm />
      </section>
    </PageLayout>
  );
};

export default AuthPage;
